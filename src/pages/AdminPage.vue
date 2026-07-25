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
    <div class="admin-user">
      <img
        :src="auth.user?.photoURL || 'https://via.placeholder.com/48?text=👤'"
        alt=""
        class="avatar"
      >
      <div>
        <p class="name">Admin-{{ displayName }}</p>
        <p class="email mono">{{ auth.user?.email || '—' }}</p>
      </div>
    </div>

    <h1>後台管理 - 訂單統計</h1>

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
        <p><strong>訂單ID：</strong><span class="mono">{{ order.id }}</span></p>
        <p><strong>折扣後金額：</strong><span class="num">NT$ {{ order.finalTotal }}</span></p>
        <p><strong>購買時間：</strong><span class="num">{{ formatDate(order.createdAt) }}</span></p>
        <p><strong>最後更新者：</strong>{{ order.deliveryUpdatedBy || '—' }}</p>
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
  deleteOrder,
  exportToExcel,
  calculateDeliveryStats,
  formatDate
} = useAdminOrders({
  showToast: toast.show,
  displayName
})

const deliveryStats = computed(() => calculateDeliveryStats(currentOrders.value))

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
</script>

<style scoped>
@import 'src/css/app.scss';

/*
  排版與視覺統一原則（與 StorefrontPage / SuccessPage / OrderDetailPage / AccountPage 共用同一套邏輯）：
  1. 字體堆疊涵蓋中英文，避免中文落回系統預設字體造成字重不一致。
  2. 中文行距統一拉寬到 1.6。
  3. 金額、數量用 .num 包起來套 tabular-nums；訂單 ID、Email、電話這類純英數字串
     用 .mono 包起來換成等寬字體，方便使用者核對、複製。
  4. 視覺語言統一改成黑白極簡：大卡片（order-card、panel）圓角統一 20px，
     跟 StorefrontPage 的 offer-card / product-image 一致；小卡片（stat、personnel-card）
     維持 10px。卡片邊框統一 #e5e5e7，取代原本的彩色陰影與漸層按鈕。
  5. 按鈕統一膠囊造型（999px），主要動作黑底白字，次要動作白底細邊框。
*/

.admin-page {
  min-height: 100vh;
  padding: 40px 20px;
  max-width: 1000px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'PingFang TC', 'Noto Sans TC',
    'Microsoft JhengHei', 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: #1d1d1f;
}

.num {
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Noto Sans TC', Arial, sans-serif;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0;
}

.mono {
  font-family: 'SF Mono', 'Menlo', 'Consolas', ui-monospace, monospace;
  letter-spacing: 0;
  font-size: .95em;
  word-break: break-all;
}

.state-screen {
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.state-screen h2 {
  color: #d32f2f;
  margin: 16px 0;
}

.state-screen p {
  color: #6e6e73;
  margin-bottom: 24px;
}

.admin-user {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border: 1px solid #e5e5e7;
  border-radius: 18px;
  margin-bottom: 16px;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #e5e5e7;
}

.name {
  margin: 0;
  font-weight: 700;
  font-size: 1rem;
  color: #1d1d1f;
}

.email {
  margin: 0;
  font-size: .85rem;
  color: #6e6e73;
}

.admin-page h1 {
  margin: 0 0 20px;
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  line-height: 1.2;
  letter-spacing: -.01em;
  font-weight: 700;
}

.filter-block {
  margin-bottom: 16px;
}

.filter-block label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #1d1d1f;
}

.filter-block select {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #e5e5e7;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  box-sizing: border-box;
  color: #1d1d1f;
  background: #fff;
}

.tabs {
  display: flex;
  gap: 4px;
  margin-bottom: 20px;
  background: #f5f5f7;
  padding: 4px;
  border-radius: 999px;
}

.tabs button {
  flex: 1;
  padding: 10px 20px;
  border: none;
  border-radius: 999px;
  background: transparent;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.2s;
}

.tabs button:not(.active) {
  color: #6e6e73;
  font-weight: 400;
}

.tabs button.active {
  background: #1d1d1f;
  color: #fff;
  font-weight: 600;
}

.panel {
  background: #fff;
  border: 1px solid #e5e5e7;
  border-radius: 20px;
  padding: 24px;
  margin-bottom: 20px;
}

.panel h2 {
  margin: 0 0 16px;
  font-size: 1.2rem;
  font-weight: 700;
  color: #1d1d1f;
}

.export-panel {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;
}

.export-panel h2 {
  margin: 0;
}

.stats-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 12px;
}

.stat {
  background: #fff;
  border: 1px solid #e5e5e7;
  border-radius: 10px;
  padding: 10px 14px;
}

.stat > div:first-child {
  color: #6e6e73;
  font-size: .9rem;
}

.stat > div:last-child {
  color: #1d1d1f;
  font-weight: 700;
  font-size: 1.1rem;
  margin-top: 4px;
}

.product-stats {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.product-stats li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid #e5e5e7;
  background: #fff;
}

.product-stats span:first-child {
  color: #1d1d1f;
  font-weight: 600;
}

.product-stats span:last-child {
  color: #6e6e73;
}

.empty {
  color: #6e6e73;
}

.personnel-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
}

.personnel-card {
  background: #fff;
  border: 1px solid #e5e5e7;
  border-radius: 10px;
  padding: 12px;
}

.personnel-name {
  margin: 0 0 4px;
  font-weight: 700;
  color: #1d1d1f;
  font-size: 1rem;
}

.personnel-stat {
  margin: 4px 0;
  font-size: .9rem;
  color: #6e6e73;
}

.personnel-stat.total {
  color: #1d1d1f;
  font-weight: 600;
  margin-top: 6px;
}

.orders-section {
  margin-top: 20px;
}

.orders-section h2 {
  margin: 0 0 16px;
  font-size: 1.2rem;
  font-weight: 700;
  color: #1d1d1f;
}

.order-card {
  background: #fff;
  border: 1px solid #e5e5e7;
  border-radius: 20px;
  padding: 24px;
  margin-bottom: 20px;
}

.delivery-bar {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 12px;
  padding: 10px 12px;
  border-radius: 8px;
  margin-bottom: 12px;
  border: 1px solid #e5e5e7;
  font-size: .9rem;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.delivery-bar.delivered .status-dot {
  background: #19703a;
}

.delivery-bar.pending .status-dot {
  background: #b45309;
}

.delivery-actions {
  display: flex;
  gap: 8px;
  margin-left: auto;
}

.btn-sm {
  padding: 6px 14px;
  border: 1px solid #1d1d1f;
  border-radius: 999px;
  background: #1d1d1f;
  color: #fff;
  font-weight: 600;
  font-size: .8rem;
  cursor: pointer;
  font-family: inherit;
}

.btn-sm.muted {
  background: #fff;
  color: #1d1d1f;
}

.btn-sm:disabled {
  background: #fff;
  border-color: #e5e5e7;
  color: #b0b0b5;
  cursor: not-allowed;
}

.customer-box {
  background: #f5f5f7;
  border-radius: 12px;
  padding: 14px;
  margin: 10px 0;
  font-size: .9rem;
}

.customer-box strong {
  color: #1d1d1f;
}

.customer-box ul {
  list-style: none;
  padding-left: 0;
  margin: 6px 0 0;
}

.customer-box ul li {
  margin: 4px 0;
  color: #1d1d1f;
}

.items-box {
  background: #f5f5f7;
  border-radius: 12px;
  padding: 14px;
  margin: 10px 0;
  font-size: .9rem;
}

.items-box strong {
  color: #1d1d1f;
}

.items-box ul {
  list-style: none;
  padding-left: 0;
  margin: 6px 0 0;
}

.items-box ul li {
  margin: 4px 0;
  color: #1d1d1f;
}

.order-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 12px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 999px;
  background: #1d1d1f;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  font-family: inherit;
}

.btn-outline {
  padding: 10px 16px;
  border: 1px solid #e5e5e7;
  border-radius: 999px;
  background: #fff;
  color: #1d1d1f;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
}

.btn-outline.danger {
  border-color: #d32f2f;
  color: #d32f2f;
}
</style>