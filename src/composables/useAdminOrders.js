import { ref, computed, watch } from 'vue'
import { debounce } from 'src/utils/debounce'
import { calculateStatistics, calculateDeliveryStats, exportOrdersToExcel } from 'src/utils/excel'
import { useAuthStore } from 'src/stores/auth'
import { useToastStore } from 'src/stores/toast'
import { deleteOrderById, fetchAllOrders, statusMessage, updateOrderStatus } from 'src/services/orderService'

// Order list, filters, statistics and actions for the admin page.
export function useAdminOrders() {
  const auth = useAuthStore()
  const toast = useToastStore()

  const orders = ref([])
  const loading = ref(true)
  const activeTab = ref('all')
  const selectedSchool = ref('all')
  const customerSearchInput = ref('')
  const customerSearch = ref('')

  watch(customerSearchInput, debounce((value) => {
    customerSearch.value = value.trim().toLowerCase()
  }, 300))

  function matchesSearch(order) {
    const q = customerSearch.value
    if (!q) return true
    return [order.customerName, order.customerEmail, order.customerPhone]
      .some((value) => String(value || '').toLowerCase().includes(q))
  }

  // School filter only (class receipts must list every order of a class).
  const schoolOrders = computed(() =>
    selectedSchool.value === 'all'
      ? orders.value
      : orders.value.filter((order) => order.school === selectedSchool.value)
  )
  // School filter + customer search (the list, statistics and Excel).
  const filteredOrders = computed(() => schoolOrders.value.filter(matchesSearch))
  const deliveredOrders = computed(() => filteredOrders.value.filter((order) => order.delivered))
  const currentOrders = computed(() =>
    activeTab.value === 'delivered' ? deliveredOrders.value : filteredOrders.value
  )
  const currentStats = computed(() => calculateStatistics(currentOrders.value))
  const deliveryStats = computed(() => calculateDeliveryStats(currentOrders.value))

  async function fetchOrders() {
    loading.value = true
    try {
      orders.value = await fetchAllOrders()
    } catch (err) {
      console.error(err)
      toast.show('獲取訂單失敗')
    } finally {
      loading.value = false
    }
  }

  // field: 'delivered' | 'paid'
  async function setStatus(orderId, field, value) {
    try {
      const patch = await updateOrderStatus(orderId, field, value, {
        uid: auth.user?.uid,
        name: auth.displayName
      })
      orders.value = orders.value.map((order) =>
        order.id === orderId ? { ...order, ...patch } : order
      )
      toast.show(statusMessage(field, value))
    } catch (err) {
      toast.show('更新失敗：' + err.message)
    }
  }

  async function deleteOrder(orderId) {
    try {
      await deleteOrderById(orderId)
      orders.value = orders.value.filter((order) => order.id !== orderId)
      toast.show('訂單已刪除')
    } catch {
      toast.show('刪除失敗')
    }
  }

  function exportToExcel() {
    exportOrdersToExcel(currentOrders.value, {
      onlyDelivered: activeTab.value === 'delivered',
      school: selectedSchool.value
    })
    toast.show('Excel 已匯出')
  }

  return {
    orders,
    loading,
    activeTab,
    selectedSchool,
    customerSearchInput,
    schoolOrders,
    filteredOrders,
    deliveredOrders,
    currentOrders,
    currentStats,
    deliveryStats,
    fetchOrders,
    setStatus,
    deleteOrder,
    exportToExcel
  }
}
