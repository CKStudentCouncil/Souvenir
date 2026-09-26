<template>
  <div
    v-if="loading"
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
      <h1>{{ canManageOrders ? '訂單統計' : '發送通知' }}</h1>
    </div>

    <div
      v-if="canManageOrders"
      class="filter-block"
    >
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

    <div
      v-if="canManageOrders"
      class="filter-block"
    >
      <label>搜尋訂購者：</label>
      <input
        v-model="customerSearchInput"
        type="text"
        placeholder="輸入姓名、Email 或電話號碼"
      >
    </div>

    <div
      v-if="canManageOrders"
      class="tabs"
    >
      <button
        type="button"
        :class="{ active: activeTab === 'all' }"
        @click="activeTab = 'all'"
      >
        全部訂單 (<span class="num">{{ filteredOrders.length }}</span>)
      </button>
      <button
        type="button"
        :class="{ active: activeTab === 'delivered' }"
        @click="activeTab = 'delivered'"
      >
        已交貨 (<span class="num">{{ deliveredOrders.length }}</span>)
      </button>
    </div>

    <div class="panel notify-panel">
      <div class="notify-header">
        <h2>自動寄送通知</h2>
        <button type="button" class="btn" @click="openNotifyModal">
          編輯並發送
        </button>
      </div>
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
            <button
              type="button"
              class="type-option"
              :class="{ active: notifyForm.type === 'custom' }"
              @click="notifyForm.type = 'custom'"
            >
              自訂訊息
            </button>
          </div>
        </div>

        <div class="filter-block">
          <span class="field-label">通知對象</span>
          <select v-model="notifyForm.school">
            <option value="all">全部學校</option>
            <option
              v-for="school in schools"
              :key="school"
              :value="school"
            >
              {{ school }}
            </option>
          </select>
        </div>

        <label v-if="notifyForm.type === 'custom'" class="field">
          <span>主旨</span>
          <input
            v-model="notifyForm.subject"
            type="text"
            placeholder="例如：關於校慶紀念品的重要通知"
          >
        </label>

        <label v-if="notifyForm.type !== 'pickup' && notifyForm.type !== 'custom'" class="field">
          <span>繳費時間</span>
          <input
            v-model="notifyForm.paymentTime"
            type="text"
            placeholder="例如：8/15（五）12:00–13:00"
          >
        </label>

        <label v-if="notifyForm.type !== 'payment' && notifyForm.type !== 'custom'" class="field">
          <span>領貨時間</span>
          <input
            v-model="notifyForm.pickupTime"
            type="text"
            placeholder="例如：8/20（三）12:00–13:00"
          >
        </label>

        <label v-if="notifyForm.type !== 'custom'" class="field">
          <span>{{ notifyForm.type === 'both' ? '地點（繳費與領貨共用）' : '地點' }}</span>
          <input
            v-model="notifyForm.location"
            type="text"
            placeholder="例如：建中夢紅樓一樓"
          >
        </label>

        <label class="field">
          <span>{{ notifyForm.type === 'custom' ? '訊息內容' : '補充說明（選填）' }}</span>
          <textarea
            v-model="notifyForm.message"
            rows="4"
            :placeholder="notifyForm.type === 'custom' ? '請輸入要寄送給訂購者的訊息內容' : '例如：請出示 QR Code 給工作人員，以完成繳費或領貨。'"
          />
        </label>

        <div class="notify-preview">
          <p class="preview-label">預覽內容</p>
          <template v-if="notifyForm.type === 'custom'">
            <p>主旨：<strong>{{ notifyForm.subject || '（尚未填寫）' }}</strong></p>
            <p>內容：{{ notifyForm.message || '（尚未填寫）' }}</p>
          </template>
          <template v-else>
            <p v-if="notifyForm.type !== 'pickup'">繳費時間：<strong>{{ notifyForm.paymentTime || '（尚未填寫）' }}</strong></p>
            <p v-if="notifyForm.type !== 'payment'">領貨時間：<strong>{{ notifyForm.pickupTime || '（尚未填寫）' }}</strong></p>
            <p>地點：<strong>{{ notifyForm.location || '（尚未填寫）' }}</strong></p>
            <p v-if="notifyForm.message">補充說明：{{ notifyForm.message }}</p>
          </template>
          <p class="preview-count">
            將發送給{{ notifyTargetSchoolLabel }}
            <span class="num">{{ notifyRecipientCount ?? '…' }}</span> 位訂購者
          </p>
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

    <div
      v-if="canManageOrders"
      class="panel export-panel"
    >
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
        @click="exportToExcel"
      >
        匯出 Excel
      </button>
    </div>

    <div v-if="canManageOrders" class="panel export-panel">
      <div>
        <h2>班代領取收據</h2>
        <p class="panel-copy">依目前的學校篩選，產生所有班級的領取收據；每個班級會有獨立頁面。</p>
      </div>
      <button
        type="button"
        class="btn"
        :disabled="generatingClassReceipts"
        @click="downloadAllClassReceipts"
      >
        {{ generatingClassReceipts ? '開啟中...' : '產生所有班級收據' }}
      </button>
    </div>

    <div
      v-if="canManageOrders && activeTab === 'delivered' && Object.keys(deliveryStats).length > 0"
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

    <div
      v-if="canManageOrders"
      class="panel"
    >
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

    <div
      v-if="canManageOrders"
      class="orders-section"
    >
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
              @click="setStatus(order.id, 'delivered', true)"
            >
              標記已交貨
            </button>
            <button
              type="button"
              class="btn-sm muted"
              :disabled="!order.delivered"
              @click="setStatus(order.id, 'delivered', false)"
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
              @click="setStatus(order.id, 'paid', true)"
            >
              標記已付款
            </button>
            <button
              type="button"
              class="btn-sm muted"
              :disabled="!order.paid"
              @click="setStatus(order.id, 'paid', false)"
            >
              標記未付款
            </button>
          </div>
        </div>
        <p><strong>訂單ID：</strong><span class="mono">{{ order.id }}</span></p>
        <p><strong>折扣後金額：</strong><span class="num">NT$ {{ order.finalTotal }}</span></p>
        <p><strong>購買時間：</strong><span class="num">{{ formatOrderDate(order.createdAt) }}</span></p>
        <p><strong>最後付款更新者：</strong>{{ order.paymentUpdatedByName || '—' }}</p>
        <p><strong>最後付款更新時間：</strong>{{ formatOrderDate(order.paymentUpdatedAt) || '—' }}</p>
        <p><strong>最後交貨更新者：</strong>{{ order.deliveryUpdatedByName || '—' }}</p>
        <p><strong>最後交貨更新時間：</strong>{{ formatOrderDate(order.deliveryUpdatedAt) || '—' }}</p>
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
            <li v-if="getOrderClass(order)">班級：{{ getOrderClass(order) }}</li>
            <li v-if="order.number">座號：{{ order.number }}</li>
            <li v-if="order.office">辦公室：{{ order.office }}</li>
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
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { httpsCallable } from 'firebase/functions'
import { functions } from 'src/services/firebase'
import { schools } from 'shared/catalog'
import { useAuthStore } from 'src/stores/auth'
import { useToastStore } from 'src/stores/toast'
import { useAdminOrders } from 'src/composables/useAdminOrders'
import { formatOrderDate, getOrderClass } from 'src/utils/orders'
import { buildClassReceiptsHtml, printHtml } from 'src/utils/receipts'

const sendOrderNotification = httpsCallable(functions, 'sendOrderNotification')

const router = useRouter()
const auth = useAuthStore()
const toast = useToastStore()

// Managers (友校幹部) only send notifications; admins also manage orders.
const canManageOrders = computed(() => auth.isAdmin)

const {
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
} = useAdminOrders()

onMounted(() => {
  if (canManageOrders.value) fetchOrders()
  else loading.value = false
})

function viewOrderDetail(orderId) {
  router.push({ name: 'admin-order-detail', params: { id: orderId } })
}

function confirmDelete(orderId) {
  if (!window.confirm(`確定要刪除此訂單嗎？\nID: ${orderId}`)) return
  deleteOrder(orderId)
}

const generatingClassReceipts = ref(false)

function downloadAllClassReceipts() {
  if (loading.value) {
    toast.show('訂單資料載入中，請稍後再試')
    return
  }

  const html = buildClassReceiptsHtml(filteredOrders.value)
  if (!html) {
    toast.show('目前篩選條件下沒有可產生收據的班級訂單')
    return
  }

  generatingClassReceipts.value = true
  try {
    if (!printHtml(html)) toast.show('無法開啟列印視窗，請允許此網站開啟彈出式視窗後再試一次')
  } catch (error) {
    console.error('All class receipts generation failed:', error)
    toast.show('班級收據產生失敗，請再試一次')
  } finally {
    generatingClassReceipts.value = false
  }
}

// ---- Bulk email notifications ----

function emptyNotifyForm(school = 'all') {
  return {
    type: 'payment',
    school,
    subject: '',
    paymentTime: '',
    pickupTime: '',
    location: '',
    message: '請出示 QR Code 給工作人員，以完成繳費或領貨。'
  }
}

const showNotifyModal = ref(false)
const sendingNotify = ref(false)
const notifyForm = ref(emptyNotifyForm())
const notifyRecipientCount = ref(null)

const notifyTypeLabel = computed(() => {
  if (notifyForm.value.type === 'payment') return '繳費通知'
  if (notifyForm.value.type === 'pickup') return '領貨通知'
  if (notifyForm.value.type === 'custom') return '自訂通知'
  return '繳費暨領貨通知'
})

const notifyTargetSchoolLabel = computed(() =>
  notifyForm.value.school === 'all' ? '全部學校' : notifyForm.value.school
)

const canSendNotify = computed(() => {
  const f = notifyForm.value
  if (f.type === 'custom') return !!f.message.trim()
  if (!f.location.trim()) return false
  if (f.type === 'payment') return !!f.paymentTime.trim()
  if (f.type === 'pickup') return !!f.pickupTime.trim()
  return !!f.paymentTime.trim() && !!f.pickupTime.trim()
})

function notifyPayload() {
  const f = notifyForm.value
  return {
    type: f.type,
    school: f.school,
    subject: f.subject.trim(),
    paymentTime: f.paymentTime.trim(),
    pickupTime: f.pickupTime.trim(),
    location: f.location.trim(),
    message: f.message.trim()
  }
}

// The recipient count comes from the Cloud Function so it matches exactly
// who will be emailed (and managers never need to read the orders).
async function refreshRecipientCount() {
  const school = notifyForm.value.school
  notifyRecipientCount.value = null
  try {
    const { data } = await sendOrderNotification({ school, dryRun: true })
    if (showNotifyModal.value && notifyForm.value.school === school) {
      notifyRecipientCount.value = data.recipientCount
    }
  } catch (error) {
    console.error('Failed to count notification recipients:', error)
  }
}

watch(() => notifyForm.value.school, () => {
  if (showNotifyModal.value) refreshRecipientCount()
})

function openNotifyModal() {
  notifyForm.value.school = selectedSchool.value
  showNotifyModal.value = true
  refreshRecipientCount()
}

function closeNotifyModal() {
  if (sendingNotify.value) return
  showNotifyModal.value = false
}

async function confirmSendNotify() {
  if (!canSendNotify.value) {
    toast.show(notifyForm.value.type === 'custom' ? '請填寫訊息內容' : '請填寫必要的時間與地點')
    return
  }
  const count = notifyRecipientCount.value ?? ''
  if (!window.confirm(`確定要寄送${notifyTypeLabel.value}給${notifyTargetSchoolLabel.value} ${count} 位訂購者嗎？此動作無法復原。`)) {
    return
  }

  sendingNotify.value = true
  try {
    const { data } = await sendOrderNotification(notifyPayload())
    toast.show(
      data.failedCount
        ? `已寄送給 ${data.sentCount} 位訂購者，${data.failedCount} 位寄送失敗`
        : `已成功寄送給 ${data.sentCount} 位訂購者`
    )
    showNotifyModal.value = false
    notifyForm.value = emptyNotifyForm(selectedSchool.value)
  } catch (error) {
    console.error('Send notification error:', error)
    toast.show('發送失敗，請稍後再試')
  } finally {
    sendingNotify.value = false
  }
}
</script>

<style scoped>
@import 'src/css/adminpage.scss';
</style>
