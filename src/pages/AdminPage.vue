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
      <h1>訂單統計</h1>
      <router-link :to="{ name: 'admin-scan' }" class="btn scan-link">掃描 QR Code</router-link>
    </div>

    <div
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
      <button
        type="button"
        :class="{ active: activeTab === 'paid' }"
        @click="activeTab = 'paid'"
      >
        已付款 (<span class="num">{{ paidOrders.length }}</span>)
      </button>
    </div>

    <div class="panel notify-panel">
      <div class="notify-header">
        <h2>自動寄送通知</h2>
        <button type="button" class="btn" @click="openNotifyModal">
          編輯並發送
        </button>
      </div>
      <!-- the last bulk email; delivery continues on the server after this page closes -->
      <template v-if="pendingJob">
        <p class="notify-progress" role="status">{{ notificationProgress }}</p>
        <div class="notify-job-actions">
          <button type="button" class="btn-outline" :disabled="sendingNotify" @click="pollNotificationStatus">
            {{ sendingNotify ? '處理中…' : '檢查寄送進度' }}
          </button>
          <button
            v-if="needsNotificationEnqueue(pendingJob)"
            type="button"
            class="btn"
            :disabled="sendingNotify"
            @click="runNotificationJob(pendingJob)"
          >
            繼續加入寄送佇列
          </button>
          <button v-if="canClearNotification(pendingJob)" type="button" class="btn-outline" @click="setPendingJob(null)">
            清除本機紀錄
          </button>
        </div>
      </template>
      <p v-if="notificationError" class="notify-progress" role="alert">{{ notificationError }}</p>
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
            <span class="num">{{ notifyRecipientCount }}</span> 位訂購者
          </p>
          <p v-if="pendingJob && !canClearNotification(pendingJob)" class="preview-count" role="status">
            上一次的通知仍在處理中，完成後才能再寄送：{{ notificationProgress }}
          </p>
        </div>

        <div class="notify-actions">
          <button
            type="button"
            class="btn"
            :disabled="!canSendNotify || sendingNotify || (pendingJob && !canClearNotification(pendingJob))"
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
      class="panel export-panel"
    >
      <div>
        <h2>{{ tabLabel ? `${tabLabel}統計與匯出` : '匯出與總覽' }}</h2>
        <div class="stats-row">
          <div class="stat">
            <div>{{ tabLabel ? `${tabLabel}數` : '訂單數' }}</div>
            <div class="num">{{ currentOrders.length }}</div>
          </div>
          <div class="stat">
            <div>{{ tabLabel ? `${tabLabel}營收` : '總營收' }}</div>
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

    <div class="panel export-panel">
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
      v-if="auth.isSuperAdmin"
      class="panel export-panel purge-panel"
    >
      <div>
        <h2>刪除全部訂單</h2>
        <p class="panel-copy">
          銷售結束後用來清空訂單，不受上方篩選影響。刪除前會先下載全部訂單的 Excel，並把今年的資料存入財務報表的往年資料
          （不含姓名與聯絡方式），明年就能和今年比較；訂單刪除後無法復原
        </p>
      </div>
      <button
        v-if="!purge"
        type="button"
        class="btn-outline danger"
        :disabled="!orders.length"
        @click="startPurge"
      >
        刪除全部訂單
      </button>

      <div
        v-if="purge"
        class="purge-flow"
      >
        <p
          v-if="purge.step === 'saving'"
          class="purge-progress"
          role="status"
        >
          正在讀取最新訂單、下載 Excel 並存入往年資料…
        </p>

        <template v-else-if="purge.step === 'failed'">
          <p class="purge-error" role="alert">{{ purge.error }}</p>
          <div class="purge-actions">
            <button type="button" class="btn" @click="startPurge">重試</button>
            <button type="button" class="btn-outline" @click="cancelPurge">取消</button>
          </div>
        </template>

        <template v-else>
          <div class="stats-row">
            <div class="stat">
              <div>訂單數</div>
              <div class="num">{{ purge.orderCount }}</div>
            </div>
            <div class="stat">
              <div>總營收</div>
              <div class="num">NT$ {{ purge.revenue }}</div>
            </div>
            <div class="stat">
              <div>期間</div>
              <div class="num">{{ purge.openDate }} – {{ purge.closeDate }}</div>
            </div>
          </div>
          <p class="purge-done">
            已下載「{{ purge.filename }}」，並已存入 {{ CURRENT_YEAR }} 年往年資料，核對 <span class="num">{{ purge.orderCount }}</span> 筆無誤。
            <button
              type="button"
              class="link-button"
              :disabled="purging"
              @click="downloadPurgeBackup"
            >
              沒看到檔案？再下載一次
            </button>
          </p>
          <p v-if="purgeOpenOrders" class="purge-note">其中 {{ purgeOpenOrders }}，刪除後就查不到了。</p>
          <p v-if="purge.error" class="purge-error" role="alert">{{ purge.error }}</p>

          <label class="purge-check">
            <input
              v-model="purge.checked"
              type="checkbox"
              :disabled="purging"
            >
            <span>我已打開下載的 Excel，確認訂單都在裡面</span>
          </label>
          <label class="purge-phrase">
            <span>請手動輸入「<strong class="num">{{ purgeSummary.phrase }}</strong>」確認</span>
            <input
              v-model="purge.phrase"
              type="text"
              autocomplete="off"
              spellcheck="false"
              :disabled="purging"
              @paste.prevent
              @drop.prevent
            >
          </label>
          <p class="panel-copy">按「取消」不會刪除任何訂單，已存入的往年資料會保留</p>

          <div class="purge-actions">
            <button
              v-if="purge.newOrders"
              type="button"
              class="btn"
              :disabled="purging"
              @click="startPurge"
            >
              重新備份
            </button>
            <button
              type="button"
              class="btn danger"
              :disabled="!purgeSummary.ready"
              @click="deleteAllOrders"
            >
              {{ purge.step === 'deleting'
                ? `刪除中… ${purge.deleted} / ${purge.orderCount}`
                : `永久刪除 ${purge.orderCount} 筆訂單` }}
            </button>
            <button
              type="button"
              class="btn-outline"
              :disabled="purging"
              @click="cancelPurge"
            >
              取消
            </button>
          </div>
        </template>
      </div>
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

    <div
      class="panel"
    >
      <h2>{{ tabLabel ? `${tabLabel}商品統計` : '商品總數量' }}</h2>
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
      class="orders-section"
    >
      <h2>{{ tabLabel ? `${tabLabel}訂單` : '所有訂單' }}</h2>
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
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { schools } from 'shared/catalog'
import { notificationRecipients } from 'shared/format'
import { useAuthStore } from 'src/stores/auth'
import { useToastStore } from 'src/stores/toast'
import { useAdminOrders } from 'src/composables/useAdminOrders'
import { useOrderPurge } from 'src/composables/useOrderPurge'
import { useNotificationJob } from 'src/composables/useNotificationJob'
import { canClearNotification, needsNotificationEnqueue } from 'src/utils/notificationProgress'
import { ORDER_STATUS_LABELS, formatOrderDate, getOrderClass } from 'src/utils/orders'
import { buildClassReceiptsHtml, printHtml } from 'src/utils/receipts'
import { CURRENT_YEAR } from 'src/utils/salesAnalytics'

const router = useRouter()
const auth = useAuthStore()
const toast = useToastStore()

const {
  orders,
  loading,
  activeTab,
  selectedSchool,
  customerSearchInput,
  schoolOrders,
  filteredOrders,
  deliveredOrders,
  paidOrders,
  currentOrders,
  currentStats,
  deliveryStats,
  fetchOrders,
  setStatus,
  deleteOrder,
  exportToExcel
} = useAdminOrders()

onMounted(fetchOrders)

// '已交貨' / '已付款' on those tabs, empty on the all-orders tab.
const tabLabel = computed(() => ORDER_STATUS_LABELS[activeTab.value] || '')

function viewOrderDetail(orderId) {
  router.push({ name: 'admin-order-detail', params: { id: orderId } })
}

function confirmDelete(orderId) {
  if (!window.confirm(`確定要刪除此訂單嗎？\nID: ${orderId}`)) return
  deleteOrder(orderId)
}

// ---- Deleting every order (super admins) ----

const {
  purge,
  purgeSummary,
  purging,
  startPurge,
  confirmPurge,
  cancelPurge,
  downloadPurgeBackup
} = useOrderPurge()

// Orders not yet finished, which a deletion would lose track of.
const purgeOpenOrders = computed(() => {
  const parts = []
  if (purge.value?.unpaid) parts.push(`${purge.value.unpaid} 筆尚未付款`)
  if (purge.value?.undelivered) parts.push(`${purge.value.undelivered} 筆尚未交貨`)
  return parts.join('、')
})

async function deleteAllOrders() {
  if (await confirmPurge()) fetchOrders()
}

const generatingClassReceipts = ref(false)

function downloadAllClassReceipts() {
  if (loading.value) {
    toast.show('訂單資料載入中，請稍後再試')
    return
  }

  // Every order of each class, whatever is typed in the search box.
  const html = buildClassReceiptsHtml(schoolOrders.value)
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
// Queued like the ticket system: functions/lib/notifications.js
const {
  sending: sendingNotify,
  pendingJob,
  notificationError,
  notificationProgress,
  pollNotificationStatus,
  setPendingJob,
  prepareNotification,
  runNotificationJob
} = useNotificationJob()
const notifyForm = ref(emptyNotifyForm())
// Same rule the Cloud Function uses to pick recipients.
const notifyRecipientCount = computed(
  () => notificationRecipients(orders.value, notifyForm.value.school).length
)

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

function openNotifyModal() {
  notifyForm.value.school = selectedSchool.value
  showNotifyModal.value = true
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

  // The server saves the recipient list as a job; nothing is sent yet.
  let job
  try {
    job = await prepareNotification(notifyPayload())
  } catch (error) {
    console.error('Prepare notification error:', error)
    toast.show(error?.message ? `發送失敗：${error.message}` : '發送失敗，請稍後再試')
    return
  }

  if (!job.total) {
    toast.show(`${notifyTargetSchoolLabel.value}目前沒有可寄送的訂購者`)
    return
  }
  if (!window.confirm(`確定要寄送${notifyTypeLabel.value}給${notifyTargetSchoolLabel.value} ${job.total} 位訂購者嗎？此動作無法復原。`)) {
    return
  }

  await runNotificationJob(job)
  if (!notificationError.value) {
    showNotifyModal.value = false
    notifyForm.value = emptyNotifyForm(selectedSchool.value)
  }
}
</script>

<style scoped>
@import 'src/css/adminpage.scss';
</style>
