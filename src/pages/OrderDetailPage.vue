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
      <div class="action-group">
        <q-btn-group flat rounded dense>
          <q-btn
            type="button"
            class="action-btn delivered-btn"
            :class="{ active: order.delivered }"
            :disabled="order.delivered"
            @click="setDelivered(true)"
          >
            已交貨
          </q-btn>

          <q-btn
            type="button"
            class="action-btn pending-btn"
            :class="{ active: !order.delivered }"
            :disabled="!order.delivered"
            @click="setDelivered(false)"
          >
            未交貨
          </q-btn>
        </q-btn-group>
      </div>

      <div class="action-group">
        <q-btn-group flat rounded dense>
          <q-btn
            type="button"
            class="action-btn paid-btn"
            :class="{ active: order.paid }"
            :disabled="order.paid"
            @click="setPaid(true)"
          >
            已付款
          </q-btn>

          <q-btn
            type="button"
            class="action-btn unpaid-btn"
            :class="{ active: !order.paid }"
            :disabled="!order.paid"
            @click="setPaid(false)"
          >
            未付款
          </q-btn>
        </q-btn-group>
      </div>
    </section>

    <header class="detail-hero">
      <p class="eyebrow">訂單詳情</p>
      <h1>訂單 {{ order.id }}</h1>
      <span class="status-pill" :class="{ delivered: order.delivered }">
        <i />{{ order.delivered ? '已交貨' : '未交貨' }}
      </span>
      <span class="status-pill" :class="{ delivered: order.paid }">
        <i />{{ order.paid ? '已付款' : '未付款' }}
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
          <span>班級</span>
          <p>{{ order.class }}</p>
        </div>
        <div>
          <span>座號</span>
          <p>{{ order.number }}</p>
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
      deliveryUpdatedByName: auth.user?.name || '管理員',
    })
    order.value = { ...order.value, ...patch, delivered }
    toast.show(delivered ? '已標記為已交貨' : '已標記為未交貨')
  } catch {
    toast.show('更新失敗')
  }
}

async function setPaid(paid) {
  if (!isAdminView.value || !order.value) return
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