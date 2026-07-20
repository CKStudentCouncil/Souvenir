<template>
  <div class="product-page">
    <router-link to="/" class="back-link">‹ 回到商品系列</router-link>
    <div class="product-detail">
      <div class="image-wrap"><img :src="`/images/product-${config.imageId}.png`" :alt="config.title"></div>
      <section class="purchase-panel">
        <p class="eyebrow">CKSC COLLECTION</p>
        <h1>{{ config.title }}</h1>
        <p class="price"><del>NT$ {{ config.orPrice }}</del> NT$ {{ config.price }}</p>
        <p class="choose-label">選擇尺寸</p>
        <div class="size-options">
          <button v-for="item in config.sizeData" :key="item.size" type="button" :class="{ selected: selected === item.productId }" @click="selected = item.productId">{{ item.size }}</button>
        </div>
        <button type="button" class="guide-link" @click="showGuide = !showGuide">{{ showGuide ? '收起尺寸表' : '查看尺寸表' }}</button>
        <div v-if="showGuide" class="size-guide">
          <div v-for="item in config.sizeData" :key="item.size"><strong>{{ item.size }}</strong><span> 衣長 {{ item.length }} cm · 胸寬 {{ item.chest }} cm</span></div>
        </div>
        <button type="button" class="primary-button" :disabled="!selected" @click="add">{{ selected ? '加入購物袋' : '請先選擇尺寸' }} <q-icon name="add_shopping_cart" /></button>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from 'src/stores/cart'
import { useToastStore } from 'src/stores/toast'

const props = defineProps({ config: { type: Object, required: true } })
const cart = useCartStore()
const toast = useToastStore()
const selected = ref('')
const showGuide = ref(false)

function add() {
  const product = props.config.variants.find((item) => item.id === selected.value)
  if (!product) return
  cart.addToCart(product)
  toast.show(`已將「${product.name}」加入購物袋。`)
}
</script>

<style scoped>
.product-page { max-width: 1120px; margin: auto; padding: 32px 24px 96px; }.back-link { display: inline-block; margin-bottom: 24px; color: #6e6e73; font-size: .9rem; text-decoration: none; }.product-detail { display: grid; grid-template-columns: 1.1fr .9fr; gap: 72px; align-items: center; }.image-wrap { aspect-ratio: 1; overflow: hidden; border-radius: 28px; background: #ececee; }.image-wrap img { width: 100%; height: 100%; object-fit: cover; }.purchase-panel { max-width: 430px; }.eyebrow { margin: 0 0 12px; color: #6e6e73; font-size: .72rem; font-weight: 700; letter-spacing: .12em; } h1 { margin: 0 0 14px; font-size: clamp(2.5rem, 5vw, 4rem); line-height: 1; letter-spacing: -.06em; }.price { margin: 0 0 28px; font-size: 1.25rem; font-weight: 650; }.price del { margin-right: 8px; color: #86868b; font-weight: 400; }.choose-label { margin-bottom: 10px; font-weight: 650; }.size-options { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px; }.size-options button { min-width: 54px; padding: 11px; border: 1px solid #d2d2d7; border-radius: 10px; background: #fff; color: #1d1d1f; cursor: pointer; font: inherit; }.size-options button.selected { border-color: #1d1d1f; background: #1d1d1f; color: #fff; }.guide-link { padding: 0; border: 0; background: transparent; color: #06c; cursor: pointer; font: inherit; font-size: .88rem; }.size-guide { margin: 14px 0; padding: 14px; border-radius: 12px; background: #f5f5f7; color: #6e6e73; font-size: .82rem; line-height: 1.8; }.size-guide strong { color: #1d1d1f; }.primary-button { width: 100%; margin-top: 26px; padding: 15px 20px; display: flex; align-items: center; justify-content: center; gap: 8px; border: 0; border-radius: 999px; background: #1d1d1f; color: #fff; cursor: pointer; font: 600 1rem inherit; }.primary-button:disabled { background: #d2d2d7; cursor: not-allowed; } @media (max-width: 700px) { .product-page { padding: 20px 16px 56px; }.product-detail { grid-template-columns: 1fr; gap: 32px; }.image-wrap { border-radius: 20px; } }
</style>
