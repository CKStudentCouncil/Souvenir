import { ref, computed, watch } from 'vue'
import { debounce } from 'src/utils/debounce'
import { calculateStatistics, calculateDeliveryStats, exportOrdersToExcel } from 'src/utils/excel'
import { useAuthStore } from 'src/stores/auth'
import { useToastStore } from 'src/stores/toast'
import { deleteOrderById, fetchAllOrders, updateOrderStatus } from 'src/services/orderService'

const STATUS_MESSAGES = {
  delivered: ['已標記為未交貨', '已標記為已交貨'],
  paid: ['已標記為未付款', '已標記為已付款']
}

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

  function matchesFilters(order) {
    if (selectedSchool.value !== 'all' && order.school !== selectedSchool.value) return false
    const q = customerSearch.value
    if (!q) return true
    return [order.customerName, order.customerEmail, order.customerPhone]
      .some((value) => String(value || '').toLowerCase().includes(q))
  }

  const filteredOrders = computed(() => orders.value.filter(matchesFilters))
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
      toast.show(STATUS_MESSAGES[field][value ? 1 : 0])
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
