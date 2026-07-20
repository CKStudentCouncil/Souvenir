<template>
  <div class="coming-soon">
    <p class="eyebrow">建中紀念品</p>
    <h1>我們正在準備中。</h1>
    <p>很快就會在這裡見面。</p>
    <router-link to="/" class="back-link">回到首頁</router-link>
  </div>
</template>

<style scoped>
.coming-soon { min-height: calc(100vh - 56px); padding: 24px; display: flex; flex-direction: column; align-items: center; justify-content: center; background: radial-gradient(circle at 50% 35%, #fff, #f5f5f7 65%); text-align: center; }.eyebrow { margin: 0 0 12px; color: #6e6e73; font-size: .72rem; font-weight: 700; letter-spacing: .12em; } h1 { margin: 0 0 12px; font-size: clamp(3rem, 8vw, 6rem); line-height: .95; letter-spacing: -.07em; }.coming-soon > p:last-of-type { color: #6e6e73; }.back-link { margin-top: 18px; color: #06c; text-decoration: none; }
</style>
