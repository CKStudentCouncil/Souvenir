<template>
  <div class="product-page">
    <div class="product-card">
      <h1 style="margin-bottom: 8px; color: #333">{{ config.product.name }}</h1>
      <div class="price-block">
        <div
          v-if="!config.hideOrPrice"
          style="text-decoration: line-through; opacity: 0.7"
        >
          NT$ {{ config.orPrice }}
        </div>
        <template v-if="!config.hideOrPrice">早鳥優惠價：</template>
        NT$ {{ config.price }}
      </div>
      <div class="image-wrap">
        <img
          :src="`/images/product-${config.imageId}.png`"
          :alt="config.product.name"
        >
      </div>
      <button
        type="button"
        class="add-btn-lg"
        @click="add"
      >
        加入購物車
      </button>
      <button
        type="button"
        class="home-btn-muted"
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

const props = defineProps({
  config: { type: Object, required: true }
})

const cart = useCartStore()
const toast = useToastStore()

function add() {
  cart.addToCart(props.config.product)
  toast.show(`${props.config.product.name} 已加入購物車`)
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

.image-wrap {
  width: 100%;
  max-width: 300px;
  height: 300px;
  margin-bottom: 24px;
  border-radius: 12px;
  overflow: hidden;
}

.image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.add-btn-lg {
  padding: 12px 24px;
  background: linear-gradient(90deg, #ff512f 0%, #dd2476 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 20px;
  min-width: 140px;
}

.home-btn-muted {
  padding: 12px 28px;
  background: #f5f5f5;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
}
</style>
