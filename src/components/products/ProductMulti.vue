<template>
  <div class="product-page">
    <div class="product-card">
      <h1 style="margin-bottom: 8px; color: #333">{{ config.title }}</h1>
      <div class="price-block">NT$ {{ config.price }}</div>
      <table class="variant-table">
        <thead>
          <tr>
            <th>樣式</th>
            <th>購買</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="product in config.variants"
            :key="product.id"
          >
            <td>
              <div class="variant-image">
                <img
                  :src="`/images/product-${product.id}.png`"
                  :alt="product.name"
                >
              </div>
              <div style="margin-top: 8px">{{ product.name }}</div>
            </td>
            <td>
              <button
                type="button"
                class="add-btn"
                @click="add(product)"
              >
                加入購物車
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <button
        type="button"
        class="home-btn"
        @click="$router.push('/')"
      >
        回到首頁
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from 'src/stores/cart'
import { useToastStore } from 'src/stores/toast'

defineProps({
  config: { type: Object, required: true }
})

const cart = useCartStore()
const toast = useToastStore()

function add(product) {
  cart.addToCart(product)
  toast.show(`${product.name} 已加入購物車`)
}
</script>

<style scoped>
.product-page {
  min-height: 100vh;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
}

.product-card {
  width: 100%;
  max-width: 600px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.price-block {
  font-size: 1.5rem;
  font-weight: bold;
  color: #dd2476;
  margin-bottom: 24px;
  text-align: center;
}

.variant-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin-bottom: 24px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.variant-table thead tr {
  background: linear-gradient(90deg, #ff512f, #dd2476);
  color: white;
}

.variant-table th,
.variant-table td {
  padding: 12px;
  text-align: center;
}

.variant-image {
  width: 100%;
  max-width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
}

.variant-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.add-btn {
  padding: 8px 16px;
  background: linear-gradient(90deg, #ff512f 0%, #dd2476 100%);
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  min-width: 80px;
}

.home-btn {
  padding: 12px 28px;
  background: linear-gradient(90deg, #ff512f 0%, #dd2476 100%);
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}
</style>
