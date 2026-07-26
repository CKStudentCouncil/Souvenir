<template>
  <div class="static-page">
    <article class="content-card">
      <p class="eyebrow">關於CK Souvenir2.0</p>
      <h1>把校園記憶，變成能帶走的日常</h1>
      <p>此系統由建中班聯會 80 屆團隊製作，為建中整理一個簡單、安心的紀念品訂購方式。</p>
      <p>我們希望每一件校慶紀念品，不只是印著建中的物品，而是能讓你想起人、課堂、球場，或某個很平凡卻很重要的瞬間。</p>
      <p>然此系統仍於開發階段，尚有不足之處，希望各界能提供意見與建議，以利改進。</p>
      <p>如有友校有意願使用此系統，歡迎與開發者聯繫。</p>

      <section class="contact-section">
        <h2>需要協助嗎？</h2>
        <p>有訂購或商品問題，歡迎透過以下方式聯繫我們：</p>
        <ul>
          <li>開發者孫逢邦：<span class="mono">chris20090731@gmail.com</span></li>
          <li>開發者唐盛鈞：<span class="mono">ck11300329@gl.ck.tp.edu.tw</span></li>
          <li>建國中學班聯會：<span class="mono">ckhssc@gl.ck.tp.edu.tw</span></li>
          <li>建中班聯資訊股：<span class="mono">ckscitdivision@gmail.com</span></li>
        </ul>
      </section>

      <section class="team-section">
        <h2>開發團隊</h2>
        <div class="team-member">
          <p class="member-name">孫逢邦 Chris Sun</p>
          <ul>
            <li>建中班聯會 79-2 班代大會副議長</li>
            <li>建中班聯會 80-1 班聯會主席</li>
            <li>建中班聯會 80-2 班代大會議長</li>
          </ul>
        </div>
        <div class="team-member">
          <p class="member-name">唐盛鈞 Jim Tang</p>
          <ul>
            <li>建中班聯會 80-1 資訊股股長</li>
            <li>建中班聯會 80-2 資訊股執行</li>
          </ul>
        </div>
      </section>

      <div class="actions">
        <button type="button" class="primary-button" @click="openSurvey">分享使用心得</button>
        <a href="https://www.instagram.com/cksc.80th/" target="_blank" rel="noopener" class="ghost-button">
          <svg class="ig-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" stroke-width="1.6"/>
            <circle cx="12" cy="12" r="4.4" stroke="currentColor" stroke-width="1.6"/>
            <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor"/>
          </svg>
          Follow Us on Instagram
        </a>
        <router-link to="/" class="secondary-button">回到首頁</router-link>
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

.team-section {
  margin-top: 36px;
  padding-top: 28px;
  border-top: 1px solid #e5e5e7;
  display: grid;
  gap: 20px;
}

.team-section h2 {
  margin: 0 0 8px;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0;
}

.team-member {
  display: grid;
  gap: 6px;
}

.member-name {
  margin: 0;
  color: #1d1d1f;
  font-size: .95rem;
  font-weight: 600;
}

.team-member ul {
  margin: 0;
  padding-left: 1.2rem;
  display: grid;
  gap: 3px;
}

.team-member li {
  color: #6e6e73;
  font-size: .88rem;
  line-height: 1.6;
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

.primary-button, .secondary-button, .ghost-button {
  padding: 12px 18px;
  border: 0;
  border-radius: 999px;
  cursor: pointer;
  font: 600 .9rem inherit;
  text-decoration: none;
  letter-spacing: .01em;
  display: inline-flex;
  align-items: center;
  gap: 7px;
}

.primary-button {
  background: #1d1d1f;
  color: #fff;
}

.secondary-button {
  border: 1px solid #d2d2d7;
  background: #fff;
  color: #1d1d1f;
}

.ghost-button {
  border: 1px solid #d2d2d7;
  background: #fff;
  color: #1d1d1f;
}

.ghost-button:hover {
  color: #1d1d1f;
  background: #f5f5f7;
}

.ig-icon {
  width: 15px;
  height: 15px;
  flex-shrink: 0;
}

@media (max-width: 600px) {
  .static-page { padding: 48px 16px 64px; }
  .content-card { border-radius: 20px; }
}
</style>