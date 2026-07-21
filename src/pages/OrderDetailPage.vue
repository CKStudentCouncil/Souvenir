<template>
  <div v-if="loading" class="state">
    載入中...
  </div>

  <div v-else-if="!order" class="state not-found">
    <p class="eyebrow">訂單詳情</p>
    <h2>找不到這筆訂單</h2>
    <p class="state-copy">可能是訂單編號有誤，或訂單已被移除。</p>
    <button type="button" class="btn-primary" @click="goBack">
      返回
    </button>
  </div>

  <div v-else class="detail-page">

    <section v-if="isAdminView" class="admin-actions">
      <button
        type="button"
        class="action-btn delivered-btn"
        :class="{ active: order.delivered }"
        :disabled="order.delivered"
        @click="setDelivered(true)"
      >
        已交貨
      </button>

      <button
        type="button"
        class="action-btn pending-btn"
        :class="{ active: !order.delivered }"
        :disabled="!order.delivered"
        @click="setDelivered(false)"
      >
        未交貨
      </button>
    </section>

    <header class="detail-hero">
      <p class="eyebrow">訂單詳情</p>
      <h1>訂單 {{ order.id }}</h1>
      <span class="status-pill" :class="{ delivered: order.delivered }">
        <i />{{ order.delivered ? '已交貨' : '未交貨' }}
      </span>
    </header>

    <section class="summary-card">
      <div>
        <p class="summary-label">總金額</p>
        <p class="summary-value num">NT$ {{ order.finalTotal }}</p>
      </div>
      <div>
        <p class="summary-label">下單時間</p>
        <p class="summary-value">{{ formatDate(order.createdAt) }}</p>
      </div>
    </section>

    <section v-if="order.customerName" class="info-block">
      <p class="section-label">訂購人資訊</p>
      <div class="info-grid">
        <div>
          <span>姓名</span>
          <p>{{ order.customerName }}</p>
        </div>
        <div>
          <span>電話</span>
          <p>{{ order.customerPhone }}</p>
        </div>
        <div>
          <span>Email</span>
          <p>{{ order.customerEmail }}</p>
        </div>
        <div>
          <span>學校</span>
          <p>{{ order.school }}</p>
        </div>
        <div>
          <span>班級座號</span>
          <p>{{ order.classNumber }}</p>
        </div>
      </div>
    </section>

    <section class="items-block">
      <p class="section-label">訂購項目</p>
      <ul class="items-list">
        <li v-for="item in order.items" :key="item.id + item.name">
          <span class="item-name">{{ item.name }} <span class="qty">x {{ item.quantity }}</span></span>
          <span class="num item-price">NT$ {{ item.price }}</span>
        </li>
      </ul>
    </section>

    <button type="button" class="btn-back" @click="goBack">
      ← 返回{{ isAdminRoute ? '訂單列表' : '我的訂單' }}
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from 'src/stores/auth'
import { useToastStore } from 'src/stores/toast'
import { MOCK_ALLOW_ADMIN_WITHOUT_AUTH, USE_MOCK_ORDERS } from 'src/config/app'
import {
  fetchOrderById,
  canViewOrder,
  updateOrderDelivery,
  formatOrderDate
} from 'src/services/orderService'

const route = useRoute()
const router = useRouter()
const auth = useAuthStore()
const toast = useToastStore()

const order = ref(null)
const loading = ref(true)

const isAdminRoute = computed(
  () => route.name === 'admin-order-detail' || route.meta.isAdminSection === true
)

const isAdminView = computed(
  () =>
    isAdminRoute.value &&
    (
      auth.isManager ||
      (USE_MOCK_ORDERS && MOCK_ALLOW_ADMIN_WITHOUT_AUTH)
    )
)

onMounted(async () => {
  const id = route.params.id
  if (!isAdminRoute.value && !canViewOrder(id)) {
    loading.value = false
    toast.show('無權查看此訂單')
    return
  }
  try {
    order.value = await fetchOrderById(id)
  } catch {
    toast.show('載入失敗')
  } finally {
    loading.value = false
  }
})

function formatDate(ts) {
  return formatOrderDate(ts)
}

function goBack() {
  router.push(isAdminRoute.value ? '/admin' : '/orders')
}

async function setDelivered(delivered) {
  if (!isAdminView.value || !order.value) return
  try {
    const patch = await updateOrderDelivery(order.value.id, delivered, {
      deliveryUpdatedByName: '管理員'
    })
    order.value = { ...order.value, ...patch, delivered }
    toast.show(delivered ? '已標記為已交貨' : '已標記為未交貨')
  } catch {
    toast.show('更新失敗')
  }
}
</script>

<style scoped>
@import 'src/css/app.scss';

/*
  排版統一原則（與 StorefrontPage 共用同一套邏輯）：
  1. 字體堆疊同時涵蓋中英文，避免中文落回系統預設字體造成字重不一致。
  2. 中文標題字距收斂到接近 0，避免拉丁字排版的深負字距套在中文上重疊。
  3. 中文行距統一拉寬（1.6~1.65）比英文常用值更寬鬆才好讀。
  4. 金額數字都用 .num 包起來，套用 tabular-nums，避免「NT$」與數字在句子裡忽大忽小。
*/

.state,
.detail-page {
  box-sizing: border-box;
  max-width: 640px;
  min-height: 60vh;
  margin: 0 auto;
  padding: 96px 24px 96px;
  font-family: -apple-system, BlinkMacSystemFont, 'PingFang TC', 'Noto Sans TC',
    'Microsoft JhengHei', 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.65;
  color: #1d1d1f;
}

.state {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #6e6e73;
}

.state.not-found { flex-direction: column; }

.num {
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Noto Sans TC', Arial, sans-serif;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0;
}

.eyebrow {
  margin: 0 0 12px;
  color: #6e6e73;
  font-size: .72rem;
  font-weight: 700;
  letter-spacing: .06em;
}

h1, h2, h3, p { margin-top: 0; }

.detail-hero {
  margin-bottom: 32px;
  text-align: center;
}

.detail-hero h1 {
  margin-bottom: 16px;
  font-size: clamp(1.8rem, 4.5vw, 2.6rem);
  line-height: 1.25;
  letter-spacing: -.01em;
  font-weight: 700;
}

.state.not-found h2 {
  margin-bottom: 10px;
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  letter-spacing: -.01em;
  font-weight: 700;
  color: #1d1d1f;
}

.state-copy {
  max-width: 380px;
  margin-bottom: 24px;
  color: #6e6e73;
  font-size: .95rem;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 7px 16px;
  border-radius: 999px;
  background: #f5f5f7;
  color: #6e6e73;
  font-size: .8rem;
  font-weight: 600;
}

.status-pill i {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #ff9f0a;
}

.status-pill.delivered {
  background: #1d1d1f;
  color: #fff;
}

.status-pill.delivered i { background: #32d74b; }

.summary-card {
  display: flex;
  margin-bottom: 16px;
  padding: 28px;
  border-radius: 20px;
  background: #1d1d1f;
  color: #fff;
}

.summary-card > div { flex: 1; }
.summary-card > div + div { border-left: 1px solid rgba(255, 255, 255, .16); padding-left: 24px; }

.summary-label {
  margin-bottom: 6px;
  color: #a1a1a6;
  font-size: .78rem;
}

.summary-value {
  font-size: 1.4rem;
  font-weight: 700;
}

.info-block,
.items-block {
  margin-bottom: 16px;
  padding: 24px;
  border: 1px solid #e5e5e7;
  border-radius: 20px;
  background: #fff;
}

.section-label {
  margin-bottom: 16px;
  color: #6e6e73;
  font-size: .78rem;
  font-weight: 700;
  letter-spacing: .04em;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px 20px;
}

.info-grid > div span {
  display: block;
  margin-bottom: 4px;
  color: #6e6e73;
  font-size: .75rem;
}

.info-grid > div p {
  font-size: .95rem;
  font-weight: 500;
  word-break: break-word;
}

.items-list { list-style: none; padding: 0; margin: 0; }

.items-list li {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  padding: 13px 0;
}

.items-list li + li { border-top: 1px solid #ececee; }

.item-name { font-size: .95rem; }
.qty { color: #6e6e73; font-size: .85rem; }
.item-price { color: #6e6e73; font-size: .9rem; }

.admin-actions {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
}

.action-btn {
  flex: 1;
  height: 52px;
  border-radius: 16px;
  border: 1px solid #e5e5e7;
  background: #fff;
  color: black;
  font-size: .92rem;
  font-weight: 600;
  cursor: pointer;
  transition: all .25s ease;
}

.action-btn:hover {
  transform: translateY(-1px);
}

.delivered-btn.active {
  background: black;
  border-color: black;
  color: white;
}

.pending-btn.active {
  background: #f5f5f7;
  border-color: #d2d2d7;
  color: #1d1d1f;
}

@media (max-width: 700px) {
  .admin-actions {
    flex-direction: column;
  }

  .action-btn {
    width: 100%;
  }
}

.btn-primary,
.btn-secondary {
  flex: 1;
  padding: 12px 18px;
  border: none;
  border-radius: 999px;
  font-size: .9rem;
  font-weight: 600;
  cursor: pointer;
}

.btn-primary {
  background: #1d1d1f;
  color: #fff;
}

.btn-secondary {
  background: #f5f5f7;
  color: #1d1d1f;
}

.state.not-found .btn-primary {
  flex: none;
  padding: 12px 24px;
}

.btn-back {
  display: block;
  width: 100%;
  padding: 13px;
  border: 1px solid #e5e5e7;
  border-radius: 999px;
  background: none;
  color: #6e6e73;
  font-size: .88rem;
  cursor: pointer;
}

@media (max-width: 700px) {
  .state, .detail-page { padding: 72px 16px 72px; }
  .info-grid { grid-template-columns: 1fr; }
  .summary-card { flex-direction: column; gap: 16px; }
  .summary-card > div + div { border-left: none; padding-left: 0; border-top: 1px solid rgba(255, 255, 255, .16); padding-top: 16px; }
  .admin-actions { flex-direction: column; }
}
</style>