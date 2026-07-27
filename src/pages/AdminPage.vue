<template>
  <div
    v-if="auth.loading || checkingAdmin"
    class="state-screen"
  >
    <p>{{ auth.loading ? '載入中...' : '驗證權限中...' }}</p>
  </div>

  <div
    v-else-if="!canAccessAdmin"
    class="state-screen"
  >
    <h2>權限不足</h2>
    <button
      type="button"
      class="btn"
      @click="$router.push('/')"
    >
      回到首頁
    </button>
  </div>

  <div
    v-else-if="loading"
    class="state-screen"
  >
    <p>載入中...</p>
  </div>

  <div
    v-else
    class="admin-page"
  >

    <div class="page-heading">
      <p class="eyebrow">後台管理</p>
      <h1>訂單統計</h1>
    </div>

    <div class="filter-block">
      <label>篩選學校：</label>
      <select v-model="selectedSchool">
        <option value="all">全部</option>
        <option
          v-for="school in schools"
          :key="school"
          :value="school"
        >
          {{ school }}
        </option>
      </select>
    </div>

    <div class="filter-block">
      <label>搜尋訂購者：</label>
      <input
        v-model="customerSearchInput"
        type="text"
        placeholder="輸入姓名、Email 或電話號碼"
        @input="debouncedCustomerSearch"
      >
    </div>

    <div class="tabs">
      <button
        type="button"
        :class="{ active: activeTab === 'all' }"
        @click="setActiveTab('all')"
      >
        全部訂單 (<span class="num">{{ currentOrders.length }}</span>)
      </button>
      <button
        type="button"
        :class="{ active: activeTab === 'delivered' }"
        @click="setActiveTab('delivered')"
      >
        已交貨 (<span class="num">{{ deliveredTabCount }}</span>)
      </button>
    </div>

    <div class="panel notify-panel">
      <div class="notify-header">
        <h2>發送{{ notifyTypeLabel }}</h2>
        <button type="button" class="btn" @click="openNotifyModal">
          編輯並發送
        </button>
      </div>
      <p class="notify-hint">
        將寄送繳費通知給所有訂購者（共 <span class="num">{{ notifyRecipientCount }}</span> 人）
      </p>
    </div>

    <div
      v-if="showNotifyModal"
      class="modal-overlay"
      @click.self="closeNotifyModal"
    >
      <div class="modal notify-modal">
        <h2>編輯{{ notifyTypeLabel }}</h2>

        <div class="type-select">
          <span class="field-label">通知類型</span>
          <div class="type-options">
            <button
              type="button"
              class="type-option"
              :class="{ active: notifyForm.type === 'payment' }"
              @click="notifyForm.type = 'payment'"
            >
              繳費
            </button>
            <button
              type="button"
              class="type-option"
              :class="{ active: notifyForm.type === 'pickup' }"
              @click="notifyForm.type = 'pickup'"
            >
              領貨
            </button>
            <button
              type="button"
              class="type-option"
              :class="{ active: notifyForm.type === 'both' }"
              @click="notifyForm.type = 'both'"
            >
              繳費暨領貨
            </button>
          </div>
        </div>

        <label v-if="notifyForm.type !== 'pickup'" class="field">
          <span>繳費時間</span>
          <input
            v-model="notifyForm.paymentTime"
            type="text"
            placeholder="例如：8/15（五）12:00–13:00"
          >
        </label>

        <label v-if="notifyForm.type !== 'payment'" class="field">
          <span>領貨時間</span>
          <input
            v-model="notifyForm.pickupTime"
            type="text"
            placeholder="例如：8/20（三）12:00–13:00"
          >
        </label>

        <label class="field">
          <span>{{ notifyForm.type === 'both' ? '地點（繳費與領貨共用）' : '地點' }}</span>
          <input
            v-model="notifyForm.location"
            type="text"
            placeholder="例如：建中夢紅樓一樓"
          >
        </label>

        <label class="field">
          <span>補充說明（選填）</span>
          <textarea
            v-model="notifyForm.message"
            rows="4"
            placeholder="例如：請出示 QR Code 給工作人員，以完成繳費或領貨。"
          />
        </label>

        <div class="notify-preview">
          <p class="preview-label">預覽內容</p>
          <p v-if="notifyForm.type !== 'pickup'">繳費時間：<strong>{{ notifyForm.paymentTime || '（尚未填寫）' }}</strong></p>
          <p v-if="notifyForm.type !== 'payment'">領貨時間：<strong>{{ notifyForm.pickupTime || '（尚未填寫）' }}</strong></p>
          <p>地點：<strong>{{ notifyForm.location || '（尚未填寫）' }}</strong></p>
          <p v-if="notifyForm.message">補充說明：{{ notifyForm.message }}</p>
          <p class="preview-count">將發送給 <span class="num">{{ notifyRecipientCount }}</span> 位訂購者</p>
        </div>

        <div class="notify-actions">
          <button
            type="button"
            class="btn"
            :disabled="!canSendNotify || sendingNotify"
            @click="confirmSendNotify"
          >
            {{ sendingNotify ? '發送中...' : '確認發送' }}
          </button>
          <button
            type="button"
            class="btn-outline"
            :disabled="sendingNotify"
            @click="closeNotifyModal"
          >
            取消
          </button>
        </div>
      </div>
    </div>

    <div class="panel export-panel">
      <div>
        <h2>{{ activeTab === 'delivered' ? '已交貨統計與匯出' : '匯出與總覽' }}</h2>
        <div class="stats-row">
          <div class="stat">
            <div>{{ activeTab === 'delivered' ? '已交貨數' : '訂單數' }}</div>
            <div class="num">{{ currentOrders.length }}</div>
          </div>
          <div class="stat">
            <div>{{ activeTab === 'delivered' ? '已交貨營收' : '總營收' }}</div>
            <div class="num">NT$ {{ currentStats.totalRevenue }}</div>
          </div>
          <div class="stat">
            <div>折扣總額</div>
            <div class="num">NT$ {{ currentStats.totalDiscount }}</div>
          </div>
        </div>
      </div>
      <button
        type="button"
        class="btn"
        @click="exportToExcel(activeTab === 'delivered')"
      >
        匯出 Excel
      </button>
    </div>

    <div
      v-if="activeTab === 'delivered' && Object.keys(deliveryStats).length > 0"
      class="panel"
    >
      <h2>交貨人員統計</h2>
      <div class="personnel-grid">
        <div
          v-for="(stats, personnel) in deliveryStats"
          :key="personnel"
          class="personnel-card"
        >
          <p class="personnel-name">{{ personnel }}</p>
          <p class="personnel-stat">訂單數：<span class="num">{{ stats.count }}</span></p>
          <p class="personnel-stat total">金額：<span class="num">NT$ {{ stats.totalAmount }}</span></p>
        </div>
      </div>
    </div>

    <div class="panel">
      <h2>{{ activeTab === 'delivered' ? '已交貨商品統計' : '商品總數量' }}</h2>
      <ul
        v-if="Object.keys(currentStats.productCounts).length"
        class="product-stats"
      >
        <li
          v-for="(total, name) in currentStats.productCounts"
          :key="name"
        >
          <span>{{ name }}</span>
          <span class="num">總數量：{{ total }}</span>
        </li>
      </ul>
      <p v-else class="empty">尚無統計資料</p>
    </div>

    <div class="orders-section">
      <h2>{{ activeTab === 'delivered' ? '已交貨訂單' : '所有訂單' }}</h2>
      <div
        v-for="order in currentOrders"
        :key="order.id"
        class="order-card"
      >
        <div
          class="delivery-bar"
          :class="order.delivered ? 'delivered' : 'pending'"
        >
          <span class="status-dot" />
          <span>交貨狀態：{{ order.delivered ? '已交貨' : '未交貨' }}</span>
          <div
            v-if="activeTab === 'all'"
            class="delivery-actions"
          >
            <button
              type="button"
              class="btn-sm"
              :disabled="order.delivered"
              @click="updateDeliveryStatus(order.id, true)"
            >
              標記已交貨
            </button>
            <button
              type="button"
              class="btn-sm muted"
              :disabled="!order.delivered"
              @click="updateDeliveryStatus(order.id, false)"
            >
              標記未交貨
            </button>
          </div>          
        </div>
        <div
          class="delivery-bar"
          :class="order.paid ? 'paid' : 'pending'"
        >
          <span class="status-dot" />
          <span>付款狀態：{{ order.paid ? '已付款' : '未付款' }}</span>
          <div
            v-if="activeTab === 'all'"
            class="delivery-actions"
          >
            <button
              type="button"
              class="btn-sm"
              :disabled="order.paid"
              @click="updatePaymentStatus(order.id, true)"
            >
              標記已付款
            </button>
            <button
              type="button"
              class="btn-sm muted"
              :disabled="!order.paid"
              @click="updatePaymentStatus(order.id, false)"
            >
              標記未付款
            </button>
          </div>      
        </div>
        <p><strong>訂單ID：</strong><span class="mono">{{ order.id }}</span></p>
        <p><strong>折扣後金額：</strong><span class="num">NT$ {{ order.finalTotal }}</span></p>
        <p><strong>購買時間：</strong><span class="num">{{ formatDate(order.createdAt) }}</span></p>
        <p><strong>最後付款更新者：</strong>{{ order.paymentUpdatedByName || '—' }}</p>
        <p><strong>最後付款更新時間：</strong>{{ order.paymentUpdatedAt ? formatDate(order.paymentUpdatedAt) : '—' }}</p>
        <p><strong>最後交貨更新者：</strong>{{ order.deliveryUpdatedByName || '—' }}</p>
        <p><strong>最後交貨更新時間：</strong>{{ order.deliveryUpdatedAt ? formatDate(order.deliveryUpdatedAt) : '—' }}</p>
        <div
          v-if="order.customerName || order.customerEmail"
          class="customer-box"
        >
          <strong>客戶資料：</strong>
          <ul>
            <li v-if="order.customerName">姓名：{{ order.customerName }}</li>
            <li v-if="order.customerPhone">電話：<span class="mono">{{ order.customerPhone }}</span></li>
            <li v-if="order.customerEmail">Email：<span class="mono">{{ order.customerEmail }}</span></li>
            <li v-if="order.school">學校：{{ order.school }}</li>
            <li v-if="order.class">班級：{{ order.class }}</li>
            <li v-if="order.number">座號：{{ order.number }}</li>
          </ul>
        </div>
        <div class="items-box">
          <strong>購買商品：</strong>
          <ul>
            <li
              v-for="item in order.items"
              :key="item.id + item.name"
            >
              {{ item.name }} <span class="num">x {{ item.quantity }}</span> (<span class="num">NT$ {{ item.price }}</span>)
            </li>
          </ul>
        </div>
        <div class="order-actions">
          <button
            type="button"
            class="btn"
            @click="viewOrderDetail(order.id)"
          >
            查看詳細
          </button>
          <button
            type="button"
            class="btn-outline danger"
            @click="confirmDelete(order.id)"
          >
            刪除訂單
          </button>
        </div>
      </div>
      <p v-if="currentOrders.length === 0" class="empty">尚無符合條件的訂單</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onActivated } from 'vue'
import { useRouter } from 'vue-router'
import { doc, getDoc } from 'firebase/firestore'
import { getFunctions, httpsCallable } from 'firebase/functions'
import { db } from 'src/boot/firebase'
import { useAuthStore } from 'src/stores/auth'
import { useToastStore } from 'src/stores/toast'
import { useAdminOrders } from 'src/composables/useAdminOrders'
import { USE_MOCK_ORDERS, MOCK_ALLOW_ADMIN_WITHOUT_AUTH } from 'src/config/app'

const router = useRouter()
const auth = useAuthStore()
const canAccessAdmin = computed(
  () => auth.isAdmin || (USE_MOCK_ORDERS && MOCK_ALLOW_ADMIN_WITHOUT_AUTH)
)
const toast = useToastStore()
const displayName = ref('管理員')
const checkingAdmin = ref(true)
const showNotifyModal = ref(false)
const sendingNotify = ref(false)
const notifyForm = ref({
  type: 'payment',
  paymentTime: '',
  pickupTime: '',
  location: '',
  message: '請出示 QR Code 給工作人員，以完成繳費或領貨。'
})

const {
  schools,
  loading,
  activeTab,
  selectedSchool,
  customerSearchInput,
  debouncedCustomerSearch,
  currentOrders,
  deliveredTabCount,
  currentStats,
  setActiveTab,
  fetchOrders,
  updateDeliveryStatus,
  updatePaymentStatus,
  deleteOrder,
  exportToExcel,
  calculateDeliveryStats,
  formatDate
} = useAdminOrders({
  showToast: toast.show,
  displayName
})

const deliveryStats = computed(() => calculateDeliveryStats(currentOrders.value))

const notifyRecipientCount = computed(() => {
  const emails = new Set()
  currentOrders.value.forEach((order) => {
    if (order.customerEmail) emails.add(order.customerEmail)
  })
  return emails.size
})

async function loadAdminProfile() {
  if (auth.user) {
    try {
      const userDoc = await getDoc(doc(db, 'users', auth.user.uid))
      displayName.value = userDoc.exists()
        ? userDoc.data().name || auth.user.displayName || auth.user.email
        : auth.user.displayName || auth.user.email
    } catch {
      displayName.value = auth.user.displayName || auth.user.email || '管理員'
    }
  }
}

onMounted(async () => {
  await loadAdminProfile()
  checkingAdmin.value = false
  if (canAccessAdmin.value) fetchOrders()
})

onActivated(() => {
  if (canAccessAdmin.value) fetchOrders()
})

function viewOrderDetail(orderId) {
  router.push({ name: 'admin-order-detail', params: { id: orderId } })
}

function confirmDelete(orderId) {
  if (!window.confirm(`確定要刪除此訂單嗎？\nID: ${orderId}`)) return
  deleteOrder(orderId).catch(() => toast.show('刪除失敗'))
}

const notifyTypeLabel = computed(() => {
  if (notifyForm.value.type === 'payment') return '繳費通知'
  if (notifyForm.value.type === 'pickup') return '領貨通知'
  return '繳費暨領貨通知'
})

const canSendNotify = computed(() => {
  const f = notifyForm.value
  if (!f.location.trim()) return false
  if (f.type === 'payment') return !!f.paymentTime.trim()
  if (f.type === 'pickup') return !!f.pickupTime.trim()
  return !!f.paymentTime.trim() && !!f.pickupTime.trim()
})

function openNotifyModal() {
  showNotifyModal.value = true
}

function closeNotifyModal() {
  if (sendingNotify.value) return
  showNotifyModal.value = false
}

async function confirmSendNotify() {
  if (!canSendNotify.value) {
    toast.show('請填寫必要的時間與地點')
    return
  }
  if (
    !window.confirm(
      `確定要寄送${notifyTypeLabel.value}給 ${notifyRecipientCount.value} 位訂購者嗎？此動作無法復原。`
    )
  ) {
    return
  }

  sendingNotify.value = true
  try {
    const functionsInstance = getFunctions(undefined, 'asia-east1')
    const sendOrderNotification = httpsCallable(functionsInstance, 'sendOrderNotification')
    const result = await sendOrderNotification({
      type: notifyForm.value.type,
      paymentTime: notifyForm.value.paymentTime.trim(),
      pickupTime: notifyForm.value.pickupTime.trim(),
      location: notifyForm.value.location.trim(),
      message: notifyForm.value.message.trim()
    })
    toast.show(`已成功寄送給 ${result.data.sentCount} 位訂購者`)
    showNotifyModal.value = false
    notifyForm.value = { type: 'payment', paymentTime: '', pickupTime: '', location: '', message: '' }
  } catch (error) {
    console.error('Send notification error:', error)
    toast.show('發送失敗，請稍後再試')
  } finally {
    sendingNotify.value = false
  }
}
</script>

<style scoped>
@import 'src/css/app.scss';
@import 'src/css/adminpage.scss';
</style>