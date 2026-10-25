import { computed, markRaw, onBeforeUnmount, onMounted, ref, shallowRef, watch } from 'vue'
import { useAuthStore } from 'src/stores/auth'
import { useToastStore } from 'src/stores/toast'
import { watchAllOrders } from 'src/services/orderService'
import { fetchArchivedOrders, fetchSalesArchives, saveSalesArchive } from 'src/services/salesArchiveService'
import { buildCampaign, buildReport, CURRENT_YEAR, OPEN_DATE } from 'src/utils/salesAnalytics'
import { countOutsidePeriod, readSalesWorkbook } from 'src/utils/salesImport'

// Only super admins reach this page, so a refusal means the salesArchive
// rules in firestore.rules haven't been deployed yet.
function failureMessage(message, error) {
  return error?.code === 'permission-denied' ? `${message}：沒有權限，請先部署最新的 firestore.rules` : message
}

// The analytics page: this year's orders, live from Firestore, against a past
// year imported into salesArchive.
export function useSalesAnalytics() {
  const auth = useAuthStore()
  const toast = useToastStore()

  // shallowRef: the order lists are replaced as a whole, never edited.
  const orders = shallowRef([])
  const loading = ref(true)
  const liveError = ref(false)
  const updatedAt = ref(null)
  const now = ref(Date.now())

  const archives = ref([])
  const compareYear = ref(null)
  const archive = shallowRef({ year: null, orders: [] })
  const archiveLoading = ref(false)

  // 'full': the past year's whole sale; 'same': only up to the same day and
  // time of its sale as now.
  const basis = ref('full')

  let stopWatching = null
  let clock = null

  onMounted(() => {
    stopWatching = watchAllOrders(
      (list) => {
        orders.value = list
        updatedAt.value = new Date()
        now.value = Date.now()
        liveError.value = false
        loading.value = false
      },
      (error) => {
        console.error('Order listener failed:', error)
        liveError.value = true
        loading.value = false
        toast.show('無法即時讀取訂單，請重新整理頁面')
      }
    )
    // Keeps "today" and the same-time comparison moving between orders.
    clock = setInterval(() => {
      now.value = Date.now()
    }, 60 * 1000)
    loadArchives()
  })

  onBeforeUnmount(() => {
    stopWatching?.()
    clearInterval(clock)
  })

  // Archived orders per year, fetched once (a promise, so loads in flight are shared).
  const archiveCache = new Map()

  function archivedOrders(meta) {
    if (!archiveCache.has(meta.year)) {
      const request = fetchArchivedOrders(meta).catch((error) => {
        archiveCache.delete(meta.year)
        throw error
      })
      archiveCache.set(meta.year, request)
    }
    return archiveCache.get(meta.year)
  }

  async function loadArchiveOrders() {
    const meta = archives.value.find((item) => item.year === compareYear.value)
    if (!meta) {
      archive.value = { year: null, orders: [] }
      return
    }
    // The charts keep showing the previous year, dimmed, until this one arrives.
    archiveLoading.value = true
    try {
      const list = await archivedOrders(meta)
      if (compareYear.value === meta.year) archive.value = { year: meta.year, orders: list }
    } catch (error) {
      console.error('Failed to load archived orders:', error)
      toast.show(failureMessage(`無法讀取 ${meta.year} 年的資料`, error))
    } finally {
      archiveLoading.value = false
    }
  }

  watch(compareYear, loadArchiveOrders)

  // Lists the imported years and keeps (or picks the newest) comparison year.
  async function loadArchives(preferredYear = compareYear.value) {
    try {
      archives.value = (await fetchSalesArchives()).filter((item) => item.year < CURRENT_YEAR)
    } catch (error) {
      console.error('Failed to load sales archives:', error)
      toast.show(failureMessage('無法讀取往年資料', error))
      return
    }
    const years = archives.value.map((item) => item.year)
    compareYear.value = years.includes(preferredYear) ? preferredYear : (years[0] ?? null)
  }

  const current = computed(() =>
    buildCampaign({ year: CURRENT_YEAR, openDate: OPEN_DATE, orders: orders.value, now: now.value })
  )

  const previous = computed(() => {
    const meta = archives.value.find((item) => item.year === archive.value.year)
    if (!meta) return null
    return buildCampaign({
      year: meta.year,
      openDate: meta.openDate,
      closeDate: meta.closeDate,
      orders: archive.value.orders
    })
  })

  const report = computed(() =>
    buildReport({ current: current.value, previous: previous.value, basis: basis.value })
  )

  // ---- Importing a past year from Excel ----

  const importDraft = ref(null)
  const importing = ref(false)

  async function readImportFile(file) {
    try {
      const draft = readSalesWorkbook(await file.arrayBuffer())
      importDraft.value = { ...draft, orders: markRaw(draft.orders) }
    } catch (error) {
      console.error('Reading the sales workbook failed:', error)
      importDraft.value = null
      toast.show(error.message)
    }
  }

  const importSummary = computed(() => {
    const draft = importDraft.value
    if (!draft) return null
    const { openDate, closeDate } = draft
    const year = Number(String(openDate).slice(0, 4))
    let error = ''
    if (!openDate || !closeDate) error = '請填寫開賣日與結束日'
    else if (closeDate < openDate) error = '結束日不能早於開賣日'
    else if (!(year < CURRENT_YEAR)) error = `只能匯入 ${CURRENT_YEAR} 年以前的資料`

    return {
      year,
      orderCount: draft.orders.length,
      revenue: draft.orders.reduce((sum, order) => sum + order.finalTotal, 0),
      outside: error ? 0 : countOutsidePeriod(draft.orders, openDate, closeDate),
      skipped: draft.skipped,
      replaces: archives.value.some((item) => item.year === year),
      error
    }
  })

  function cancelImport() {
    importDraft.value = null
  }

  // Returns true once saved.
  async function confirmImport() {
    const draft = importDraft.value
    const summary = importSummary.value
    if (!draft || summary.error || importing.value) return false

    importing.value = true
    try {
      const existing = archives.value.find((item) => item.year === summary.year)
      await saveSalesArchive(
        { year: summary.year, openDate: draft.openDate, closeDate: draft.closeDate, orders: draft.orders },
        { uid: auth.user?.uid, name: auth.displayName },
        existing?.chunkCount || 0
      )
      archiveCache.delete(summary.year)
      importDraft.value = null

      const before = compareYear.value
      await loadArchives(summary.year)
      // Re-importing the year already shown doesn't change compareYear.
      if (compareYear.value === before) await loadArchiveOrders()
      toast.show(`已匯入 ${summary.year} 年資料（${summary.orderCount} 筆訂單）`)
      return true
    } catch (error) {
      console.error('Saving the sales archive failed:', error)
      toast.show(failureMessage('匯入失敗', error))
      return false
    } finally {
      importing.value = false
    }
  }

  return {
    loading,
    liveError,
    updatedAt,
    basis,
    archives,
    compareYear,
    archiveLoading,
    current,
    previous,
    report,
    importDraft,
    importSummary,
    importing,
    readImportFile,
    cancelImport,
    confirmImport
  }
}
