<template>
  <div class="success-page">
    <div class="success-card">
      <div class="icon">✅</div>
      <h1>訂單已成功送出！</h1>
      <p
        v-if="orderId"
        class="order-id"
      >
        訂單編號：<strong>#{{ orderId }}</strong>
      </p>
      <p
        v-if="order"
        class="summary"
      >
        {{ order.customerName }} · {{ order.customerEmail }}<br>
        總金額：NT$ {{ order.finalTotal }}
      </p>
      <div class="actions">
        <button
          type="button"
          class="btn-primary"
          @click="$router.push('/orders')"
        >
          查看我的訂單
        </button>
        <button
          type="button"
          class="btn-secondary"
          @click="$router.push('/')"
        >
          繼續購物
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { fetchOrderById } from 'src/services/orderService'

const route = useRoute()
const orderId = ref(route.query.id || '')
const order = ref(null)

onMounted(async () => {
  if (orderId.value) {
    order.value = await fetchOrderById(orderId.value)
  }
})
</script>

<style scoped>
.success-page {
  min-height: 70vh;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.success-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  padding: 40px 32px;
  max-width: 480px;
  width: 100%;
  text-align: center;
}

.icon {
  font-size: 4rem;
  margin-bottom: 16px;
}

h1 {
  color: #333;
  margin: 0 0 12px;
  font-size: 1.5rem;
}

.order-id {
  color: #555;
  margin-bottom: 8px;
}

.summary {
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 24px;
  line-height: 1.6;
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.btn-primary,
.btn-secondary {
  padding: 14px 20px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
}

.btn-primary {
  background: linear-gradient(90deg, #ff512f 0%, #dd2476 100%);
  color: white;
}

.btn-secondary {
  background: #f5f5f5;
  color: #333;
}
</style>
