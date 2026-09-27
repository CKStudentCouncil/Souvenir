import { SITE_URL } from '../shared/config.js';

const CONTACT_EMAIL = 'ckhssc@gl.ck.tp.edu.tw';

function escapeHtml(value) {
  if (value === null || value === undefined) return '';
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatCurrency(amount) {
  const num = Number(amount) || 0;
  return num.toLocaleString('zh-TW');
}

function formatTaiwanTime(value) {
  const date = value?.toDate ? value.toDate() : new Date(value || Date.now());
  // Cloud Functions run in UTC, so the time zone has to be explicit.
  return date.toLocaleString('zh-TW', { timeZone: 'Asia/Taipei', hour12: false });
}

// Label/value rows. Values must already be escaped.
function infoRows(rows) {
  return rows
    .map(
      ([label, value, style = ''], index) => `
      <tr style="${index === 0 ? '' : 'border-top: 1px solid #f0f0f0;'}">
        <td style="padding: 8px 0; font-size: 13px; color: #6e6e73; width: 90px;">${escapeHtml(label)}</td>
        <td style="padding: 8px 0; font-size: 13px; ${style}">${value}</td>
      </tr>`
    )
    .join('');
}

// Shared page: dark header, body, feedback link and contact footer.
function renderLayout({ title, eyebrow, preheader, body }) {
  return `
    <!DOCTYPE html>
    <html lang="zh-TW">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${escapeHtml(title)}</title>
      <style>
        body { margin: 0; padding: 0; background: #f2f2f2; font-family: -apple-system, BlinkMacSystemFont, Arial, 'PingFang TC', 'Noto Sans TC', 'Microsoft JhengHei', 'Helvetica Neue', sans-serif; color: #1d1d1f; }
        table { border-collapse: collapse; }
        img { border: 0; }
      </style>
    </head>
    <body>
      <!-- preheader: shown in inbox preview, hidden in the email body -->
      <div style="display:none; max-height:0; overflow:hidden; opacity:0;">${escapeHtml(preheader)}</div>

      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background: #f2f2f2; padding: 24px 0;">
        <tr>
          <td align="center">
            <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background: #ffffff; border: 1px solid #e5e5e7; border-radius: 16px; overflow: hidden;">

              <tr>
                <td style="background: #1d1d1f; padding: 24px 28px;">
                  <p style="margin: 0; color: #ffffff; font-size: 13px; letter-spacing: .02em; opacity: .7;">${escapeHtml(eyebrow)}</p>
                  <p style="margin: 6px 0 0; color: #ffffff; font-size: 20px; font-weight: 700;">建中校慶紀念品</p>
                </td>
              </tr>

              <tr>
                <td style="padding: 28px;">
                  ${body}
                </td>
              </tr>

              <tr>
                <td style="padding: 28px; border-top: 1px solid #f0f0f0;">
                  <p style="margin: 0 0 12px; font-size: 14px; font-weight: 700;">需要您的回饋</p>
                  <p style="margin: 0 0 12px; font-size: 13px; color: #6e6e73; line-height: 1.6;">為了讓我們持續改進服務，誠摯邀請您填寫意見反饋表單</p>
                  <table width="100%">
                    <tr>
                      <td align="center">
                        <a href="${SITE_URL}/survey" style="display: inline-block; padding: 10px 24px; background: #1d1d1f; color: #ffffff; text-decoration: none; border-radius: 6px; font-size: 13px; font-weight: 700;">填寫意見反饋</a>
                      </td>
                    </tr>
                  </table>
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

// Order confirmation, with the pickup QR code attached as cid:qrcode.
export function generateEmailHTML(orderId, order) {
  const items = order.items || [];
  const itemRows = items
    .map((item, index) => {
      const subtotal = (Number(item.price) || 0) * (Number(item.quantity) || 0);
      const border = index === items.length - 1 ? 'none' : '1px solid #f0f0f0';
      return `
        <tr>
          <td style="padding: 10px 0; font-size: 14px; border-bottom: ${border};">${escapeHtml(item.name)}</td>
          <td style="padding: 10px 0; font-size: 14px; text-align: center; border-bottom: ${border};">${escapeHtml(item.quantity)}</td>
          <td style="padding: 10px 0; font-size: 14px; text-align: right; border-bottom: ${border};">NT$ ${formatCurrency(subtotal)}</td>
        </tr>`;
    })
    .join('');

  const details = infoRows(
    [
      ['訂單編號', escapeHtml(orderId), "font-family: 'SF Mono', Consolas, monospace;"],
      ['學校', escapeHtml(order.school)],
      order.class ? ['班級', escapeHtml(order.class)] : null,
      order.number ? ['座號', escapeHtml(order.number)] : null,
      order.office ? ['辦公室', escapeHtml(order.office)] : null,
      order.customerName ? ['姓名', escapeHtml(order.customerName)] : null,
      ['訂單時間', escapeHtml(formatTaiwanTime(order.createdAt))]
    ].filter(Boolean)
  );

  const body = `
    <p style="margin: 0 0 4px; font-size: 15px;">親愛的訂購者您好：</p>
    <p style="margin: 0 0 24px; font-size: 14px; color: #6e6e73;">感謝您訂購建中校慶紀念品，以下是您的訂單明細：</p>

    <table width="100%" style="margin-bottom: 24px;">
      ${details}
    </table>

    <p style="margin: 0 0 10px; font-size: 14px; font-weight: 700;">商品清單</p>
    <table width="100%" style="margin-bottom: 16px;">
      <tr style="border-bottom: 1px solid #e5e5e7;">
        <td style="padding: 8px 0; font-size: 12px; color: #6e6e73;">品項</td>
        <td style="padding: 8px 0; font-size: 12px; color: #6e6e73; text-align: center;">數量</td>
        <td style="padding: 8px 0; font-size: 12px; color: #6e6e73; text-align: right;">小計</td>
      </tr>
      ${itemRows}
    </table>

    <table width="100%" style="margin-bottom: 24px;">
      <tr>
        <td style="padding: 10px 0; font-size: 15px; font-weight: 700;">訂單總額</td>
        <td style="padding: 10px 0; font-size: 18px; font-weight: 700; text-align: right;">NT$ ${formatCurrency(order.finalTotal)}</td>
      </tr>
    </table>

    <table width="100%">
      <tr>
        <td align="center" style="padding: 20px; border: 1px dashed #c7c7cc; border-radius: 12px;">
          <p style="margin: 0 0 4px; font-size: 14px; font-weight: 700;">取貨憑證</p>
          <p style="margin: 0 0 16px; font-size: 12px; color: #6e6e73;">請於繳費及取貨時出示此 QR Code 給現場工作人員</p>
          <img src="cid:qrcode" width="140" height="140" alt="訂單 QR Code" style="display: block; margin: 0 auto; border-radius: 8px; background: #ffffff;" />
        </td>
      </tr>
    </table>`;

  return renderLayout({
    title: `訂單確認 - ${orderId}`,
    eyebrow: '訂單確認',
    preheader: `訂單 ${orderId} 已確認，總金額 NT$ ${formatCurrency(order.finalTotal)}`,
    body
  });
}

const NOTIFICATION_LABELS = {
  payment: '繳費通知',
  pickup: '領貨通知',
  both: '繳費暨領貨通知',
  custom: '通知'
};

// Bulk payment / pickup / custom notification.
export function generateOrderNotificationHTML({ type, paymentTime, pickupTime, location, message }) {
  const label = NOTIFICATION_LABELS[type] || NOTIFICATION_LABELS.payment;
  const isCustom = type === 'custom';
  const showPayment = !isCustom && type !== 'pickup';
  const showPickup = !isCustom && type !== 'payment';

  const rows = [
    showPayment ? ['繳費時間', paymentTime] : null,
    showPickup ? ['領貨時間', pickupTime] : null,
    !isCustom ? ['地點', location] : null
  ].filter(Boolean);

  const preheader = isCustom
    ? message.slice(0, 80)
    : rows.map(([rowLabel, value]) => `${rowLabel}：${value}`).join('，');

  const action = showPayment && showPickup ? '繳費與領貨' : showPickup ? '領貨' : '繳費';

  const body = isCustom
    ? `<p style="margin: 0; font-size: 14px; color: #1d1d1f; line-height: 1.7;">${escapeHtml(message).replace(/\n/g, '<br>')}</p>`
    : `
      <p style="margin: 0 0 20px; font-size: 14px; color: #6e6e73; line-height: 1.6;">親愛的訂購者您好，請於以下時間、地點完成${action}：</p>

      <table width="100%" style="margin-bottom: 20px; border: 1px solid #e5e5e7; border-radius: 12px; padding: 4px 14px;" cellpadding="0" cellspacing="0">
        ${infoRows(rows.map(([rowLabel, value]) => [rowLabel, escapeHtml(value), 'font-size: 14px; font-weight: 700;']))}
      </table>

      ${
        message
          ? `<p style="margin: 0 0 4px; font-size: 13px; color: #1d1d1f; font-weight: 700;">說明</p>
             <p style="margin: 0; font-size: 13px; color: #6e6e73; line-height: 1.6;">${escapeHtml(message).replace(/\n/g, '<br>')}</p>`
          : ''
      }`;

  return renderLayout({ title: label, eyebrow: label, preheader, body });
}
