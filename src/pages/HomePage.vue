<template>
  <div style="padding: 20px">
    <div class="combo-panel">
      <h2 style="margin: 0 0 15px 0; text-align: center">🎁 套餐優惠</h2>
      <p style="text-align: center; margin-bottom: 20px; color: #0000009f">
        各品項加入購物車後將會自動計算最佳組合並折扣
      </p>
      <p class="promo-banner">
        滿$1000即贈送徽章或鑰匙圈 1 個
        <br>
        限時優惠，只到12月5日
      </p>
      <div class="combo-cards">
        <div
          v-for="combo in comboDeals"
          :key="combo.id"
          class="combo-card"
        >
          <div style="font-weight: bold; margin-bottom: 5px">{{ combo.name }}</div>
          <div style="font-size: 0.9rem; opacity: 0.9">
            包含：{{ combo.items.map((no) => products.find((p) => p.no === no)?.category).join(' + ') }}
            <div
              v-if="combo.note"
              style="margin-top: 5px; font-size: 0.85rem; color: #555"
            >
              ({{ combo.note }})
            </div>
          </div>
          <div style="margin-top: 8px">
            <span style="text-decoration: line-through; opacity: 0.7">${{ combo.originalPrice }}</span>
            <span style="margin-left: 10px; font-weight: bold; font-size: 1.1rem">${{ combo.comboPrice }}</span>
            <span style="margin-left: 10px; color: #ffc400ff">省${{ combo.showdiscount }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="product-grid">
      <div
        v-for="product in products"
        :key="product.id"
        class="product-card"
      >
        <div style="font-size: 1.2rem; font-weight: bold; margin-bottom: 8px">{{ product.name }}</div>
        <div style="color: #555; margin-bottom: 12px">
          <div
            v-if="product.orPrice && product.orPrice !== 50"
            style="text-decoration: line-through; opacity: 0.7"
          >
            ${{ product.orPrice }}
          </div>
          <div style="text-align: center">${{ product.price }}</div>
        </div>
        <div class="product-image-wrap">
          <img
            :src="`/images/product-${product.textid}.png`"
            :alt="product.name"
          >
        </div>
        <button
          type="button"
          class="view-btn"
          @click="$router.push(`/product/${product.textid}`)"
        >
          查看
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { products, comboDeals } from 'src/data/catalog'
</script>

<style scoped>
.combo-panel {
  margin-bottom: 30px;
  padding: 25px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: black;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.promo-banner {
  text-align: center;
  margin-bottom: 20px;
  background: #ffe7e7ff;
  border: 1px solid #ff0000ff;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  color: #a10d0dff;
  padding: 15px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  min-width: 200px;
}

.combo-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}

.combo-card {
  background: rgba(255, 255, 255, 0.73);
  padding: 15px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  min-width: 200px;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding-bottom: 40px;
}

.product-card {
  width: 220px;
  padding: 16px;
  border-radius: 12px;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-image-wrap {
  width: 200px;
  height: 200px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  overflow: hidden;
}

.product-image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.view-btn {
  padding: 8px 16px;
  background: linear-gradient(90deg, #ff512f 0%, #dd2476 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 0.9rem;
  cursor: pointer;
  min-width: 70px;
}
</style>
