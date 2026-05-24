<template>
  <div class="product-page">
    <div class="product-card">
      <h1 style="margin-bottom: 16px; color: #333">{{ config.title }}</h1>
      <div class="price-block">
        <div style="text-decoration: line-through; opacity: 0.7">NT$ {{ config.orPrice }}</div>
        早鳥優惠價：NT$ {{ config.price }}
      </div>
      <div class="image-wrap">
        <img
          :src="`/images/product-${config.imageId}.png`"
          :alt="config.title"
        >
      </div>
      <table class="size-table">
        <caption>尺碼表 (cm)</caption>
        <thead>
          <tr>
            <th>尺寸</th>
            <th>衣長</th>
            <th>袖長</th>
            <th>胸寬</th>
            <th>肩寬</th>
            <th>購買</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, idx) in config.sizeData"
            :key="item.size"
            :class="{ 'row-alt': idx % 2 === 0 }"
          >
            <td class="size-cell">{{ item.size }}</td>
            <td>{{ item.length }}</td>
            <td>{{ item.sleeve }}</td>
            <td>{{ item.chest }}</td>
            <td>{{ item.shoulder }}</td>
            <td>
              <button
                type="button"
                class="add-btn"
                @click="add(findVariant(item.productId))"
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

const props = defineProps({
  config: { type: Object, required: true }
})

const cart = useCartStore()
const toast = useToastStore()

function findVariant(productId) {
  return props.config.variants.find((p) => p.id === productId)
}

function add(product) {
  if (!product) return
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
  max-width: 700px;
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

.size-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin-bottom: 24px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.size-table caption {
  caption-side: top;
  margin-bottom: 16px;
  font-weight: bold;
  font-size: 1.1rem;
  color: #444;
}

.size-table thead tr {
  background: linear-gradient(90deg, #ff512f, #dd2476);
  color: white;
}

.size-table th,
.size-table td {
  padding: 12px;
  text-align: center;
}

.row-alt {
  background: #fafafa;
}

.size-cell {
  font-weight: bold;
  color: #333;
}

.add-btn {
  padding: 8px 16px;
  background: linear-gradient(90deg, #ff512f 0%, #dd2476 100%);
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  font-size: 0.9rem;
  cursor: pointer;
  min-width: 80px;
}

.home-btn {
  padding: 12px 28px;
  background: linear-gradient(90deg, #ff512f 0%, #dd2476 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
}
</style>
