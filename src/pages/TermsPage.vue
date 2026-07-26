<template>
  <div class="static-page">
    <article class="content-card">
      <p class="eyebrow">User Terms</p>
      <h1 class="text-bold">臺北市立建國高級中學班聯會校慶紀念品訂購系統使用者條款</h1>
      <p class="intro">歡迎您使用臺北市立建國高級中學班聯會校慶紀念品訂購系統（以下簡稱「本系統」）。為保障使用者權益並維護系統運作秩序，請您在使用本系統前，詳閱以下使用者條款。當您使用本系統，即表示您已閱讀、瞭解並同意遵守本條款之所有內容。</p>
      <div class="terms-body">
        <section><h2 class="text-bold">一、個人資料保護</h2>
          <ul>
            <li>本系統可能蒐集、處理、利用您於使用過程中提供之個人資料（如姓名、電子郵件帳號、班級、座號、學號、電話、IP 位址等），僅用於系統管理、使用者識別與功能提供，不會用於其他未經授權之用途。</li>
            <li>您有權就您所提供之個人資料，依《個人資料保護法》行使查詢、閱覽、補充、更正、停止蒐集、處理或使用及刪除等權利，請聯繫系統管理員辦理。</li>
            <li>本系統將採取合理技術與資安管理措施，保護您的個人資料安全，防止未經授權之存取、洩漏或竄改。</li>
          </ul>
        </section>
        <section><h2 class="text-bold">二、使用者責任</h2>
         <ul>
          <li>您應保證所提供之使用者內容不違反中華民國法律、臺北市立建國高級中學學生獎懲規定及臺北市立建國高級中學班聯會內法。</li>
          <li>您不得利用本系統從事任何違法、不當或侵害他人權益之行為。</li>
          <li>您應妥善保管您的帳號及密碼，對於任何經由您的帳號所進行之行為，您應負完全責任。</li>
          <li>若您違反本條款任一項，本系統有權利即停止您的使用權限，您並應自行承擔一切法律責任，並賠償本系統及第三人因此所受之損害。</li>
         </ul>
        </section>
        <section><h2 class="text-bold">三、平台責任免除與內容管理</h2>
          <ul>
            <li>對於任何因使用者提供之內容所生錯誤、遺漏、違法事項或損害，本系統不負任何責任。</li>
            <li>本系統保留隨時審查、移除、限制或封鎖任何違反本條款或相關法規之內容或帳號之權利，無須事先通知。</li>
            <li>如有未經授權之存取、洩漏或竄改本平台之資料庫，本系統將依法追究刑事責任及請求民事賠償。</li>
            <li>本系統對於因不可抗力或非本系統可控制之因素所造成之服務中斷、資料遺失或其他損害，不負任何責任。</li>
          </ul>
        </section>
        <section><h2 class="text-bold">四、條款修改</h2>
          <ul>
            <li>本系統有權隨時修改本使用者條款，並將更新內容公告於系統，標註最後更新日期。</li>
            <li>條款更新後，您繼續使用本系統即視為同意更新內容。如您不同意修改內容，請立即停止使用本系統。</li>
          </ul>
        </section>
        <section><h2 class="text-bold">五、準據法與管轄法院</h2>
          <ul>
            <li>本條款之解釋與適用，悉依中華民國法律為準據法。</li>
            <li>因本條款或使用本系統所生之任何爭議，雙方同意以臺灣臺北地方法院為第一審管轄法院。</li>
          </ul>
        </section>
      </div>
      <p class="updated">最後更新：<span class="num">2026 年 07 月 26 日</span></p>
      <router-link to="/" class="primary-button">回到首頁</router-link>
    </article>
  </div>
</template>

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

.num {
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Noto Sans TC', Arial, sans-serif;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0;
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
  margin: 0 0 18px;
  font-size: clamp(1.6rem, 4.2vw, 2.4rem);
  line-height: 1.4;
  letter-spacing: -.01em;
}

.intro {
  margin-bottom: 36px;
  color: #6e6e73;
  line-height: 1.75;
}

.terms-body section {
  margin: 0;
  padding: 22px 0;
  border-top: 1px solid #e5e5e7;
}

.terms-body h2 {
  margin: 0 0 12px;
  font-size: 1.15rem;
  letter-spacing: -.01em;
  font-weight: 700;
}

.terms-body ul {
  margin: 0;
  padding-left: 1.2rem;
  display: grid;
  gap: 10px;
}

.terms-body li {
  color: #515154;
  line-height: 1.8;
  font-weight: 400;
}

.updated { margin: 30px 0 18px; color: #86868b; font-size: .82rem; }

.primary-button {
  display: inline-block;
  padding: 12px 18px;
  border-radius: 999px;
  background: #1d1d1f;
  color: #fff;
  font-size: .9rem;
  font-weight: 600;
  text-decoration: none;
}

@media (max-width: 600px) {
  .static-page { padding: 48px 16px 64px; }
  .content-card { border-radius: 20px; }
}
</style>