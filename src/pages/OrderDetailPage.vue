<template>
  <div
    v-if="loading"
    class="state"
  >
    載入中...
  </div>
  <div
    v-else-if="!order"
    class="state"
  >
    <h2>找不到訂單</h2>
    <button
      type="button"
      class="btn"
      @click="goBack"
    >
      返回
    </button>
  </div>
  <div
    v-else
    class="detail-page"
  >
    <h1>訂單詳情</h1>
    <div class="card">
      <p><strong>訂單 ID：</strong>{{ order.id }}</p>
      <p><strong>狀態：</strong>{{ order.delivered ? '✅ 已交貨' : '⏳ 未交貨' }}</p>
      <p><strong>總金額：</strong>NT$ {{ order.finalTotal }}</p>
      <p><strong>下單時間：</strong>{{ formatDate(order.createdAt) }}</p>
      <div
        v-if="order.customerName"
        class="box"
      >
        <p>姓名：{{ order.customerName }}</p>
        <p>電話：{{ order.customerPhone }}</p>
        <p>Email：{{ order.customerEmail }}</p>
        <p>學校：{{ order.school }}</p>
        <p>班級座號：{{ order.classNumber }}</p>
      </div>
      <ul>
        <li
          v-for="item in order.items"
          :key="item.id + item.name"
        >
          {{ item.name }} x {{ item.quantity }} — NT$ {{ item.price }}
        </li>
      </ul>
      <div
        v-if="isAdminView"
        class="admin-actions"
      >
        <button
          type="button"
          class="btn"
          @click="setDelivered(true)"
        >
          標記已交貨
        </button>
        <button
          type="button"
          class="btn muted"
          @click="setDelivered(false)"
        >
          標記未交貨
        </button>
      </div>
      <button
        type="button"
        class="btn back"
        @click="goBack"
      >
        返回
      </button>
    </div>
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
    (auth.isAdmin || (USE_MOCK_ORDERS && MOCK_ALLOW_ADMIN_WITHOUT_AUTH))
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
.state,
.detail-page {
  min-height: 60vh;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.box {
  background: #f0f9ff;
  padding: 12px;
  border-radius: 8px;
  margin: 12px 0;
}

.admin-actions {
  display: flex;
  gap: 10px;
  margin: 16px 0;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(90deg, #ff512f 0%, #dd2476 100%);
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.btn.muted {
  background: #f59e0b;
}

.btn.back {
  margin-top: 12px;
  width: 100%;
}
</style>
