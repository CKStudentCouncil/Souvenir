<template>
  <div class="coming-soon">
    <p class="eyebrow">CK Souvenir</p>
    <h1>Coming Soon</h1>
  </div>
</template>

<style scoped>
/*
  排版統一原則（與其他頁面共用同一套邏輯）：
  1. 字體堆疊涵蓋中英文，避免中文落回系統預設字體造成字重不一致。
  2. h1 原本 -.07em 是拉丁大字重排版技巧，套在中文上會擠字，收斂到接近 0，
     字級也調降一階避免大螢幕下標題塞不下、行高擠壓。
  3. 補上中文段落行距，原本沒設定會偏擠。
*/

.coming-soon {
  min-height: calc(100vh - 56px);
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 50% 35%, #fff, #f5f5f7 65%);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'PingFang TC', 'Noto Sans TC',
    'Microsoft JhengHei', 'Helvetica Neue', Arial, sans-serif;
  color: #1d1d1f;
}

.eyebrow {
  margin: 0 0 12px;
  color: #6e6e73;
  font-size: .72rem;
  font-weight: 700;
  letter-spacing: .06em;
}

h1 {
  margin: 0 0 12px;
  font-size: clamp(2.4rem, 6.4vw, 4.4rem);
  line-height: 1.15;
  letter-spacing: -.01em;
  font-weight: 700;
}

.coming-soon > p:last-of-type {
  color: #6e6e73;
  line-height: 1.6;
}

.back-link {
  margin-top: 18px;
  color: #06c;
  text-decoration: none;
}
</style>