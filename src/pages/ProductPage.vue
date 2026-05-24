<template>
  <ProductSized
    v-if="config?.type === 'sized'"
    :config="config"
  />
  <ProductSimple
    v-else-if="config?.type === 'simple'"
    :config="config"
  />
  <ProductMulti
    v-else-if="config?.type === 'multi'"
    :config="config"
  />
  <div
    v-else
    class="not-found"
  >
    <h2>❌ 找不到商品</h2>
    <button
      type="button"
      class="home-btn"
      @click="$router.push('/')"
    >
      回首頁
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { productPageConfigs } from 'src/data/catalog'
import ProductSized from 'components/products/ProductSized.vue'
import ProductSimple from 'components/products/ProductSimple.vue'
import ProductMulti from 'components/products/ProductMulti.vue'

const route = useRoute()
const config = computed(() => productPageConfigs[route.params.id])
</script>

<style scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #555;
}

.home-btn {
  margin-top: 20px;
  padding: 12px 28px;
  background: linear-gradient(90deg, #ff512f 0%, #dd2476 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
}
</style>
