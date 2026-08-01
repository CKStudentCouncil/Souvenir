<template>
  <div class="orders-page">
    <header class="page-header">
      <p class="eyebrow">你的訂購紀錄</p>
      <h1>我的訂單</h1>
      <p>每一筆訂單的進度，都可以在這裡輕鬆查看。</p>
    </header>

    <div v-if="loading" class="empty-state">正在尋找你的訂單</div>
    <div v-else-if="orders.length === 0" class="empty-state">
      <q-icon name="shopping_bag" size="2.2rem" />
      <h2>還沒有訂單</h2>
      <p>準備好了的話，下一件屬於駝客的紀念品正在等你</p>
      <router-link to="/" class="primary-button">探索商品</router-link>
    </div>

    <div v-else class="order-list">
      <article v-for="order in orders" :key="order.id" class="order-card">
        <div class="card-top">
          <div class="status" :class="order.delivered ? 'delivered' : 'pending'">
            <q-icon :name="order.delivered ? 'check_circle' : 'schedule'" />
            {{ order.delivered ? '已完成交付' : '準備中' }}
          </div>
          <canvas
            :ref="(el) => setQrRef(order.id, el)"
            class="qr-thumb"
            :aria-label="`訂單 ${shortId(order.id)} 的 QR code，掃描可查看明細`"
          />
        </div>

        <div class="order-main">
          <div>
            <p class="order-date"><span class="num">{{ formatDate(order.createdAt) }}</span></p>
            <h2>訂單 <span class="num">#{{ shortId(order.id) }}</span></h2>
            <p class="item-summary">{{ itemSummary(order.items) }}</p>
          </div>
          <strong class="price"><span class="currency">NT$</span><span class="num">{{ order.finalTotal }}</span></strong>
        </div>

        <div class="order-actions">
          <router-link :to="`/orders/${order.id}`">查看明細</router-link>
          <button type="button" class="delete-button" @click="confirmDelete(order.id)">刪除訂單</button>
        </div>
      </article>
    </div>

    <button type="button" class="feedback-link" @click="openSurvey">分享使用心得</button>
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'
import QRCode from 'qrcode'
import { useToastStore } from 'src/stores/toast'
import { deleteOrderById, fetchBuyerOrders, formatOrderDate } from 'src/services/orderService'

const toast = useToastStore()
const orders = ref([])
const loading = ref(true)
const qrRefs = new Map()

function setQrRef(id, el) {
  if (el) qrRefs.set(id, el)
}

async function renderQrs() {
  for (const order of orders.value) {
    const canvas = qrRefs.get(order.id)
    if (!canvas) continue
    const url = `${window.location.origin}/orders/${order.id}`
    try {
      await QRCode.toCanvas(canvas, url, {
        width: 112,
        margin: 0,
        color: { dark: '#1d1d1f', light: '#00000000' }
      })
    } catch (error) {
      console.error(error)
    }
  }
}

async function loadOrders() {
  loading.value = true
  try {
    orders.value = await fetchBuyerOrders()
  } catch (error) {
    console.error(error)
    toast.show('目前無法載入訂單，請稍後再試。')
  } finally {
    loading.value = false
  }
  await nextTick()
  renderQrs()
}

onMounted(loadOrders)

function formatDate(timestamp) { return formatOrderDate(timestamp) }
function shortId(id) { return String(id).slice(-8).toUpperCase() }
function itemSummary(items) {
  const count = items.reduce((total, item) => total + item.quantity, 0)
  const names = items.map((item) => item.name).slice(0, 2).join('、')
  return `${count} 件商品 · ${names}${items.length > 2 ? '…' : ''}`
}
function openSurvey() { window.open('https://forms.gle/Grnk7FXfrXDQutE87', '_blank') }

async function confirmDelete(orderId) {
  if (!window.confirm('確定要刪除這筆訂單嗎？刪除後無法復原。')) return
  try {
    await deleteOrderById(orderId)
    orders.value = orders.value.filter((order) => order.id !== orderId)
    toast.show('訂單已刪除。')
  } catch {
    toast.show('目前無法刪除訂單，請稍後再試。')
  }
}
</script>

<style scoped>
@import 'src/css/orderspage.scss';
</style>