<template>
  <div class="static-page">
    <div class="card">
      <h1>臺北市立建國高級中學班聯會校慶紀念品訂購系統使用者條款</h1>
      <p>歡迎您使用臺北市立建國高級中學班聯會校慶紀念品訂購系統（以下簡稱「本系統」）。為保障使用者權益並維護系統運作秩序，請您在使用本系統前，詳閱以下使用者條款。當您使用本系統，即表示您已閱讀、瞭解並同意遵守本條款之所有內容。</p>
      <h3>一、個人資料保護</h3>
      <ul>
        <li>本系統可能蒐集、處理、利用您於使用過程中提供之個人資料（如姓名、電子郵件帳號、班級、座號、學號、電話、IP 位址等），僅用於系統管理、使用者識別與功能提供，不會用於其他未經授權之用途。</li>
        <li>您有權就您所提供之個人資料，依《個人資料保護法》行使查詢、閱覽、補充、更正、停止蒐集、處理或使用及刪除等權利，請聯繫系統管理員辦理。</li>
        <li>本系統將採取合理技術與資安管理措施，保護您的個人資料安全，防止未經授權之存取、洩漏或竄改。</li>
      </ul>
      <h3>二、使用者責任</h3>
      <ul>
        <li>您應保證所提供之內容不違反中華民國法律及校內相關規定。</li>
        <li>您不得利用本系統從事任何違法、不當或侵害他人權益之行為。</li>
      </ul>
      <h4>最後更新日期：2025/10/10</h4>
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
  margin-top: 16px;
  padding: 12px 28px;
  background: linear-gradient(90deg, #ff512f 0%, #dd2476 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
}
</style>
