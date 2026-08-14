<template>
  <div v-if="loading" class="state">
    載入中...
  </div>

  <div v-else-if="!order" class="state not-found">
    <p class="eyebrow">訂單詳情</p>
    <h2>找不到這筆訂單</h2>
    <p class="state-copy">可能是訂單編號有誤，或訂單已被移除</p>
    <button type="button" class="btn-primary" @click="goBack">返回</button>
  </div>

  <div v-else class="detail-page">
    <button type="button" class="back-link" @click="goBack">
      ← 返回{{ isAdminRoute ? '訂單列表' : '我的訂單' }}
    </button>

    <section v-if="isAdminView" class="admin-toolbar">
      <div class="toggle-group">
        <span class="toggle-label">交貨狀態</span>
        <div class="toggle-switch">
          <button
            type="button"
            :class="{ active: !order.delivered }"
            @click="setDelivered(false)"
          >未交貨</button>
          <button
            type="button"
            :class="{ active: order.delivered }"
            @click="setDelivered(true)"
          >已交貨</button>
        </div>
      </div>
      <div class="toggle-group">
        <span class="toggle-label">付款狀態</span>
        <div class="toggle-switch">
          <button
            type="button"
            :class="{ active: !order.paid }"
            @click="setPaid(false)"
          >未付款</button>
          <button
            type="button"
            :class="{ active: order.paid }"
            @click="setPaid(true)"
          >已付款</button>
        </div>
      </div>
    </section>

    <article class="receipt">
      <header class="receipt-head">
        <p class="eyebrow">訂單詳情</p>
        <h1 class="mono">#{{ order.id }}</h1>
        <p class="receipt-date">{{ formatDate(order.createdAt) }}</p>
        <div class="status-pills">
          <span class="status-pill" :class="{ on: order.delivered }">
            <i />{{ order.delivered ? '已交貨' : '未交貨' }}
          </span>
          <span class="status-pill" :class="{ on: order.paid }">
            <i />{{ order.paid ? '已付款' : '未付款' }}
          </span>
        </div>
      </header>

      <div class="receipt-divider" />

      <section v-if="order.customerName" class="receipt-section">
        <p class="section-label">訂購人</p>
        <dl class="detail-list">
          <div>
            <dt>姓名</dt>
            <dd>{{ order.customerName }}</dd>
          </div>
          <div>
            <dt>電話</dt>
            <dd class="mono">{{ order.customerPhone }}</dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd class="mono">{{ order.customerEmail }}</dd>
          </div>
          <div>
            <dt>學校</dt>
            <dd>{{ order.school }}</dd>
          </div>
          <div>
            <dt>班級座號</dt>
            <dd>{{ order.classNumber || '—' }}</dd>
          </div>
        </dl>
      </section>

      <div class="receipt-divider" />

      <section class="receipt-section">
        <p class="section-label">訂購項目 <span class="num">{{ totalItemCount }}</span> 件</p>
        <ul class="receipt-items">
          <li v-for="item in order.items" :key="item.id + item.name">
            <span class="item-name">{{ item.name }} <span class="qty num">×{{ item.quantity }}</span></span>
            <span class="item-leader" aria-hidden="true" />
            <span class="item-price num">NT$ {{ item.price }}</span>
          </li>
        </ul>
      </section>

      <div class="receipt-divider receipt-divider--dashed" />

      <footer class="receipt-total">
        <span>應付總額</span>
        <strong class="num">NT$ {{ order.finalTotal }}</strong>
      </footer>
    </article>
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
  updateOrderPayment,
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

const totalItemCount = computed(
  () => order.value?.items?.reduce((total, item) => total + item.quantity, 0) || 0
)

onMounted(async () => {
  const id = route.params.id
  const allowed = isAdminRoute.value || canViewOrder(id) || isOrderSaved(id)

  if (!allowed) {
    loading.value = false
    toast.show('無權查看此訂單')
    return
  }

  try {
    order.value = await fetchOrderById(id)
  } catch (error) {
    console.error('Firestore fetch failed, falling back to local copy', error)
  }

  if (!order.value) {
    order.value = getLocalOrder(id)
  }

  if (!order.value) {
    toast.show('載入失敗')
  }

  loading.value = false
})

function formatDate(ts) {
  return formatOrderDate(ts)
}

function goBack() {
  router.push(isAdminRoute.value ? '/admin' : '/orders')
}

async function setDelivered(delivered) {
  if (!isAdminView.value || !order.value || order.value.delivered === delivered) return
  try {
    const patch = await updateOrderDelivery(order.value.id, delivered, {
      deliveryUpdatedByName: auth.user?.name || '管理員',
    })
    order.value = { ...order.value, ...patch, delivered }
    toast.show(delivered ? '已標記為已交貨' : '已標記為未交貨')
  } catch {
    toast.show('更新失敗')
  }
}

async function setPaid(paid) {
  if (!isAdminView.value || !order.value || order.value.paid === paid) return
  try {
    const patch = await updateOrderPayment(order.value.id, paid, {
      paymentUpdatedByName: auth.user?.name || '管理員',
    })
    order.value = { ...order.value, ...patch, paid }
    toast.show(paid ? '已標記為已付款' : '已標記為未付款')
  } catch {
    toast.show('更新失敗')
  }
}
</script>

<style scoped>
@import 'src/css/app.scss';
@import 'src/css/orderdetailpage.scss';
</style>