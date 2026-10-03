// Printable receipts. Each builder returns a full HTML document for printHtml().
import { escapeHtml as escapeText } from 'shared/format'
import { countItems, formatOrderDate, getOrderClass } from 'src/utils/orders'

// Escaped text for the receipt; missing values print as a dash.
function escapeHtml(value) {
  return escapeText(value ?? '—')
}

// Opens the document in a new window and starts printing (users pick
// "Save as PDF" there). Returns false when the popup was blocked.
export function printHtml(html) {
  const printWindow = window.open('', '_blank')
  if (!printWindow) return false

  try {
    printWindow.document.write(html)
    printWindow.document.close()
    printWindow.focus()
    window.setTimeout(() => printWindow.print(), 300)
    return true
  } catch (error) {
    printWindow.close()
    throw error
  }
}

function page(title, style, body) {
  return `<!doctype html><html lang="zh-Hant"><head><meta charset="utf-8"><title>${escapeHtml(title)}</title>
    <style>* { box-sizing: border-box; } body { margin: 0; color: #111; font-family: 'Noto Sans TC', 'Microsoft JhengHei', Arial, sans-serif; } ${style}</style>
    </head><body>${body}<script>window.onafterprint = () => window.close()<\/script></body></html>`
}

// Two-copy pickup receipt (council copy + customer copy) for one order.
export function buildOrderReceiptHtml(order) {
  const customerRows = [
    ['姓名', order.customerName],
    ['電話', order.customerPhone],
    ['Email', order.customerEmail],
    ['學校', order.school],
    order.office ? ['辦公室', order.office] : ['班級', getOrderClass(order)],
    ['座號', order.number]
  ]
    .map(([label, value]) => `<p><b>${label}：</b>${escapeHtml(value || undefined)}</p>`)
    .join('')

  const itemRows = (order.items || [])
    .map((item) => `
      <tr>
        <td>${escapeHtml(item.name)}</td>
        <td>NT$ ${escapeHtml(item.price)}</td>
        <td>${escapeHtml(item.quantity)}</td>
        <td>NT$ ${escapeHtml(Number(item.price) * Number(item.quantity))}</td>
      </tr>`)
    .join('')

  const makeCopy = (copyLabel) => `
    <section class="receipt-copy">
      <header>
        <div><p>建國中學班聯會</p><h1>紀念品領取收據</h1></div>
        <strong>${copyLabel}</strong>
      </header>
      <div class="meta"><span>訂單編號：${escapeHtml(order.id)}</span><span>訂購日期：${escapeHtml(formatOrderDate(order.createdAt))}</span></div>
      <h2>顧客資料</h2><div class="customer">${customerRows}</div>
      <h2>購買明細</h2>
      <table><thead><tr><th>品項</th><th>單價</th><th>數量</th><th>小計</th></tr></thead><tbody>${itemRows}</tbody></table>
      <p class="total">應收總額：<b>NT$ ${escapeHtml(order.finalTotal)}</b></p>
      <footer><p>顧客簽名：<span></span></p><p>班聯會工作人員簽名：<span></span></p></footer>
    </section>`

  return page(
    `紀念品領取收據-${order.id}`,
    `@page { size: A4 portrait; margin: 10mm; }
      .receipt-copy { min-height: 132mm; padding: 6mm 7mm; border: 1.5px solid #222; break-inside: avoid; }
      .receipt-copy + .receipt-copy { margin-top: 5mm; border-top: 1px dashed #777; }
      header, .meta, footer { display: flex; justify-content: space-between; align-items: flex-end; gap: 12px; }
      header p { margin: 0 0 2px; font-size: 10pt; font-weight: 600; }
      h1 { margin: 0; font-size: 18pt; letter-spacing: .08em; } header strong { padding: 4px 8px; border: 1px solid #222; font-size: 10pt; }
      .meta { margin: 4mm 0; padding: 2.5mm 0; border-top: 1px solid #222; border-bottom: 1px solid #222; font-size: 9pt; }
      h2 { margin: 3mm 0 2mm; font-size: 10pt; } .customer { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5mm 4mm; font-size: 9pt; }
      .customer p { margin: 0; } table { width: 100%; border-collapse: collapse; font-size: 9pt; } th, td { padding: 1.5mm 2mm; border: 1px solid #555; } th { background: #f0f0f0; } th:not(:first-child), td:not(:first-child) { text-align: right; }
      .total { margin: 2mm 0 0; text-align: right; font-size: 11pt; } footer { margin-top: 6mm; font-size: 10pt; } footer p { margin: 0; } footer span { display: inline-block; width: 48mm; border-bottom: 1px solid #111; }`,
    makeCopy('班聯會留存聯') + makeCopy('顧客收執聯')
  )
}

function buildClassSheet(classOrders) {
  const firstOrder = classOrders[0]
  const sortedOrders = [...classOrders].sort((a, b) =>
    String(a.number || '').localeCompare(String(b.number || ''), 'zh-Hant', { numeric: true })
  )
  const totalAmount = sortedOrders.reduce((sum, order) => sum + Number(order.finalTotal || 0), 0)
  const totalItems = sortedOrders.reduce((sum, order) => sum + countItems(order.items), 0)
  const studentRows = sortedOrders
    .map((order) => {
      const products = (order.items || [])
        .map((item) => `${escapeHtml(item.name)} ×${escapeHtml(item.quantity)}`)
        .join('<br>')
      return `<tr><td>${escapeHtml(order.number)}</td><td>${escapeHtml(order.customerName)}</td><td>${products}</td><td>NT$ ${escapeHtml(order.finalTotal)}</td></tr>`
    })
    .join('')

  const makeCopy = (copyLabel) => `<section class="receipt">
    <header><div><p>建國中學班聯會</p><h1>班級代表領取收據</h1></div><strong>${copyLabel}</strong></header>
    <div class="meta"><span>學校：${escapeHtml(firstOrder.school)}</span><span>班級：${escapeHtml(getOrderClass(firstOrder))}</span><span>訂單數量：${sortedOrders.length} 份</span><span>產生日期：${escapeHtml(formatOrderDate(new Date()))}</span></div>
    <p class="notice">班級代表確認已代為領取下列同班同學的紀念品，並應將商品轉交給各訂購人。</p>
    <table><thead><tr><th>座號</th><th>學生姓名</th><th>訂購品項</th><th>訂單金額</th></tr></thead><tbody>${studentRows}</tbody></table>
    <div class="summary"><span>商品總件數：<b>${totalItems}</b></span><span>訂單總額：<strong>NT$ ${totalAmount}</strong></span></div>
    <footer><p>班級代表簽名：<span></span></p><p>班聯會工作人員簽名：<span></span></p></footer>
  </section>`

  return `<section class="class-sheet">${makeCopy('班聯會留存聯')}${makeCopy('班級代表收執聯')}</section>`
}

// One page (two copies) per school + class, for class representatives who
// pick up everyone's orders. Orders without a class are skipped.
export function buildClassReceiptsHtml(orders) {
  const groups = new Map()
  orders
    .filter((order) => getOrderClass(order))
    .forEach((order) => {
      const key = `${order.school}\u0000${getOrderClass(order)}`
      if (!groups.has(key)) groups.set(key, [])
      groups.get(key).push(order)
    })

  if (!groups.size) return null

  const sheets = [...groups.entries()]
    .sort(([a], [b]) => a.localeCompare(b, 'zh-Hant'))
    .map(([, classOrders]) => buildClassSheet(classOrders))
    .join('')

  return page(
    '所有班級代表領取收據',
    `@page { size: A4 portrait; margin: 12mm; }
      .class-sheet { height: 273mm; break-after: page; page-break-after: always; } .class-sheet:last-child { break-after: auto; page-break-after: auto; }
      .receipt { height: 134mm; padding: 3mm 4mm; border: 1px solid #222; overflow: hidden; } .receipt + .receipt { margin-top: 5mm; border-top: 1px dashed #555; }
      header { display: flex; justify-content: space-between; align-items: flex-end; padding-bottom: 2mm; border-bottom: 1px solid #222; }
      header p { margin: 0 0 1px; font-size: 8pt; font-weight: 600; } h1 { margin: 0; font-size: 14pt; letter-spacing: .06em; } header strong { font-size: 8pt; }
      .meta { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1mm 6mm; margin: 2mm 0; font-size: 8pt; }
      .notice { margin: 2mm 0; padding: 1.5mm; border: 1px solid #555; background: #f5f5f5; font-size: 7pt; }
      table { width: 100%; border-collapse: collapse; font-size: 7.5pt; } th, td { padding: 1mm 1.5mm; border: 1px solid #555; vertical-align: top; } th { background: #f0f0f0; } th:nth-child(1), td:nth-child(1), th:nth-child(4), td:nth-child(4) { text-align: right; white-space: nowrap; }
      .summary { display: flex; justify-content: flex-end; gap: 6mm; margin: 2mm 0; font-size: 8pt; } .summary strong { font-size: 10pt; }
      footer { display: flex; justify-content: space-between; gap: 6mm; margin-top: 5mm; font-size: 8pt; } footer p { margin: 0; } footer span { display: inline-block; width: 48mm; border-bottom: 1px solid #111; }`,
    sheets
  )
}
