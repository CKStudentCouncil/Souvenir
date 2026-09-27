<template>
  <div class="cart-page">
    <header>
      <p class="eyebrow">你的購物袋</p>
      <h1>快完成了</h1>
      <p>確認想帶走的商品，所有符合資格的優惠都會自動套用</p>
    </header>

    <ol v-if="cart.cartItems.length" class="steps" aria-label="結帳步驟">
      <li :class="{ active: !showCheckout, done: showCheckout }">
        <span class="dot" aria-hidden="true"></span>
        <span class="label">商品明細</span>
      </li>
      <li class="track" aria-hidden="true"><span :class="{ filled: showCheckout }"></span></li>
      <li :class="{ active: showCheckout }">
        <span class="dot" aria-hidden="true"></span>
        <span class="label">填寫資料</span>
      </li>
    </ol>

    <div v-if="!cart.cartItems.length" class="empty-state">
      <svg class="empty-icon" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path d="M20 22V17a12 12 0 0 1 24 0v5" stroke="#c7c7cc" stroke-width="2" stroke-linecap="round" />
        <rect x="12" y="22" width="40" height="30" rx="6" stroke="#c7c7cc" stroke-width="2" />
      </svg>
      <h2>購物袋裡還沒有商品</h2>
      <p>挑一件喜歡的紀念品，讓故事繼續陪著你</p>
      <router-link to="/" class="primary-button">探索商品</router-link>
    </div>

    <div v-else class="cart-layout">
      <section class="items">
        <article v-for="item in cart.cartItems" :key="item.id" class="cart-item">
          <div class="item-info">
            <h2>{{ item.name }}</h2>
            <p>每件 <span class="num">NT$ {{ item.price }}</span></p>
          </div>
          <div class="quantity">
            <button type="button" aria-label="減少數量" @click="changeQty(item.id, -1)">−</button>
            <span class="num">{{ item.quantity }}</span>
            <button type="button" aria-label="增加數量" @click="changeQty(item.id, 1)">+</button>
          </div>
          <button type="button" class="icon-button" aria-label="移除商品" title="移除商品" @click="cart.removeFromCart(item.id)">
            <q-icon name="delete_outline" size="18px" />
          </button>
        </article>
      </section>

      <aside class="summary">
        <h2>訂單摘要</h2>

        <label v-if="auth.isAdmin" class="pr-option">
          <input v-model="usePRPackage" type="checkbox"> 以公關品方式建立訂單
        </label>

        <div v-if="pricing.prPackageApplied" class="benefit-note earned">
          <strong>已套用公關品訂單</strong>
          <span>本筆訂單金額已調整為 <span class="num">NT$ 0</span>。</span>
        </div>

        <template v-else>
          <ul v-if="pricing.appliedCombos.length" class="combo-list">
            <li v-for="combo in pricing.appliedCombos" :key="combo.id">
              <q-icon name="check_circle" size="15px" />
              <span class="combo-name">{{ combo.name }} <span class="num">× {{ combo.applicableCount }}</span></span>
              <span class="combo-discount num">−NT$ {{ combo.discount * combo.applicableCount }}</span>
            </li>
          </ul>

          <div class="gift-progress" :class="{ earned: pricing.qualifiesForGift && pricing.hasAvailableGift }">
            <div class="gift-progress-top">
              <q-icon :name="pricing.qualifiesForGift && pricing.hasAvailableGift ? 'redeem' : 'card_giftcard'" size="17px" />
              <strong>{{ pricing.qualifiesForGift && pricing.hasAvailableGift ? '這份小禮由我們招待' : '再多一點小驚喜' }}</strong>
            </div>
            <p v-if="pricing.qualifiesForGift && pricing.hasAvailableGift">一項符合資格的贈品已自動折抵。</p>
            <template v-else-if="pricing.hasAvailableGift">
              <div class="progress-track" aria-hidden="true">
                <div class="progress-fill" :style="{ width: giftProgress + '%' }"></div>
              </div>
              <p>再選購 <span class="num">NT$ {{ pricing.amountNeededForGift }}</span>，即可享有你選的贈品。</p>
            </template>
            <p v-else>訂單滿 <span class="num">NT$ {{ GIFT_THRESHOLD.toLocaleString() }}</span>，搭配符合資格的贈品即可享折抵。</p>
          </div>
        </template>

        <div class="totals">
          <div v-if="pricing.totalDiscount || pricing.giftDiscount || pricing.prPackageApplied" class="line muted">
            <span>商品小計</span><span class="num">NT$ {{ pricing.originalTotal }}</span>
          </div>
          <div v-if="pricing.totalDiscount && !pricing.prPackageApplied" class="line saving">
            <span>組合優惠</span><span class="num">−NT$ {{ pricing.totalDiscount }}</span>
          </div>
          <div v-if="pricing.giftDiscount" class="line saving">
            <span>贈品折抵</span><span class="num">−NT$ {{ pricing.giftDiscount }}</span>
          </div>
          <div v-if="pricing.prPackageApplied" class="line saving">
            <span>公關品折抵</span><span class="num">−NT$ {{ pricing.prPackageDiscount }}</span>
          </div>
          <div class="line total"><strong>總計</strong><strong class="num">NT$ {{ pricing.finalTotal }}</strong></div>
        </div>

        <button v-if="!showCheckout" type="button" class="primary-button" @click="showCheckout = true">確認並填寫資料</button>

        <form v-else class="checkout-form" @submit.prevent="placeOrder">
          <h3>再填幾項資料就完成了。</h3>
          <p>我們會用這些資料與你確認訂單。</p>

          <label>姓名<input v-model="checkout.name" required autocomplete="name" placeholder="請填寫中文本名"></label>
          <label>Email<input v-model="checkout.email" required type="email" autocomplete="email" class="mono"></label>
          <label>電話<input v-model="checkout.phone" required type="tel" autocomplete="tel" class="mono"></label>
          <label>學校
            <select v-model="checkout.school" required>
              <option disabled value="">請選擇學校</option>
              <option v-for="school in schools" :key="school" :value="school">{{ school }}</option>
            </select>
          </label>
          <label v-if="fields.needsOffice">辦公室<input v-model="checkout.office" required placeholder="例：莊三"></label>
          <label v-if="fields.needsClass">班級<input v-model="checkout.class" required placeholder="例：329/三數"></label>
          <label v-if="fields.needsClass">座號<input v-model="checkout.number" required placeholder="例：01"></label>

          <label class="remember"><input v-model="rememberMe" type="checkbox">在這台裝置記住我的資料</label>

          <label class="terms-agreement">
            <input v-model="agreedToTerms" type="checkbox">
            我已閱讀並同意
            <router-link to="/terms" target="_blank" rel="noopener" class="terms-link">使用者條款</router-link>
          </label>
          <label class="terms-agreement">
            <input v-model="agreedToPolicy" type="checkbox">
            我已閱讀並同意
            <router-link to="/policy" target="_blank" rel="noopener" class="terms-link">銷售與退貨條款</router-link>
          </label>

          <button type="submit" class="primary-button" :disabled="submitting || !agreedToTerms || !agreedToPolicy">
            {{ submitting ? '正在送出訂單' : '送出訂單' }}
          </button>
          <button type="button" class="secondary-button" @click="showCheckout = false">回到訂單摘要</button>
        </form>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { GIFT_THRESHOLD, schoolFields, schools } from 'shared/catalog'
import { calculatePricing } from 'shared/pricing'
import { useAuthStore } from 'src/stores/auth'
import { useCartStore } from 'src/stores/cart'
import { useToastStore } from 'src/stores/toast'
import { submitOrder } from 'src/services/orderService'

const REMEMBER_KEY = 'rememberMeCheckout'
const CHECKOUT_DATA_KEY = 'checkoutData'

const cart = useCartStore()
const auth = useAuthStore()
const toast = useToastStore()
const router = useRouter()

const showCheckout = ref(false)
const submitting = ref(false)
const rememberMe = ref(false)
const usePRPackage = ref(false)
const agreedToTerms = ref(false)
const agreedToPolicy = ref(false)
const checkout = reactive({ name: '', email: '', phone: '', school: '', class: '', number: '', office: '' })

const fields = computed(() => schoolFields(checkout.school))

// Shown to the buyer only; the createOrder Cloud Function recalculates it.
const pricing = computed(() =>
  calculatePricing(cart.cartItems, { usePRPackage: usePRPackage.value, isAdmin: auth.isAdmin })
)

const giftProgress = computed(() => {
  const p = pricing.value
  if (!p.hasAvailableGift) return 0
  if (p.qualifiesForGift) return 100
  const threshold = p.originalTotal + (p.amountNeededForGift || 0)
  if (threshold <= 0) return 0
  return Math.min(100, Math.round((p.originalTotal / threshold) * 100))
})

onMounted(() => {
  try {
    rememberMe.value = localStorage.getItem(REMEMBER_KEY) === 'true'
    if (rememberMe.value) Object.assign(checkout, JSON.parse(localStorage.getItem(CHECKOUT_DATA_KEY) || '{}'))
  } catch {
    /* ignore unreadable saved data */
  }
})

watch(rememberMe, (value) => {
  try {
    localStorage.setItem(REMEMBER_KEY, String(value))
    if (!value) localStorage.removeItem(CHECKOUT_DATA_KEY)
  } catch {
    /* storage unavailable */
  }
})

function changeQty(id, delta) {
  const item = cart.cartItems.find((entry) => entry.id === id)
  if (item && item.quantity + delta <= 0) {
    cart.removeFromCart(id)
    toast.show('已從購物袋移除商品。')
    return
  }
  cart.updateQuantity(id, delta)
}

async function placeOrder() {
  if (!agreedToTerms.value) {
    toast.show('請先閱讀並同意使用者條款')
    return
  }
  if (!agreedToPolicy.value) {
    toast.show('請先閱讀並同意銷售與退貨條款')
    return
  }
  if (!checkout.name.trim() || !checkout.email.trim() || !checkout.phone.trim() || !checkout.school) {
    toast.show('請先填妥聯絡資料，再送出訂單。')
    return
  }

  if (rememberMe.value) {
    try {
      localStorage.setItem(CHECKOUT_DATA_KEY, JSON.stringify(checkout))
    } catch {
      /* storage unavailable */
    }
  }

  submitting.value = true
  try {
    const { needsClass, needsOffice } = fields.value
    const orderId = await submitOrder({
      items: cart.cartItems.map(({ id, quantity }) => ({ id, quantity })),
      usePRPackage: usePRPackage.value,
      customerName: checkout.name.trim(),
      customerEmail: checkout.email.trim(),
      customerPhone: checkout.phone.trim(),
      school: checkout.school,
      class: needsClass ? checkout.class.trim() : '',
      number: needsClass ? checkout.number.trim() : '',
      office: needsOffice ? checkout.office.trim() : ''
    })

    cart.clearCart()
    usePRPackage.value = false
    agreedToTerms.value = false
    agreedToPolicy.value = false
    toast.show('訂單已送出。')
    router.push({ name: 'order-success', query: { id: orderId } })
  } catch (error) {
    console.error('Order submission failed:', error)
    // Validation errors from createOrder carry a message meant for the buyer.
    const serverMessage = ['functions/invalid-argument', 'functions/failed-precondition'].includes(error.code)
      ? error.message
      : ''
    toast.show(serverMessage || '訂單尚未送出，請再試一次；購物袋內容會為你保留。')
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
@import 'src/css/cartpage.scss';
</style>
