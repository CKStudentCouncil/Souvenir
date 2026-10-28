import { SITE_URL } from '../shared/config.js';
import { CONTACT_EMAIL } from './emailTemplates.js';

// Survey invitation sent to every buyer from the survey results page. Its own
// page rather than emailTemplates.js's shared layout: the survey link is the
// whole message, so the layout's feedback block would only repeat it.
export function generateSurveyInvitationHTML() {
  const surveyUrl = `${SITE_URL}/survey`;

  return `
    <!DOCTYPE html>
    <html lang="zh-TW">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>意見反饋問卷</title>
      <style>
        body { margin: 0; padding: 0; background: #f2f2f2; font-family: -apple-system, BlinkMacSystemFont, Arial, 'PingFang TC', 'Noto Sans TC', 'Microsoft JhengHei', 'Helvetica Neue', sans-serif; color: #1d1d1f; }
        table { border-collapse: collapse; }
      </style>
    </head>
    <body>
      <!-- preheader: shown in inbox preview, hidden in the email body -->
      <div style="display:none; max-height:0; overflow:hidden; opacity:0;">誠摯邀請您花幾分鐘填寫建中校慶紀念品意見反饋問卷</div>

      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background: #f2f2f2; padding: 24px 0;">
        <tr>
          <td align="center">
            <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background: #ffffff; border: 1px solid #e5e5e7; border-radius: 16px; overflow: hidden;">

              <tr>
                <td style="background: #1d1d1f; padding: 24px 28px;">
                  <p style="margin: 0; color: #ffffff; font-size: 13px; letter-spacing: .02em; opacity: .7;">意見反饋問卷</p>
                  <p style="margin: 6px 0 0; color: #ffffff; font-size: 20px; font-weight: 700;">建中校慶紀念品</p>
                </td>
              </tr>

              <tr>
                <td style="padding: 28px;">
                  <p style="margin: 0 0 4px; font-size: 15px;">親愛的訂購者您好：</p>
                  <p style="margin: 0 0 24px; font-size: 14px; color: #6e6e73; line-height: 1.7;">感謝您訂購2026年建中校慶紀念品！為使來年校慶紀念品訂購系統更加完善，誠摯邀請您花幾分鐘填寫意見反饋問卷。問卷所蒐集之資訊僅做為系統改善使用，您的寶貴意見將幫助我們把系統做得更好。</p>

                  <table width="100%">
                    <tr>
                      <td align="center">
                        <a href="${surveyUrl}" style="display: inline-block; padding: 12px 28px; background: #1d1d1f; color: #ffffff; text-decoration: none; border-radius: 6px; font-size: 14px; font-weight: 700;">填寫意見反饋</a>
                      </td>
                    </tr>
                  </table>

                  <p style="margin: 16px 0 0; font-size: 12px; color: #8e8e93; line-height: 1.6; text-align: center;">若按鈕無法開啟，請複製以下網址至瀏覽器：<br>${surveyUrl}</p>
                </td>
              </tr>

              <tr>
                <td style="padding: 20px 28px; border-top: 1px solid #f0f0f0; background: #fafafa;">
                  <p style="margin: 0; font-size: 12px; color: #8e8e93; line-height: 1.6;">如有任何問題，歡迎寄信至 ${CONTACT_EMAIL} 聯繫我們，並請勿回復本自動寄送之郵件。</p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}
