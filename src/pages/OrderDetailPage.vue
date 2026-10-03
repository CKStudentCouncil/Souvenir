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
      ← 返回{{ isAdminView ? '訂單列表' : '我的訂單' }}
    </button>

    <section v-if="isAdminView" class="admin-toolbar">
      <div class="toggle-group">
        <span class="toggle-label">交貨狀態</span>
        <div class="toggle-switch">
          <button
            type="button"
            :class="{ active: !order.delivered }"
            @click="setStatus('delivered', false)"
          >未交貨</button>
          <button
            type="button"
            :class="{ active: order.delivered }"
            @click="setStatus('delivered', true)"
          >已交貨</button>
        </div>
      </div>
      <div class="toggle-group">
        <span class="toggle-label">付款狀態</span>
        <div class="toggle-switch">
          <button
            type="button"
            :class="{ active: !order.paid }"
            @click="setStatus('paid', false)"
          >未付款</button>
          <button
            type="button"
            :class="{ active: order.paid }"
            @click="setStatus('paid', true)"
          >已付款</button>
        </div>
      </div>
    </section>

    <div v-if="isAdminView" class="receipt-actions">
      <div>
        <p class="receipt-actions__title">交貨收據</p>
        <p class="receipt-actions__hint">開啟列印視窗後，選擇「另存為 PDF」即可保存兩聯收據。</p>
      </div>
      <button
        type="button"
        class="btn-primary"
        @click="printReceipt"
      >
        列印／另存 PDF
      </button>
    </div>

    <article class="receipt">
      <header class="receipt-head">
        <p class="eyebrow">訂單詳情</p>
        <h1 class="mono">#{{ order.id }}</h1>
        <p class="receipt-date">{{ formatOrderDate(order.createdAt) }}</p>
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
          <div v-if="order.office">
            <dt>辦公室</dt>
            <dd>{{ order.office }}</dd>
          </div>
          <div v-else>
            <dt>班級座號</dt>
            <dd>{{ [getOrderClass(order), order.number].filter(Boolean).join(' / ') || '—' }}</dd>
          </div>
        </dl>
      </section>

      <div class="receipt-divider" />

      <section class="receipt-section">
        <p class="section-label">訂購項目 <span class="num">{{ countItems(order.items) }}</span> 件</p>
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
import { fetchOrderById, statusMessage, updateOrderStatus } from 'src/services/orderService'
import { countItems, formatOrderDate, getOrderClass } from 'src/utils/orders'
import { buildOrderReceiptHtml, printHtml } from 'src/utils/receipts'

const route = useRoute()
const router = useRouter()
const auth = useAuthStore()
const toast = useToastStore()

const order = ref(null)
const loading = ref(true)

// Same page for buyers (/orders/:id) and staff (/admin/orders/:id, admins only).
const isAdminView = computed(() => route.name === 'admin-order-detail')

onMounted(async () => {
  try {
    // Firestore rules only return orders placed from this device, or any order to admins.
    order.value = await fetchOrderById(route.params.id)
  } catch (error) {
    console.error('Failed to load order:', error)
    toast.show('載入失敗')
  } finally {
    loading.value = false
  }
})

function printReceipt() {
  try {
    if (!printHtml(buildOrderReceiptHtml(order.value))) {
      toast.show('無法開啟列印視窗，請允許此網站開啟彈出式視窗後再試一次')
    }
  } catch (error) {
    console.error('Receipt generation failed:', error)
    toast.show('收據產生失敗，請再試一次')
  }
}

function goBack() {
  router.push(isAdminView.value ? '/admin' : '/orders')
}

// field: 'delivered' | 'paid'
async function setStatus(field, value) {
  if (!isAdminView.value || !order.value || order.value[field] === value) return
  try {
    const patch = await updateOrderStatus(order.value.id, field, value, {
      uid: auth.user?.uid,
      name: auth.displayName
    })
    order.value = { ...order.value, ...patch }
    toast.show(statusMessage(field, value))
  } catch {
    toast.show('更新失敗')
  }
}
</script>

<style scoped>
@import 'src/css/orderdetailpage.scss';
</style>
