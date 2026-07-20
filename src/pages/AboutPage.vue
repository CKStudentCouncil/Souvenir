<template>
  <div class="static-page">
    <article class="content-card">
      <p class="eyebrow">關於CK Souvenir2.0</p>
      <h1>把校園記憶，變成能帶走的日常</h1>
      <p>此系統係由建國中學班聯會八十屆上主席暨班級代表大會八十屆下議長暨七十九屆下副議長孫逢邦與班聯會八十屆上行政部門資訊股股長暨八十屆下資訊股執行唐盛鈞共同製作，為校內社群整理一個簡單、安心的紀念品訂購方式。</p>
      <p>我們希望每一件商品，不只是印著校名的物品，而是能讓你想起人、課堂、球場，或某個很平凡卻很重要的午後。</p>
      <p>然此系統仍於開發階段，尚有不足之處，希望各界能提供意見與建議，以利改進。</p>

      <section class="contact-section">
        <h2>需要協助嗎？</h2>
        <p>有訂購或商品問題，歡迎透過以下方式聯繫我們：</p>
        <ul>
          <li>開發者孫逢邦：<span class="mono">chris20090731@gmail.com</span></li>
          <li>開發者唐盛鈞：<span class="mono">ck11300329@gl.ck.tp.edu.tw</span></li>
          <li>建中班聯會：<span class="mono">ckhssc@gl.ck.tp.edu.tw</span></li>
        </ul>
      </section>

      <div class="actions">
        <button type="button" class="primary-button" @click="openSurvey">分享使用心得</button>
        <router-link to="/" class="secondary-button">回到商品</router-link>
      </div>
    </article>
  </div>
</template>

<script setup>
function openSurvey() {
  window.open('https://forms.gle/Grnk7FXfrXDQutE87', '_blank')
}
</script>

<style scoped>
.static-page {
  max-width: 760px;
  min-height: calc(100vh - 56px);
  margin: auto;
  padding: 72px 24px 96px;
  font-family: -apple-system, BlinkMacSystemFont, 'PingFang TC', 'Noto Sans TC',
    'Microsoft JhengHei', 'Helvetica Neue', Arial, sans-serif;
  color: #1d1d1f;
}

.content-card {
  padding: clamp(28px, 6vw, 56px);
  border: 1px solid #e5e5e7;
  border-radius: 28px;
  background: #fff;
}

.eyebrow {
  margin: 0 0 14px;
  color: #6e6e73;
  font-size: .72rem;
  font-weight: 700;
  letter-spacing: .06em;
}

h1 {
  margin: 0 0 28px;
  font-size: clamp(2.2rem, 5.2vw, 3.6rem);
  line-height: 1.3;
  letter-spacing: -.01em;
  font-weight: 700;
}

.content-card > p {
  color: #515154;
  line-height: 1.85;
}

.mono {
  font-family: 'SF Mono', 'Menlo', 'Consolas', ui-monospace, monospace;
  letter-spacing: 0;
  font-size: .95em;
  word-break: break-all;
}

.contact-section {
  margin-top: 36px;
  padding-top: 28px;
  border-top: 1px solid #e5e5e7;
}

.contact-section h2 {
  margin: 0 0 8px;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0;
}

.contact-section p, .contact-section li {
  color: #6e6e73;
  line-height: 1.7;
}

.contact-section ul {
  padding-left: 1.2rem;
  display: grid;
  gap: 4px;
}

.actions {
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.primary-button, .secondary-button {
  padding: 12px 18px;
  border: 0;
  border-radius: 999px;
  background: #1d1d1f;
  color: #fff;
  cursor: pointer;
  font: 600 .9rem inherit;
  text-decoration: none;
  letter-spacing: .01em;
}

.secondary-button {
  border: 1px solid #d2d2d7;
  background: #fff;
  color: #1d1d1f;
}

@media (max-width: 600px) {
  .static-page { padding: 48px 16px 64px; }
  .content-card { border-radius: 20px; }
}
</style>