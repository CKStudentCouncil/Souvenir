<template>
  <div class="thank-you-page">
    <div class="thank-you-card">
      <div class="thank-you-icon" aria-hidden="true">
        <q-icon name="favorite" />
      </div>
      <p class="eyebrow">CK Souvenir</p>
      <h1 class="text-bold">Thank you</h1>
      <p class="lead">
        本次紀念品預購已於 10/29 23:59:59 結束
        <br />
        謝謝每一位支持 CK Souvenir 的你，讓這段回憶得以延續
      </p>
      <router-link to="/about" class="primary-button">關於我們</router-link>
      <router-link to="/survey" class="secondary-button">填寫意見反饋</router-link>
    </div>
  </div>
</template>

<style scoped>
.thank-you-page {
  min-height: calc(100vh - 56px);
  padding: 48px 24px;
  display: grid;
  place-items: center;
  background: radial-gradient(circle at 50% 25%, #fff, #f5f5f7 65%);
  font-family: -apple-system, BlinkMacSystemFont, 'PingFang TC', 'Noto Sans TC',
    'Microsoft JhengHei', 'Helvetica Neue', Arial, sans-serif;
  color: #1d1d1f;
}

.thank-you-card {
  width: min(460px, 100%);
  text-align: center;
}

.thank-you-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 22px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #fcecef;
  color: #b4234d;
  font-size: 2rem;
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
  font-size: clamp(2.6rem, 8vw, 4rem);
  line-height: 1.1;
  letter-spacing: -.01em;
}

.lead {
  max-width: 360px;
  margin: 0 auto 28px;
  color: #6e6e73;
  line-height: 1.65;
}

.primary-button,
.secondary-button {
  display: block;
  padding: 14px;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
}

.primary-button {
  background: #1d1d1f;
  color: #fff;
}

.secondary-button {
  margin-top: 12px;
  border: 1px solid #e5e5e7;
  background: #f5f5f7;
  color: #1d1d1f;
}
</style>
