<template>
  <div class="product-page">
    <router-link to="/" class="back-link">‹ 回到商品系列</router-link>
    <div class="product-detail">
      <div class="image-wrap"><img :src="`/images/product-${config.imageId}.png`" :alt="config.product.name"></div>
      <section class="purchase-panel">
        <p class="eyebrow">CKSC COLLECTION</p>
        <h1>{{ config.product.name }}</h1>
        <p class="price"><del v-if="!config.hideOrPrice">NT$ {{ config.orPrice }}</del> NT$ {{ config.price }}</p>
        <p class="description">一份小小的紀念，裝進校園裡最值得記得的片刻。</p>
        <button type="button" class="primary-button" @click="add">加入購物袋 <q-icon name="add_shopping_cart" /></button>
        <p class="reassurance">符合組合優惠時，將在結帳時自動折抵。</p>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from 'src/stores/cart'
import { useToastStore } from 'src/stores/toast'

const props = defineProps({ config: { type: Object, required: true } })
const cart = useCartStore()
const toast = useToastStore()

function add() {
  cart.addToCart(props.config.product)
  toast.show(`已將「${props.config.product.name}」加入購物袋。`)
}
</script>

<style scoped>
.product-page { max-width: 1120px; margin: auto; padding: 32px 24px 96px; }.back-link { display: inline-block; margin-bottom: 24px; color: #6e6e73; font-size: .9rem; text-decoration: none; }.product-detail { display: grid; grid-template-columns: 1.1fr .9fr; gap: 72px; align-items: center; }.image-wrap { aspect-ratio: 1; overflow: hidden; border-radius: 28px; background: #ececee; }.image-wrap img { width: 100%; height: 100%; object-fit: cover; }.purchase-panel { max-width: 410px; }.eyebrow { margin: 0 0 12px; color: #6e6e73; font-size: .72rem; font-weight: 700; letter-spacing: .12em; } h1 { margin: 0 0 14px; font-size: clamp(2.5rem, 5vw, 4rem); line-height: 1; letter-spacing: -.06em; }.price { margin: 0 0 28px; font-size: 1.25rem; font-weight: 650; }.price del { margin-right: 8px; color: #86868b; font-weight: 400; }.description, .reassurance { color: #6e6e73; line-height: 1.55; }.description { margin-bottom: 32px; }.primary-button { width: 100%; padding: 15px 20px; display: flex; align-items: center; justify-content: center; gap: 8px; border: 0; border-radius: 999px; background: #1d1d1f; color: #fff; cursor: pointer; font: 600 1rem inherit; }.reassurance { margin-top: 14px; font-size: .82rem; text-align: center; } @media (max-width: 700px) { .product-page { padding: 20px 16px 56px; }.product-detail { grid-template-columns: 1fr; gap: 32px; }.image-wrap { border-radius: 20px; } }
</style>
