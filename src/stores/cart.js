import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { MAX_ITEM_QUANTITY, findPurchasableItem } from 'shared/catalog'

const CART_KEY = 'cksc_guest_cart'

// Rebuilds saved items from the current catalog so a cart saved before a
// price change (or holding a removed product) doesn't show stale data.
function loadFromStorage() {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_KEY) || '[]')
    return saved
      .map((entry) => {
        const product = findPurchasableItem(entry.id)
        const quantity = Math.min(Number(entry.quantity) || 0, MAX_ITEM_QUANTITY)
        return product && quantity > 0 ? { ...product, quantity } : null
      })
      .filter(Boolean)
  } catch {
    return []
  }
}

function saveToStorage(items) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(items))
  } catch {
    /* storage unavailable (private mode): keep the cart in memory only */
  }
}

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref(loadFromStorage())

  watch(
    cartItems,
    (items) => saveToStorage(items),
    { deep: true }
  )

  function addToCart(product) {
    const exists = cartItems.value.find((item) => item.id === product.id)
    if (exists) {
      updateQuantity(product.id, 1)
    } else {
      cartItems.value = [...cartItems.value, { ...product, quantity: 1 }]
    }
  }

  function removeFromCart(id) {
    cartItems.value = cartItems.value.filter((item) => item.id !== id)
  }

  function updateQuantity(id, amount) {
    cartItems.value = cartItems.value
      .map((item) =>
        item.id === id
          ? { ...item, quantity: Math.min(Math.max(item.quantity + amount, 0), MAX_ITEM_QUANTITY) }
          : item
      )
      .filter((item) => item.quantity > 0)
  }

  function clearCart() {
    cartItems.value = []
  }

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  }
})
