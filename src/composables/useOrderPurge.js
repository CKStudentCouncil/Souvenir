import { computed, markRaw, onBeforeUnmount, onMounted, ref } from 'vue'
import { taiwanDate } from 'shared/format'
import { useAuthStore } from 'src/stores/auth'
import { useToastStore } from 'src/stores/toast'
import { deleteOrdersByIds, fetchAllOrders } from 'src/services/orderService'
import { fetchArchivedOrders, fetchSalesArchive, saveSalesArchive } from 'src/services/salesArchiveService'
import { exportOrdersToExcel } from 'src/utils/excel'
import { CURRENT_YEAR, OPEN_DATE } from 'src/utils/salesAnalytics'
import { toArchivedOrder } from 'src/utils/salesImport'

// The checks below throw these; their message is shown as is.
class PurgeStop extends Error {}

// Ignores spaces (half or full width) and full-width digits in the typed phrase.
function normalizePhrase(text) {
  return String(text ?? '').normalize('NFKC').replace(/\s/g, '')
}

function totalRevenue(orders) {
  return orders.reduce((sum, order) => sum + order.finalTotal, 0)
}

// Super admins only, so a refusal means the salesArchive rules in
// firestore.rules haven't been deployed yet.
function backupFailure(error) {
  if (error instanceof PurgeStop) return error.message
  if (error?.code === 'permission-denied') return '備份失敗：沒有權限，請先部署最新的 firestore.rules。沒有刪除任何訂單'
  return '備份失敗，沒有刪除任何訂單'
}

// Deleting every order once the sale is over (admin page, super admins only).
// The orders are first fetched fresh, downloaded as Excel and saved to
// salesArchive/{CURRENT_YEAR} for the financial report, which is read back to
// check. Only those orders are then deleted, once the admin has ticked that the
// Excel is complete and typed the confirmation phrase, and only if no order
// has been placed since (checked again right before deleting), so no order is
// deleted without a backup.
//   purge.step: 'saving' → 'confirm' → 'deleting', or 'failed'
export function useOrderPurge() {
  const auth = useAuthStore()
  const toast = useToastStore()

  const purge = ref(null)
  const purging = computed(() => ['saving', 'deleting'].includes(purge.value?.step))

  // Closing the tab mid-way would leave a half-saved archive or half the orders.
  function warnWhilePurging(event) {
    if (!purging.value) return
    event.preventDefault()
    event.returnValue = ''
  }

  onMounted(() => window.addEventListener('beforeunload', warnWhilePurging))
  onBeforeUnmount(() => window.removeEventListener('beforeunload', warnWhilePurging))

  // Reads the saved year back; deleting goes ahead only if every order is there.
  async function checkArchive({ orderCount, revenue }) {
    const meta = await fetchSalesArchive(CURRENT_YEAR)
    const saved = meta ? await fetchArchivedOrders(meta) : []
    if (!meta || meta.orderCount !== orderCount || saved.length !== orderCount || totalRevenue(saved) !== revenue) {
      throw new PurgeStop(`${CURRENT_YEAR} 年的往年資料和備份的訂單對不上，已停止，沒有刪除任何訂單`)
    }
  }

  async function startPurge() {
    if (purging.value) return
    if (!auth.isSuperAdmin) return toast.show('只有系統管理員可以刪除全部訂單')

    purge.value = {
      step: 'saving',
      orders: [],
      orderIds: markRaw(new Set()),
      orderCount: 0,
      revenue: 0,
      unpaid: 0,
      undelivered: 0,
      openDate: OPEN_DATE,
      closeDate: OPEN_DATE,
      filename: `刪除前備份_${CURRENT_YEAR}年訂單_${taiwanDate()}.xlsx`,
      newOrders: 0,
      checked: false,
      phrase: '',
      deleted: 0,
      error: ''
    }
    const state = purge.value

    try {
      // Fresh from the server: the page's list was loaded when it opened.
      const list = await fetchAllOrders()
      if (!list.length) throw new PurgeStop('目前沒有訂單')
      const archived = list.map(toArchivedOrder)
      Object.assign(state, {
        orders: markRaw(list),
        orderIds: markRaw(new Set(list.map((order) => order.id))),
        orderCount: list.length,
        revenue: totalRevenue(archived),
        unpaid: list.filter((order) => !order.paid).length,
        undelivered: list.filter((order) => !order.delivered).length,
        // The last day anyone ordered, so the archive doesn't run on empty to today.
        closeDate: archived.reduce((last, order) => {
          const day = order.createdAt ? taiwanDate(order.createdAt) : ''
          return day > last ? day : last
        }, OPEN_DATE)
      })

      exportOrdersToExcel(list, { filename: state.filename })
      // A larger archive of this year was saved from orders already deleted;
      // replacing it with what's left would lose them.
      const existing = await fetchSalesArchive(CURRENT_YEAR)
      if (existing && existing.orderCount > state.orderCount) {
        throw new PurgeStop(
          `已經有 ${CURRENT_YEAR} 年的往年資料（${existing.orderCount} 筆），比目前的 ${state.orderCount} 筆訂單多，` +
          '可能已經刪除過一次。為避免蓋掉它，已停止，沒有刪除任何訂單'
        )
      }
      await saveSalesArchive(
        { year: CURRENT_YEAR, openDate: OPEN_DATE, closeDate: state.closeDate, orders: archived },
        { uid: auth.user?.uid, name: auth.displayName },
        existing?.chunkCount || 0
      )
      await checkArchive(state)
      state.step = 'confirm'
    } catch (error) {
      console.error('Backing up the orders failed:', error)
      state.step = 'failed'
      state.error = backupFailure(error)
    }
  }

  const purgeSummary = computed(() => {
    const state = purge.value
    if (!state) return null
    const phrase = `刪除 ${state.orderCount} 筆訂單`
    return {
      phrase,
      ready: state.step === 'confirm'
        && !state.newOrders
        && state.checked
        && normalizePhrase(state.phrase) === normalizePhrase(phrase)
    }
  })

  // Returns true once every backed-up order is deleted.
  async function confirmPurge() {
    const state = purge.value
    if (!purgeSummary.value?.ready) return false

    state.step = 'deleting'
    state.deleted = 0
    state.error = ''
    try {
      // Orders placed since the backup aren't in it.
      const current = await fetchAllOrders()
      state.newOrders = current.filter((order) => !state.orderIds.has(order.id)).length
      if (state.newOrders) {
        throw new PurgeStop(`備份後又有 ${state.newOrders} 筆新訂單，它們不在備份裡。請重新備份後再刪除，沒有刪除任何訂單`)
      }
      // The archive could have changed since the backup (another tab or admin).
      await checkArchive(state)
      await deleteOrdersByIds([...state.orderIds], (deleted) => {
        state.deleted = deleted
      })
      purge.value = null
      toast.show(`已刪除 ${state.orderCount} 筆訂單，${CURRENT_YEAR} 年的資料已存入往年資料`)
      return true
    } catch (error) {
      console.error('Deleting the orders failed:', error)
      state.step = 'confirm'
      // Typed again before another try.
      state.phrase = ''
      if (error instanceof PurgeStop) state.error = error.message
      else if (state.deleted) state.error = `刪除 ${state.deleted} 筆後失敗，其餘訂單還在，可以再試一次`
      else state.error = '刪除失敗，沒有刪除任何訂單'
      return false
    }
  }

  // The same backup again, for when the browser blocked or lost the download.
  function downloadPurgeBackup() {
    if (purge.value) exportOrdersToExcel(purge.value.orders, { filename: purge.value.filename })
  }

  function cancelPurge() {
    if (!purging.value) purge.value = null
  }

  return {
    purge,
    purgeSummary,
    purging,
    startPurge,
    confirmPurge,
    cancelPurge,
    downloadPurgeBackup
  }
}
