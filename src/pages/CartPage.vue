<template>
  <div class="cart-page">
    <header>
      <p class="eyebrow">你的購物袋</p>
      <h1>快完成了</h1>
      <p>確認想帶走的商品，所有符合資格的優惠都會自動套用</p>
    </header>

    <div v-if="!cart.cartItems.length" class="empty-state">
      <q-icon name="shopping_bag" size="2.4rem" />
      <h2>購物袋裡還沒有商品。</h2>
      <p>挑一件喜歡的紀念品，讓故事繼續陪著你。</p>
      <router-link to="/" class="primary-button">探索商品</router-link>
    </div>

    <div v-else class="cart-layout">
      <section class="items">
        <article v-for="item in cart.cartItems" :key="item.id" class="cart-item">
          <div class="item-info"><h2>{{ item.name }}</h2><p>每件 <span class="num">NT$ {{ item.price }}</span></p></div>
          <div class="quantity"><button type="button" aria-label="減少數量" @click="changeQty(item.id, -1)">−</button><span class="num">{{ item.quantity }}</span><button type="button" aria-label="增加數量" @click="changeQty(item.id, 1)">+</button></div>
          <button type="button" class="remove" @click="cart.removeFromCart(item.id)">移除</button>
        </article>
      </section>

      <aside class="summary">
        <h2>訂單摘要</h2>
        <label v-if="auth.isAdmin" class="pr-option"><input v-model="usePRPackage" type="checkbox"> 以公關品方式建立訂單</label>
        <div v-if="pricing.prPackageApplied" class="saving-note"><strong>已套用公關品訂單。</strong><span>本筆訂單金額已調整為 <span class="num">NT$ 0</span>。</span></div>
        <template v-else>
          <div v-if="pricing.appliedCombos.length" class="saving-note"><strong>好消息，組合優惠已自動套用。</strong><span v-for="combo in pricing.appliedCombos" :key="combo.id">{{ combo.name }} <span class="num">× {{ combo.applicableCount }}</span> · 折 <span class="num">NT$ {{ combo.discount * combo.applicableCount }}</span></span></div>
          <div class="gift-note" :class="{ qualified: pricing.qualifiesForGift && pricing.hasAvailableGift }"><strong>{{ pricing.qualifiesForGift && pricing.hasAvailableGift ? '這份小禮由我們招待。' : '再多一點小驚喜。' }}</strong><span v-if="pricing.qualifiesForGift && pricing.hasAvailableGift">一項符合資格的贈品已自動折抵。</span><span v-else-if="pricing.hasAvailableGift">再選購 <span class="num">NT$ {{ pricing.amountNeededForGift }}</span>，即可享有你選的贈品。</span><span v-else>訂單滿 <span class="num">NT$ 1,000</span>，搭配符合資格的贈品即可享折抵。</span></div>
        </template>
        <div class="totals">
          <div v-if="pricing.totalDiscount || pricing.giftDiscount || pricing.prPackageApplied" class="line muted"><span>商品小計</span><span class="num">NT$ {{ pricing.originalTotal }}</span></div>
          <div v-if="pricing.totalDiscount && !pricing.prPackageApplied" class="line saving"><span>組合優惠</span><span class="num">−NT$ {{ pricing.totalDiscount }}</span></div>
          <div v-if="pricing.giftDiscount" class="line saving"><span>贈品折抵</span><span class="num">−NT$ {{ pricing.giftDiscount }}</span></div>
          <div v-if="pricing.prPackageApplied" class="line saving"><span>公關品折抵</span><span class="num">−NT$ {{ pricing.prPackageDiscount }}</span></div>
          <div class="line total"><strong>總計</strong><strong class="num">NT$ {{ pricing.finalTotal }}</strong></div>
        </div>

        <button v-if="!showCheckout" type="button" class="primary-button" @click="showCheckout = true">確認並填寫資料</button>
        <form v-else class="checkout-form" @submit.prevent="placeOrder">
          <h3>再填幾項資料就完成了。</h3><p>我們會用這些資料與你確認訂單。</p>
          <label>姓名<input v-model="checkout.name" required autocomplete="name"></label>
          <label>Email<input v-model="checkout.email" required type="email" autocomplete="email" class="mono"></label>
          <label>電話<input v-model="checkout.phone" required type="tel" autocomplete="tel" class="mono"></label>
          <label>學校<select v-model="checkout.school" required><option disabled value="">請選擇學校</option><option v-for="school in schools" :key="school" :value="school">{{ school }}</option></select></label>
          <label>班級（選填）<input v-model="checkout.classNumber" placeholder="例如：301-15"></label>
          <label class="remember"><input v-model="rememberMe" type="checkbox">在這台裝置記住我的資料</label>
          <label class="terms-agreement">
            <input v-model="agreedToTerms" type="checkbox">
            我已閱讀並同意
            <router-link
              to="/terms"
              target="_blank"
              rel="noopener"
              class="terms-link"
            >
              使用者條款
            </router-link>
          </label>
          <button
            type="submit"
            class="primary-button"
            :disabled="submitting || !agreedToTerms"
          >{{ submitting ? '正在送出訂單' : '送出訂單' }}</button>
          <button type="button" class="secondary-button" @click="showCheckout = false">回到訂單摘要</button>
        </form>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { schools } from 'src/data/catalog'
import { useAuthStore } from 'src/stores/auth'
import { useCartStore } from 'src/stores/cart'
import { useToastStore } from 'src/stores/toast'
import { submitOrder, setLastSubmittedOrderId } from 'src/services/orderService'
import { calculatePricing } from 'src/utils/pricing'

const cart = useCartStore(); const auth = useAuthStore(); const toast = useToastStore(); const router = useRouter()
const showCheckout = ref(false); const submitting = ref(false); const rememberMe = ref(false); const usePRPackage = ref(false)
const checkout = reactive({ name: '', email: '', phone: '', school: '', classNumber: '' })
const pricing = computed(() => calculatePricing(cart.cartItems, { usePRPackage: usePRPackage.value, isAdmin: auth.isAdmin }))
const agreedToTerms = ref(false)

onMounted(() => { try { rememberMe.value = localStorage.getItem('rememberMeCheckout') === 'true'; if (rememberMe.value) Object.assign(checkout, JSON.parse(localStorage.getItem('checkoutData') || '{}')) } catch {} })
watch(rememberMe, (value) => { localStorage.setItem('rememberMeCheckout', String(value)); if (!value) localStorage.removeItem('checkoutData') })

function changeQty(id, delta) { const item = cart.cartItems.find((entry) => entry.id === id); if (item && item.quantity + delta <= 0) { cart.removeFromCart(id); toast.show('已從購物袋移除商品。'); return } cart.updateQuantity(id, delta) }
async function placeOrder() {
  if (!agreedToTerms.value) {
    toast.show('請先閱讀並同意使用者條款')
    return
  }
  if (!checkout.name.trim() || !checkout.email.trim() || !checkout.phone.trim() || !checkout.school) { toast.show('請先填妥聯絡資料，再送出訂單。'); return }
  if (rememberMe.value) localStorage.setItem('checkoutData', JSON.stringify(checkout))
  submitting.value = true
  try {
    const p = pricing.value
    const result = await submitOrder({ userId: auth.user?.uid || null, isGuestOrder: !auth.user, items: JSON.parse(JSON.stringify(cart.cartItems)), originalTotal: p.originalTotal, finalTotal: p.finalTotal, totalDiscount: p.prPackageApplied ? p.prPackageDiscount : p.totalDiscount + p.giftDiscount, appliedCombos: p.prPackageApplied ? [{ name: '公關品訂單' }] : p.appliedCombos, prPackageUsed: p.prPackageApplied, prPackageDiscount: p.prPackageApplied ? p.prPackageDiscount : 0, isAdminOrder: auth.isAdmin, qualifiesForGift: p.qualifiesForGift && !p.prPackageApplied, giftDiscount: p.giftDiscount, hasAvailableGift: p.hasAvailableGift, totalGiftQuantity: p.totalGiftQuantity, giftUsedInCombo: p.giftUsedInCombo, availableGiftCount: p.availableGiftCount, customerName: checkout.name.trim(), customerPhone: checkout.phone.trim(), customerEmail: checkout.email.trim(), school: checkout.school, classNumber: checkout.classNumber.trim() })
    if (result.status !== 201) throw new Error()
    setLastSubmittedOrderId(result.id); cart.clearCart(); usePRPackage.value = false; agreedToTerms.value = false; toast.show('訂單已送出。'); router.push({ name: 'order-success', query: { id: result.id } })
  } catch { toast.show('訂單尚未送出，請再試一次；購物袋內容會為你保留。') } finally { submitting.value = false }
}
</script>

<style scoped>
.cart-page {
  max-width: 1080px;
  margin: auto;
  padding: 72px 24px 96px;
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
  font-family: 'SF Mono', 'Menlo', 'Consolas', ui-monospace, monospace !important;
  letter-spacing: 0;
}

.eyebrow {
  margin: 0 0 10px;
  color: #6e6e73;
  font-size: .72rem;
  font-weight: 700;
  letter-spacing: .06em;
}

h1 {
  margin: 0 0 10px;
  font-size: clamp(2.2rem, 5.2vw, 3.6rem);
  line-height: 1.25;
  letter-spacing: -.01em;
  font-weight: 700;
}

.cart-page > header > p:last-child {
  margin: 0 0 40px;
  color: #6e6e73;
  line-height: 1.6;
}

.cart-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 48px;
  align-items: start;
}

.items { display: grid; gap: 10px; }

.cart-item {
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: 20px;
  border: 1px solid #e5e5e7;
  border-radius: 16px;
  background: #fff;
}

.item-info h2 { margin: 0 0 5px; font-size: 1rem; font-weight: 600; letter-spacing: 0; }
.item-info p { margin: 0; color: #6e6e73; font-size: .86rem; }

.quantity { display: flex; align-items: center; gap: 12px; }
.quantity button {
  width: 28px;
  height: 28px;
  border: 1px solid #d2d2d7;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
  font-size: 1.1rem;
}

.remove {
  border: 0;
  background: transparent;
  color: #a12622;
  cursor: pointer;
  font: inherit;
  font-size: .82rem;
}

.summary {
  position: sticky;
  top: 76px;
  padding: 24px;
  border: 1px solid #e5e5e7;
  border-radius: 20px;
  background: #fff;
}

.summary h2 { margin: 0 0 20px; font-size: 1.25rem; font-weight: 700; letter-spacing: 0; }

.pr-option {
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #6e6e73;
  font-size: .82rem;
}

.saving-note, .gift-note {
  margin-bottom: 12px;
  padding: 13px;
  display: grid;
  gap: 5px;
  border-radius: 12px;
  font-size: .82rem;
  line-height: 1.55;
}

.saving-note { background: #f3f8ff; color: #134a85; }
.gift-note { background: #f5f5f7; color: #515154; }
.gift-note.qualified { background: #eef9f0; color: #246a38; }

.totals { margin: 20px 0; }
.line { margin: 9px 0; display: flex; justify-content: space-between; font-size: .9rem; }
.muted { color: #86868b; }
.saving { color: #248a43; }

.total {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #e5e5e7;
  color: #1d1d1f;
  font-size: 1.05rem;
}

.primary-button, .secondary-button {
  width: 100%;
  padding: 14px;
  border: 0;
  border-radius: 999px;
  background: #1d1d1f;
  color: #fff;
  cursor: pointer;
  font: 600 .95rem inherit;
  letter-spacing: .01em;
}

.secondary-button { margin-top: 9px; background: #f5f5f7; color: #1d1d1f; }

.checkout-form {
  margin-top: 24px;
  padding-top: 22px;
  border-top: 1px solid #e5e5e7;
}

.checkout-form h3 { margin: 0 0 5px; font-size: 1.12rem; font-weight: 700; letter-spacing: 0; }
.checkout-form > p { margin: 0 0 16px; color: #6e6e73; font-size: .85rem; line-height: 1.6; }

.checkout-form label {
  margin: 12px 0;
  display: grid;
  gap: 6px;
  font-size: .82rem;
  font-weight: 600;
}

.checkout-form input, .checkout-form select {
  width: 100%;
  box-sizing: border-box;
  padding: 11px 12px;
  border: 1px solid #d2d2d7;
  border-radius: 9px;
  background: #fff;
  font: 400 .92rem inherit;
}

.checkout-form .remember { display: flex; align-items: center; gap: 8px; font-weight: 400; }
.checkout-form .remember input { width: auto; }

.empty-state {
  min-height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #6e6e73;
  text-align: center;
  line-height: 1.6;
}

.empty-state h2 { margin: 14px 0 6px; color: #1d1d1f; font-weight: 600; }
.primary-button { display: inline-block; text-align: center; text-decoration: none; }

@media (max-width: 760px) {
  .cart-page { padding: 48px 16px 64px; }
  .cart-layout { grid-template-columns: 1fr; gap: 28px; }
  .summary { position: static; }
  .cart-item { grid-template-columns: 1fr auto; }
  .remove { grid-column: 1 / -1; text-align: left; }
  .empty-state { min-height: 280px; }
}

.terms-agreement {
  display: flex !important;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  font-size: .82rem;
  font-weight: 400;
  line-height: 1.5;
}

.terms-agreement input {
  width: auto !important;
  margin: 0;
  flex-shrink: 0;
}

.terms-link {
  color: #0066cc;
  text-decoration: none;
}

.terms-link:hover {
  text-decoration: underline;
}

.primary-button:disabled {
  opacity: .55;
  cursor: not-allowed;
}
</style>