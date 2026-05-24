<script setup>
function openSurvey() {
  window.open('https://forms.gle/Grnk7FXfrXDQutE87', '_blank')
}
</script>

<template>
  <div class="static-page">
    <div class="card">
      <h1>關於本系統</h1>
      <p>此系統係由建國中學班聯會八十屆上主席暨班級代表大會七十九屆下副議長孫逢邦與班聯會八十屆上行政部門資訊股股長唐盛鈞共同製作。</p>
      <p>本系統主要用於臺北市立建國高級中學班聯會校慶紀念品之訂購，旨在提供各界一個便捷的線上訂購平台，購買本校校慶紀念品。</p>
      <p>聯絡方式：</p>
      <ul>
        <li>主席孫逢邦：chris20090731@gmail.com</li>
        <li>資訊股股長唐盛鈞：ck11300329@gl.ck.tp.edu.tw</li>
        <li>建中班聯會公務信箱：ckhssc@gl.ck.tp.edu.tw</li>
      </ul>
      <button
        type="button"
        class="btn survey"
        @click="openSurvey"
      >
        使用者滿意度調查
      </button>
      <button
        type="button"
        class="btn"
        @click="$router.push('/')"
      >
        回到首頁
      </button>
    </div>
  </div>
</template>

<style scoped>
.static-page {
  min-height: 100vh;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
}

.card {
  width: 100%;
  max-width: 600px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  padding: 30px;
}

.btn {
  display: block;
  width: 100%;
  margin-top: 12px;
  padding: 12px 28px;
  background: linear-gradient(90deg, #ff512f 0%, #dd2476 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
}

.btn.survey {
  background: linear-gradient(90deg, #2f97ff 0%, #7724dd 100%);
}
</style>
