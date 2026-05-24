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
    <h2>⚠️ 權限不足</h2>
    <button
      type="button"
      class="btn-primary"
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
        <p class="email">{{ auth.user?.email || '—' }}</p>
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
        全部訂單 ({{ currentOrders.length }})
      </button>
      <button
        type="button"
        :class="{ active: activeTab === 'delivered' }"
        @click="setActiveTab('delivered')"
      >
        已交貨 ({{ deliveredTabCount }})
      </button>
    </div>

    <div class="panel export-panel">
      <div>
        <h2>{{ activeTab === 'delivered' ? '已交貨統計與匯出' : '匯出與總覽' }}</h2>
        <div class="stats-row">
          <div class="stat">
            <div>{{ activeTab === 'delivered' ? '已交貨數' : '訂單數' }}</div>
            <div>{{ currentOrders.length }}</div>
          </div>
          <div class="stat blue">
            <div>{{ activeTab === 'delivered' ? '已交貨營收' : '總營收' }}</div>
            <div>NT$ {{ currentStats.totalRevenue }}</div>
          </div>
          <div class="stat red">
            <div>折扣總額</div>
            <div>NT$ {{ currentStats.totalDiscount }}</div>
          </div>
        </div>
      </div>
      <button
        type="button"
        class="btn-primary"
        @click="exportToExcel(activeTab === 'delivered')"
      >
        匯出 Excel
      </button>
    </div>

    <div
      v-if="activeTab === 'delivered' && Object.keys(deliveryStats).length > 0"
      class="panel delivery-personnel-panel"
    >
      <h2>交貨人員統計</h2>
      <div class="personnel-grid">
        <div
          v-for="(stats, personnel) in deliveryStats"
          :key="personnel"
          class="personnel-card"
        >
          <p class="personnel-name">{{ personnel }}</p>
          <p class="personnel-stat">訂單數：{{ stats.count }}</p>
          <p class="personnel-stat">金額：NT$ {{ stats.totalAmount }}</p>
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
          <span>總數量：{{ total }}</span>
        </li>
      </ul>
      <p v-else>尚無統計資料</p>
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
          <span>交貨狀態：{{ order.delivered ? '✅ 已交貨' : '⏳ 未交貨' }}</span>
          <div
            v-if="activeTab === 'all'"
            class="delivery-actions"
          >
            <button
              type="button"
              :disabled="order.delivered"
              @click="updateDeliveryStatus(order.id, true)"
            >
              標記已交貨
            </button>
            <button
              type="button"
              :disabled="!order.delivered"
              @click="updateDeliveryStatus(order.id, false)"
            >
              標記未交貨
            </button>
          </div>
        </div>
        <p><strong>訂單ID:</strong> {{ order.id }}</p>
        <p><strong>折扣後金額:</strong> NT$ {{ order.finalTotal }}</p>
        <p><strong>購買時間:</strong> {{ formatDate(order.createdAt) }}</p>
        <div
          v-if="order.customerName || order.customerEmail"
          class="customer-box"
        >
          <strong>客戶資料：</strong>
          <ul>
            <li v-if="order.customerName">姓名：{{ order.customerName }}</li>
            <li v-if="order.customerPhone">電話：{{ order.customerPhone }}</li>
            <li v-if="order.customerEmail">Email：{{ order.customerEmail }}</li>
            <li v-if="order.school">學校：{{ order.school }}</li>
            <li v-if="order.classNumber">班級座號：{{ order.classNumber }}</li>
          </ul>
        </div>
        <div class="items-box">
          <strong>購買商品：</strong>
          <ul>
            <li
              v-for="item in order.items"
              :key="item.id + item.name"
            >
              {{ item.name }} x {{ item.quantity }} (NT$ {{ item.price }})
            </li>
          </ul>
        </div>
        <div class="order-actions">
          <button
            type="button"
            class="btn-primary"
            @click="viewOrderDetail(order.id)"
          >
            查看詳細
          </button>
          <button
            type="button"
            class="btn-danger"
            @click="confirmDelete(order.id)"
          >
            刪除訂單
          </button>
        </div>
      </div>
      <p v-if="currentOrders.length === 0">尚無符合條件的訂單</p>
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
  deleteOrder(orderId).catch(() => toast.show('❌ 刪除失敗'))
}
</script>

<style scoped>
.admin-page {
  min-height: 100vh;
  padding: 40px 20px;
  max-width: 1000px;
  margin: 0 auto;
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
  color: #666;
  margin-bottom: 24px;
}

.admin-user {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ddd;
}

.name {
  margin: 0;
  font-weight: bold;
  font-size: 1rem;
  color: #333;
}

.email {
  margin: 0;
  font-size: 0.85rem;
  color: #666;
}

.admin-page h1 {
  margin-bottom: 20px;
  color: #333;
}

.filter-block {
  margin-bottom: 16px;
}

.filter-block label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
}

.filter-block select,
.filter-block input {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  box-sizing: border-box;
  color: #333;
  background: white;
}

.tabs {
  display: flex;
  gap: 4px;
  margin-bottom: 20px;
  background: #f1f5f9;
  padding: 4px;
  border-radius: 12px;
}

.tabs button {
  flex: 1;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s;
}

.tabs button:not(.active) {
  background: transparent;
  color: #64748b;
  font-weight: 400;
}

.tabs button.active {
  background: white;
  color: #1f2937;
  font-weight: 600;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.panel {
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  padding: 20px;
  margin-bottom: 20px;
}

.panel h2 {
  margin: 0 0 16px;
  color: #333;
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

.export-panel p {
  margin: 6px 0 8px;
  color: #666;
  font-size: 0.95rem;
}

.stats-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 12px;
}

.stat {
  background: #f9fafb;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 10px 14px;
}

.stat > div:first-child {
  color: #666;
  font-size: 0.9rem;
}

.stat > div:last-child {
  color: #111;
  font-weight: 700;
  font-size: 1.1rem;
  margin-top: 4px;
}

.stat.blue {
  background: #f0f9ff;
  border-color: #e0f2fe;
}

.stat.blue > div:first-child {
  color: #0369a1;
}

.stat.blue > div:last-child {
  color: #0c4a6e;
}

.stat.red {
  background: #fff1f2;
  border-color: #ffe4e6;
}

.stat.red > div:first-child {
  color: #be123c;
}

.stat.red > div:last-child {
  color: #9f1239;
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
  border: 1px solid #eee;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
  background: #f9f9f9;
}

.product-stats span:first-child {
  color: #333;
  font-weight: 600;
}

.product-stats span:last-child {
  color: #666;
}

.delivery-personnel-panel {
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  padding: 20px;
  margin-bottom: 20px;
}

.delivery-personnel-panel h2 {
  margin: 0 0 16px;
  color: #333;
}

.personnel-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
}

.personnel-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 12px;
}

.personnel-name {
  margin: 0 0 4px;
  font-weight: bold;
  color: #1f2937;
  font-size: 1rem;
}

.personnel-stat {
  margin: 4px 0;
  font-size: 0.9rem;
  color: #64748b;
}

.personnel-stat:last-child {
  color: #059669;
  font-weight: 600;
  margin-top: 6px;
}

.orders-section {
  margin-top: 20px;
}

.orders-section h2 {
  margin: 0 0 16px;
  color: #333;
}

.order-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  padding: 20px;
  margin-bottom: 20px;
}

.order-card p {
  color: #333;
}

.delivery-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 12px;
  border: 1px solid;
}

.delivery-bar span {
  margin-left: 8px;
  font-size: 0.85rem;
}

.delivery-bar.delivered {
  background: #dcfce7;
  border-color: #16a34a;
  color: #166534;
}

.delivery-bar.pending {
  background: #fef3c7;
  border-color: #f59e0b;
  color: #92400e;
}

.delivery-actions {
  display: flex;
  gap: 8px;
}

.delivery-actions button {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  font-size: 0.85rem;
}

.delivery-actions button:first-child {
  background: #16a34a;
}

.delivery-actions button:first-child:disabled {
  background: #94a3b8;
  cursor: not-allowed;
}

.delivery-actions button:last-child {
  background: #f59e0b;
}

.delivery-actions button:last-child:disabled {
  background: #94a3b8;
  cursor: not-allowed;
}

.customer-box {
  background: #f0f9ff;
  border: 1px solid #e0f2fe;
  border-radius: 8px;
  padding: 10px;
  margin: 10px 0;
  font-size: 0.9rem;
}

.customer-box strong {
  color: #0369a1;
}

.customer-box ul {
  list-style: none;
  padding-left: 0;
  margin: 6px 0;
}

.customer-box ul li {
  margin: 4px 0;
  color: #333;
}

.items-box {
  background: #f9f9f9;
  border-radius: 8px;
  padding: 10px;
  margin: 10px 0;
  font-size: 0.9rem;
}

.items-box strong {
  color: #333;
}

.items-box ul {
  list-style: none;
  padding-left: 0;
  margin: 6px 0;
}

.items-box ul li {
  margin: 4px 0;
  color: #333;
}

.order-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 12px;
}

.btn-primary {
  padding: 12px 24px;
  background: linear-gradient(90deg, #ff512f 0%, #dd2476 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(221, 36, 118, 0.25);
}

.btn-primary:hover {
  opacity: 0.95;
}

.btn-danger {
  padding: 10px 16px;
  background: #d32f2f;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

.btn-danger:hover {
  background: #c41c3b;
}
</style>
