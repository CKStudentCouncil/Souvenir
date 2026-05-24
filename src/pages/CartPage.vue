<template>
  <div class="cart-page">
    <div class="cart-card">
      <h1>購物車</h1>

      <div
        v-if="auth.isAdmin"
        class="admin-badge"
      >
        <img
          :src="auth.user?.photoURL || 'https://via.placeholder.com/48?text=👤'"
          alt=""
          class="admin-avatar"
        >
        <p>Admin-{{ adminDisplayName }}</p>
      </div>

      <div
        v-if="auth.isAdmin && cart.cartItems.length > 0"
        class="pr-package"
      >
        <div>
          <div style="font-weight: bold">管理員專用</div>
          <div style="font-size: 0.9rem; opacity: 0.9">公關品 - 免除所有金額</div>
        </div>
        <label>
          <input
            v-model="usePRPackage"
            type="checkbox"
          >
          使用公關品
        </label>
      </div>

      <p
        v-if="cart.cartItems.length === 0"
        class="empty"
      >
        購物車是空的
      </p>

      <template v-else>
        <div class="cart-items">
          <div
            v-for="item in cart.cartItems"
            :key="item.id"
            class="cart-item"
          >
            <div>
              <p class="item-name">{{ item.name }}</p>
              <p class="item-price">NT$ {{ item.price }}</p>
            </div>
            <div class="qty-controls">
              <button
                type="button"
                @click="changeQty(item.id, -1)"
              >
                -
              </button>
              <span>{{ item.quantity }}</span>
              <button
                type="button"
                @click="changeQty(item.id, 1)"
              >
                +
              </button>
            </div>
            <button
              type="button"
              class="remove-btn"
              @click="cart.removeFromCart(item.id)"
            >
              ✕
            </button>
          </div>
        </div>

        <div
          v-if="pricing.prPackageApplied"
          class="pr-notice"
        >
          <div style="font-weight: bold; color: #667eea">公關品</div>
          <span>僅限公關場合得使用，並應獲得主席之准許</span>
        </div>

        <div
          v-else-if="pricing.appliedCombos.length"
          class="combo-notice"
        >
          <div style="color: #d63384; font-weight: bold">🎉 套餐折扣</div>
          <div
            v-for="combo in pricing.appliedCombos"
            :key="combo.id"
            class="combo-line"
          >
            <span>{{ combo.name }} x {{ combo.applicableCount }}</span>
            <span>- NT$ {{ combo.discount * combo.applicableCount }}</span>
          </div>
        </div>

        <div
          v-if="!pricing.prPackageApplied"
          class="gift-notice"
          :class="{ qualified: pricing.qualifiesForGift && pricing.hasAvailableGift }"
        >
          <div style="font-weight: bold">🎁 滿千好禮</div>
          <div v-if="pricing.qualifiesForGift && pricing.hasAvailableGift">
            🎊 恭喜！您已符合滿千贈禮資格！
          </div>
          <div v-else-if="pricing.reachedThreshold">
            🎉 您已滿 NT$ 1000！
          </div>
          <div v-else>
            活動規則：扣除贈品後仍需滿 NT$ 1000
          </div>
        </div>

        <div class="totals">
          <div
            v-if="pricing.totalDiscount > 0 || pricing.prPackageApplied || pricing.giftDiscount > 0"
          >
            <div class="total-line muted">
              <span>商品小計：</span>
              <span>NT$ {{ pricing.originalTotal }}</span>
            </div>
            <div
              v-if="pricing.totalDiscount > 0 && !pricing.prPackageApplied"
              class="total-line green"
            >
              <span>套餐優惠：</span>
              <span>- NT$ {{ pricing.totalDiscount }}</span>
            </div>
            <div
              v-if="pricing.giftDiscount > 0"
              class="total-line orange"
            >
              <span>滿千贈品：</span>
              <span>- NT$ {{ pricing.giftDiscount }}</span>
            </div>
            <hr>
          </div>
          <div class="total-line final">
            <strong>總金額：</strong>
            <strong>NT$ {{ pricing.finalTotal }}</strong>
          </div>
        </div>

        <div
          v-if="!showCheckout"
          class="checkout-actions"
        >
          <button
            type="button"
            class="btn-primary"
            @click="showCheckout = true"
          >
            填寫結帳資料
          </button>
        </div>

        <form
          v-else
          class="checkout-form"
          @submit.prevent="placeOrder"
        >
          <h2>結帳資料</h2>
          <label>姓名 *</label>
          <input
            v-model="checkout.name"
            required
            type="text"
          >
          <label>Email *</label>
          <input
            v-model="checkout.email"
            required
            type="email"
          >
          <label>電話 *</label>
          <input
            v-model="checkout.phone"
            required
            type="tel"
          >
          <label>學校 *</label>
          <select
            v-model="checkout.school"
            required
          >
            <option
              disabled
              value=""
            >
              請選擇學校
            </option>
            <option
              v-for="s in schools"
              :key="s"
              :value="s"
            >
              {{ s }}
            </option>
          </select>
          <label>班級座號</label>
          <input
            v-model="checkout.classNumber"
            type="text"
            placeholder="例：301-15"
          >
          <div class="remember-me-wrapper">
            <label class="remember-me-label">
              <input
                v-model="rememberMe"
                type="checkbox"
              >
              記住我的結帳資料
            </label>
          </div>
          <button
            type="submit"
            class="btn-primary"
            :disabled="submitting"
          >
            {{ submitLabel }}
          </button>
          <button
            type="button"
            class="btn-secondary"
            @click="showCheckout = false"
          >
            返回購物車
          </button>
        </form>
      </template>

      <button
        type="button"
        class="btn-home"
        @click="$router.push('/')"
      >
        回到首頁
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { doc, getDoc } from 'firebase/firestore'
import { db } from 'src/boot/firebase'
import { useCartStore } from 'src/stores/cart'
import { useAuthStore } from 'src/stores/auth'
import { useToastStore } from 'src/stores/toast'
import { schools } from 'src/data/catalog'
import { calculatePricing } from 'src/utils/pricing'
import { submitOrder, setLastSubmittedOrderId } from 'src/services/orderService'

const cart = useCartStore()
const auth = useAuthStore()
const toast = useToastStore()
const router = useRouter()

const usePRPackage = ref(false)
const showCheckout = ref(false)
const submitting = ref(false)
const adminDisplayName = ref('')
const rememberMe = ref(false)

const checkout = reactive({
  name: '',
  email: '',
  phone: '',
  school: '',
  classNumber: ''
})

const pricing = computed(() =>
  calculatePricing(cart.cartItems, {
    usePRPackage: usePRPackage.value,
    isAdmin: auth.isAdmin
  })
)

const submitLabel = computed(() => {
  if (pricing.value.prPackageApplied) return '送出公關品'
  const saved = pricing.value.totalDiscount + pricing.value.giftDiscount
  if (saved > 0) return `送出訂單 (已省 NT$ ${saved})`
  return '送出訂單'
})

function loadSavedCheckoutData() {
  try {
    // Load checkbox state
    const savedRememberMe = localStorage.getItem('rememberMeCheckout')
    rememberMe.value = savedRememberMe === 'true'
    
    // Load form data only if rememberMe was previously enabled
    if (rememberMe.value) {
      const savedData = localStorage.getItem('checkoutData')
      if (savedData) {
        const data = JSON.parse(savedData)
        checkout.name = data.name || ''
        checkout.email = data.email || ''
        checkout.phone = data.phone || ''
        checkout.school = data.school || ''
        checkout.classNumber = data.classNumber || ''
      }
    }
  } catch (err) {
    console.error('Failed to load saved checkout data:', err)
  }
}

function saveCheckoutData() {
  try {
    const dataToSave = {
      name: checkout.name,
      email: checkout.email,
      phone: checkout.phone,
      school: checkout.school,
      classNumber: checkout.classNumber
    }
    localStorage.setItem('checkoutData', JSON.stringify(dataToSave))
  } catch (err) {
    console.error('Failed to save checkout data:', err)
  }
}

function clearCheckoutData() {
  try {
    localStorage.removeItem('checkoutData')
    checkout.name = ''
    checkout.email = ''
    checkout.phone = ''
    checkout.school = ''
    checkout.classNumber = ''
  } catch (err) {
    console.error('Failed to clear checkout data:', err)
  }
}

onMounted(() => {
  loadSavedCheckoutData()
})

watch(rememberMe, (newVal) => {
  try {
    localStorage.setItem('rememberMeCheckout', String(newVal))
    if (!newVal) {
      clearCheckoutData()
    }
  } catch (err) {
    console.error('Failed to save rememberMe state:', err)
  }
})

watch(
  () => auth.user,
  async (user) => {
    if (!user?.uid) return
    try {
      const userDoc = await getDoc(doc(db, 'users', user.uid))
      if (userDoc.exists()) {
        adminDisplayName.value = userDoc.data().name || user.displayName || user.email
      } else {
        adminDisplayName.value = user.displayName || user.email
      }
    } catch {
      adminDisplayName.value = user.displayName || user.email
    }
  },
  { immediate: true }
)

function changeQty(id, delta) {
  const item = cart.cartItems.find((i) => i.id === id)
  if (item && item.quantity + delta <= 0) {
    cart.removeFromCart(id)
    toast.show('商品已從購物車移除')
    return
  }
  cart.updateQuantity(id, delta)
}

async function placeOrder() {
  if (cart.cartItems.length === 0) {
    toast.show('購物車是空的！')
    return
  }

  const p = pricing.value
  if (p.totalGiftQuantity > 0 && !p.qualifiesForGift) {
    toast.show(`購買金額未滿 NT$ 1000，無法領取贈品！(還差 NT$ ${p.amountNeededForGift})`)
    return
  }

  if (!checkout.name.trim() || !checkout.email.trim() || !checkout.phone.trim() || !checkout.school) {
    toast.show('請完整填寫結帳資料')
    return
  }

  // Save to localStorage if "Remember Me" is checked
  if (rememberMe.value) {
    saveCheckoutData()
  }

  submitting.value = true
  try {
    const orderPayload = {
      userId: auth.user?.uid || null,
      isGuestOrder: !auth.user,
      items: JSON.parse(JSON.stringify(cart.cartItems)),
      originalTotal: p.originalTotal,
      finalTotal: p.finalTotal,
      totalDiscount: p.prPackageApplied ? p.prPackageDiscount : p.totalDiscount + p.giftDiscount,
      appliedCombos: p.prPackageApplied
        ? [{ name: '公關品' }]
        : p.appliedCombos.map((combo) => ({
            id: combo.id,
            name: combo.name,
            items: combo.items,
            applicableCount: combo.applicableCount,
            discountPerSet: combo.discount,
            totalDiscount: combo.discount * combo.applicableCount
          })),
      prPackageUsed: p.prPackageApplied,
      prPackageDiscount: p.prPackageApplied ? p.prPackageDiscount : 0,
      isAdminOrder: auth.isAdmin,
      qualifiesForGift: p.qualifiesForGift && !p.prPackageApplied,
      giftDiscount: p.giftDiscount,
      hasAvailableGift: p.hasAvailableGift,
      totalGiftQuantity: p.totalGiftQuantity,
      giftUsedInCombo: p.giftUsedInCombo,
      availableGiftCount: p.availableGiftCount,
      customerName: checkout.name.trim(),
      customerPhone: checkout.phone.trim(),
      customerEmail: checkout.email.trim(),
      school: checkout.school,
      classNumber: checkout.classNumber.trim()
    }

    const result = await submitOrder(orderPayload)

    if (result.status !== 201) {
      throw new Error('訂單提交失敗')
    }

    setLastSubmittedOrderId(result.id)
    cart.clearCart()
    usePRPackage.value = false
    showCheckout.value = false
    toast.show('訂單已送出！')
    router.push({ name: 'order-success', query: { id: result.id } })
  } catch (err) {
    console.error(err)
    toast.show('送出訂單失敗：' + (err.message || '未知錯誤'))
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.cart-page {
  min-height: 100vh;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
}

.cart-card {
  width: 100%;
  max-width: 800px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  padding: 30px;
}

.cart-card h1 {
  text-align: center;
  color: #333;
  margin: 0 0 24px;
}

.admin-badge {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  margin-bottom: 16px;
}

.admin-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ddd;
}

.pr-package {
  display: flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 20px;
}

.pr-package label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  margin-left: auto;
}

.empty {
  text-align: center;
  color: #555;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  margin-bottom: 12px;
}

.item-name {
  font-weight: bold;
  margin: 0 0 4px;
}

.item-price {
  color: #888;
  margin: 0;
}

.qty-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.qty-controls button {
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.remove-btn {
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  background: rgba(255, 107, 107, 1);
  color: white;
  cursor: pointer;
}

.pr-notice,
.combo-notice,
.gift-notice {
  margin-top: 20px;
  padding: 16px;
  border-radius: 10px;
}

.pr-notice {
  background: linear-gradient(135deg, #667eea20 0%, #764ba220 100%);
  border: 2px solid #667eea;
}

.combo-notice {
  background: #fff0f6;
  border: 1px solid #f9c2d3;
}

.combo-line {
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
}

.gift-notice {
  background: #fff8e1;
  border: 1px solid #ffd54f;
}

.gift-notice.qualified {
  background: linear-gradient(135deg, #ffd89b 0%, #19547b 100%);
  color: white;
  border: 2px solid #f57c00;
}

.totals {
  margin-top: 24px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
  border: 1px solid #e9ecef;
}

.total-line {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.total-line.muted {
  color: #6c757d;
  text-decoration: line-through;
}

.total-line.green {
  color: #28a745;
}

.total-line.orange {
  color: #ff9800;
}

.total-line.final strong:last-child {
  color: #ff512f;
  font-size: 1.3rem;
}

.checkout-form {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.checkout-form h2 {
  margin: 0 0 8px;
  color: #333;
}

.checkout-form label {
  font-weight: 600;
  color: #444;
  font-size: 0.9rem;
}

.checkout-form input,
.checkout-form select {
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  margin-bottom: 8px;
}

.btn-primary {
  margin-top: 12px;
  padding: 15px 20px;
  width: 100%;
  border: none;
  border-radius: 8px;
  background: linear-gradient(90deg, #ff512f 0%, #dd2476 100%);
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
}

.btn-secondary {
  margin-top: 8px;
  padding: 12px;
  width: 100%;
  border: none;
  border-radius: 8px;
  background: #f5f5f5;
  color: #333;
  font-weight: bold;
  cursor: pointer;
}

.btn-home {
  margin-top: 15px;
  width: 100%;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.remember-me-wrapper {
  margin-top: 12px;
  margin-bottom: 12px;
}

.remember-me-label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-weight: normal;
  color: #444;
}

.remember-me-label input[type="checkbox"] {
  cursor: pointer;
  width: auto;
  margin: 0;
}
</style>
