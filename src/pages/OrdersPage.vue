<template>
  <div class="orders-page">
    <h1>我的訂單</h1>
    <button
      type="button"
      class="survey-btn"
      @click="openSurvey"
    >
      使用者滿意度調查
    </button>

    <p
      v-if="loading"
      class="muted"
    >
      載入中...
    </p>
    <p
      v-else-if="orders.length === 0"
      class="muted"
    >
      你還沒有任何訂單（完成結帳後會顯示於此裝置）
    </p>

    <template v-else>
      <p class="counter">第 {{ currentIndex + 1 }} 筆 / 共 {{ orders.length }} 筆訂單</p>
      <div class="carousel-wrap">
        <button
          type="button"
          class="nav-btn"
          @click="prev"
        >
          ‹
        </button>
        <div
          class="carousel"
          @touchstart="touchStart = $event.touches[0].clientX"
          @touchend="onTouchEnd"
        >
          <div
            class="track"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div
              v-for="order in orders"
              :key="order.id"
              class="slide"
            >
              <div class="order-card">
                <div
                  class="status-pill"
                  :class="order.delivered ? 'done' : 'wait'"
                >
                  {{ order.delivered ? '✅ 已交貨' : '⏳ 未交貨' }}
                </div>
                <p class="order-id">訂單編號：#{{ order.id }}</p>
                <p>總金額：NT$ {{ order.finalTotal }}</p>
                <p>下單時間：{{ formatDate(order.createdAt) }}</p>
                <div
                  v-if="order.customerName"
                  class="info-box"
                >
                  <p>姓名：{{ order.customerName }}</p>
                  <p>Email：{{ order.customerEmail }}</p>
                </div>
                <ul class="items">
                  <li
                    v-for="item in order.items"
                    :key="item.id + item.name"
                  >
                    {{ item.name }} x {{ item.quantity }}
                  </li>
                </ul>
                <canvas
                  :ref="(el) => setQrRef(order.id, el)"
                  class="qr-canvas"
                />
                <div class="card-actions">
                  <button
                    type="button"
                    class="btn-primary"
                    @click="$router.push(`/orders/${order.id}`)"
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
            </div>
          </div>
        </div>
        <button
          type="button"
          class="nav-btn"
          @click="next"
        >
          ›
        </button>
      </div>
      <div class="dots">
        <button
          v-for="(_, i) in orders"
          :key="i"
          type="button"
          :class="{ active: i === currentIndex }"
          @click="currentIndex = i"
        />
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'
import QRCode from 'qrcode'
import { useToastStore } from 'src/stores/toast'
import {
  fetchBuyerOrders,
  deleteOrderById,
  formatOrderDate
} from 'src/services/orderService'

const toast = useToastStore()
const orders = ref([])
const loading = ref(true)
const currentIndex = ref(0)
const touchStart = ref(0)
const qrRefs = new Map()

function setQrRef(id, el) {
  if (el) qrRefs.set(id, el)
}

async function loadOrders() {
  loading.value = true
  try {
    orders.value = await fetchBuyerOrders()
  } catch (e) {
    console.error(e)
    toast.show('載入訂單失敗')
  }
  loading.value = false
  await nextTick()
  renderQrs()
}

async function renderQrs() {
  for (const order of orders.value) {
    const canvas = qrRefs.get(order.id)
    if (!canvas) continue
    const url = `${window.location.origin}/orders/${order.id}`
    try {
      await QRCode.toCanvas(canvas, url, { width: 120 })
    } catch (e) {
      console.error(e)
    }
  }
}

watch(currentIndex, () => nextTick(renderQrs))

onMounted(loadOrders)

function formatDate(ts) {
  return formatOrderDate(ts)
}

function prev() {
  currentIndex.value = currentIndex.value === 0 ? orders.value.length - 1 : currentIndex.value - 1
}

function next() {
  currentIndex.value =
    currentIndex.value === orders.value.length - 1 ? 0 : currentIndex.value + 1
}

function onTouchEnd(e) {
  const end = e.changedTouches[0].clientX
  const dist = touchStart.value - end
  if (dist > 50) next()
  else if (dist < -50) prev()
}

function openSurvey() {
  window.open('https://forms.gle/Grnk7FXfrXDQutE87', '_blank')
}

async function confirmDelete(orderId) {
  if (!window.confirm('確定要刪除此訂單嗎？')) return
  try {
    await deleteOrderById(orderId)
    orders.value = orders.value.filter((o) => o.id !== orderId)
    if (currentIndex.value >= orders.value.length) {
      currentIndex.value = Math.max(0, orders.value.length - 1)
    }
    toast.show('✅ 訂單已刪除')
  } catch (e) {
    toast.show('❌ 刪除失敗')
  }
}
</script>

<style scoped>
.orders-page {
  min-height: 100vh;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  color: #333;
  margin-bottom: 20px;
}

.survey-btn {
  margin-bottom: 24px;
  padding: 12px 28px;
  background: linear-gradient(90deg, #ff512f 0%, #dd2476 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
}

.muted {
  color: #555;
}

.counter {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 16px;
}

.carousel-wrap {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 800px;
  gap: 8px;
}

.nav-btn {
  border: none;
  background: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.carousel {
  flex: 1;
  overflow: hidden;
}

.track {
  display: flex;
  transition: transform 0.3s ease;
}

.slide {
  min-width: 100%;
  padding: 0 4px;
  box-sizing: border-box;
}

.order-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  padding: 24px;
}

.status-pill {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: bold;
  margin-bottom: 12px;
}

.status-pill.done {
  background: #dcfce7;
  color: #166534;
}

.status-pill.wait {
  background: #fef3c7;
  color: #92400e;
}

.order-id {
  background: #f8fafc;
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
  display: inline-block;
}

.info-box {
  background: #f0f9ff;
  padding: 12px;
  border-radius: 8px;
  margin: 12px 0;
}

.items {
  margin: 12px 0;
}

.qr-canvas {
  display: block;
  margin: 16px auto;
}

.card-actions {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary {
  padding: 10px 16px;
  background: linear-gradient(90deg, #ff512f 0%, #dd2476 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

.btn-danger {
  padding: 10px 16px;
  background: #fee2e2;
  color: #dc2626;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

.dots {
  display: flex;
  gap: 8px;
  margin-top: 16px;
}

.dots button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: #ccc;
  cursor: pointer;
  padding: 0;
}

.dots button.active {
  background: #dd2476;
}
</style>
