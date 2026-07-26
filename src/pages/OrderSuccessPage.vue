<template>
  <div class="success-page">
    <div class="success-card">
      <div class="success-icon"><q-icon name="check" /></div>
      <p class="eyebrow">訂單已成立</p>
      <h1 class="text-bold">Thank you</h1>
      <p class="lead">
        我們已收到你的訂單，接下來會依照以下資訊為你準備
        <br />
        目前僅提供現場付款，還請注意建中班聯或友校班聯會、代聯會或學生會相關公告
      </p>
      <div v-if="orderId" class="order-id">訂單編號<strong class="mono">#{{ orderId }}</strong></div>
      <div v-if="order" class="order-summary">
        <div class="summary-row">
          <span class="summary-label">姓名</span>
          <span>{{ order.customerName }}</span>
        </div>
        <div class="summary-row">
          <span class="summary-label">Email</span>
          <span class="mono">{{ order.customerEmail }}</span>
        </div>
        <div class="summary-row">
          <span class="summary-label">應付金額</span>
          <strong class="num">NT$ {{ order.finalTotal }}</strong>
        </div>
      </div>
      <p v-if="order" class="email-note">
        訂單確認信將寄送到上方信箱，幾分鐘內沒收到的話，記得檢查一下垃圾郵件匣。
      </p>
      <router-link to="/orders" class="primary-button">查看我的訂單</router-link>
      <a href="https://forms.gle/Sfr6F5RLPsc12stt6" target="_blank" rel="noopener" class="feedback-button">填寫意見反饋</a>
      <router-link to="/" class="secondary-link">繼續探索</router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { fetchOrderById } from 'src/services/orderService'

const route = useRoute()
const orderId = ref(route.query.id || '')
const order = ref(null)

onMounted(async () => {
  if (orderId.value) order.value = await fetchOrderById(orderId.value)
})
</script>

<style scoped>
.success-page {
  min-height: calc(100vh - 56px);
  padding: 48px 24px;
  display: grid;
  place-items: center;
  background: radial-gradient(circle at 50% 25%, #fff, #f5f5f7 65%);
  font-family: -apple-system, BlinkMacSystemFont, 'PingFang TC', 'Noto Sans TC',
    'Microsoft JhengHei', 'Helvetica Neue', Arial, sans-serif;
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

.success-card {
  width: min(460px, 100%);
  text-align: center;
}

.success-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 22px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #e8f7ed;
  color: #19703a;
  font-size: 2rem;
}

.eyebrow {
  margin: 0 0 12px;
  color: #6e6e73;
  font-size: .72rem;
  font-weight: 700;
  letter-spacing: .06em;
}

h1 {
  margin: 0 0 12px;
  font-size: clamp(2.6rem, 8vw, 4rem);
  line-height: 1.1;
  letter-spacing: -.01em;
  font-weight: 700;
}

.lead {
  max-width: 360px;
  margin: 0 auto 28px;
  color: #6e6e73;
  line-height: 1.65;
}

.order-id,
.order-summary {
  margin-bottom: 12px;
  padding: 16px;
  border: 1px solid #e5e5e7;
  border-radius: 14px;
  background: #fff;
  color: #6e6e73;
  font-size: .85rem;
  line-height: 1.6;
}

.order-id {
  display: grid;
  gap: 4px;
}

.order-id strong {
  margin-top: 4px;
  color: #1d1d1f;
  font-size: 1rem;
}

.order-summary {
  display: grid;
  gap: 8px;
  text-align: left;
}

.summary-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
}

.summary-label {
  flex-shrink: 0;
  color: #86868b;
  font-size: .78rem;
}

.summary-row span:not(.summary-label),
.summary-row strong {
  color: #1d1d1f;
  text-align: right;
  overflow-wrap: anywhere;
}

.summary-row strong { font-size: 1rem; }

.email-note {
  margin: 0 0 20px;
  color: #86868b;
  font-size: .8rem;
  line-height: 1.6;
}

.primary-button {
  display: block;
  margin-top: 4px;
  padding: 14px;
  border-radius: 999px;
  background: #1d1d1f;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
}

.feedback-button {
  display: block;
  margin-top: 12px;
  padding: 14px;
  border-radius: 999px;
  background: #f5f5f7;
  color: #1d1d1f;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid #e5e5e7;
}

.feedback-button:hover {
  background: #e8e8ed;
}

.secondary-link {
  display: inline-block;
  margin-top: 17px;
  color: #06c;
  font-size: .9rem;
  text-decoration: none;
}
</style>