// Printable receipts. Each builder returns a full HTML document for printHtml().
import { escapeHtml as escapeText } from 'shared/format'
import { orderPriceLines } from 'shared/pricing'
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

// Each order or class prints on one 210 x 270mm sheet: two copies with a cut
// line between them. Safari lays the page out at A4 width and scales it to the
// paper picked in its print dialog, which leaves about 271mm of A4 height on
// Letter, so 270mm sheets fit one page on A4 and Letter alike. The @page
// margin stays 0 (the sheet padding is the margin), which also keeps Safari
// from adding its own headers and footers.
const SHEET_STYLE = `@page { size: A4 portrait; margin: 0; }
  .sheet { display: flex; flex-direction: column; width: 210mm; height: 270mm; padding: 12mm 14mm; overflow: hidden; break-after: page; page-break-after: always; }
  .sheet:last-child { break-after: auto; page-break-after: auto; }
  .copy { flex: 1 1 0; min-height: 0; overflow: hidden; }
  .cut { display: flex; align-items: center; gap: 3mm; margin: 5mm 0; color: #777; font-size: 8pt; }
  .cut::before, .cut::after { content: ''; flex: 1; border-top: 1px dashed #777; }
  .split { height: auto; padding: 0; } .split .cut { display: none; }
  .split .copy { flex: none; height: 270mm; padding: 12mm 14mm; } .split .copy:first-child { break-after: page; page-break-after: always; }
  .copy.flow { height: auto; overflow: visible; }
  @media screen { body { background: #e5e5e5; } .sheet { margin: 6mm auto; background: #fff; } }`

// Shrinks each copy's content until it fits its half of the sheet. Below 70%
// the text is hard to read, so that sheet puts each copy on its own page instead.
const FIT_SCRIPT = `function fitCopy(copy) {
    const content = copy.firstElementChild
    const overflows = () => copy.scrollHeight > copy.clientHeight + 1
    let zoom = 1
    content.style.zoom = ''
    while (overflows() && zoom > 0.7) {
      zoom = Math.max(0.7, Math.min(zoom - 0.02, zoom * copy.clientHeight / copy.scrollHeight))
      content.style.zoom = zoom
    }
    return !overflows()
  }
  document.querySelectorAll('.sheet').forEach((sheet) => {
    const copies = [...sheet.querySelectorAll('.copy')]
    if (copies.map(fitCopy).every(Boolean)) return
    sheet.classList.add('split')
    copies.forEach((copy) => fitCopy(copy) || copy.classList.add('flow'))
  })`

function page(title, style, body) {
  return `<!doctype html><html lang="zh-Hant"><head><meta charset="utf-8"><title>${escapeHtml(title)}</title>
    <style>* { box-sizing: border-box; } body { margin: 0; color: #111; font-family: 'Noto Sans TC', 'Microsoft JhengHei', Arial, sans-serif; } ${SHEET_STYLE} ${style}</style>
    </head><body>${body}<script>${FIT_SCRIPT}; window.onafterprint = () => window.close()<\/script></body></html>`
}

// One sheet: the two copies of a receipt with a cut line between them.
function sheet(makeCopy, labels) {
  return `<section class="sheet">${labels.map((label) => `<div class="copy"><div>${makeCopy(label)}</div></div>`).join('<div class="cut">✂︎ 沿虛線剪開</div>')}</section>`
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

  const { subtotal, discounts } = orderPriceLines(order)
  const discountRows = discounts.length
    ? [
        `<tr class="sum"><td colspan="3">商品小計</td><td>NT$ ${escapeHtml(subtotal)}</td></tr>`,
        ...discounts.map((line) => `<tr class="sum"><td colspan="3">${escapeHtml(line.label)}</td><td>−NT$ ${escapeHtml(line.amount)}</td></tr>`)
      ].join('')
    : ''

  const makeCopy = (copyLabel) => `
    <header>
      <div><p>建國中學班聯會</p><h1>紀念品領取收據</h1></div>
      <strong>${copyLabel}</strong>
    </header>
    <div class="meta"><span>訂單編號：${escapeHtml(order.id)}</span><span>訂購日期：${escapeHtml(formatOrderDate(order.createdAt))}</span></div>
    <h2>顧客資料</h2><div class="customer">${customerRows}</div>
    <h2>購買明細</h2>
    <table><thead><tr><th>品項</th><th>單價</th><th>數量</th><th>小計</th></tr></thead><tbody>${itemRows}${discountRows}</tbody></table>
    <p class="total">應收總額：<b>NT$ ${escapeHtml(order.finalTotal)}</b></p>
    <footer><p>顧客簽名：<span></span></p><p>班聯會工作人員簽名：<span></span></p></footer>`

  return page(
    `紀念品領取收據-${order.id}`,
    `header, .meta, footer { display: flex; justify-content: space-between; align-items: flex-end; gap: 4mm; }
      header p { margin: 0 0 1mm; font-size: 9pt; font-weight: 600; }
      h1 { margin: 0; font-size: 16pt; letter-spacing: .08em; } header strong { padding: 1mm 2mm; border: 1px solid #222; font-size: 9pt; }
      .meta { margin: 3mm 0; padding: 1.5mm 0; border-top: 1px solid #222; border-bottom: 1px solid #222; font-size: 8.5pt; }
      h2 { margin: 2.5mm 0 1.5mm; font-size: 9.5pt; } .customer { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1mm 4mm; font-size: 8.5pt; }
      .customer p { margin: 0; } table { width: 100%; border-collapse: collapse; font-size: 8.5pt; } th, td { padding: 1mm 2mm; border: 1px solid #555; } th { background: #f0f0f0; } th:not(:first-child), td:not(:first-child) { text-align: right; }
      .sum td:first-child { text-align: right; } .total { margin: 2mm 0 0; text-align: right; font-size: 10.5pt; } footer { margin-top: 5mm; font-size: 9pt; } footer p { margin: 0; } footer span { display: inline-block; width: 45mm; border-bottom: 1px solid #111; }`,
    sheet(makeCopy, ['班聯會留存聯', '顧客收執聯'])
  )
}

function buildClassSheet(classOrders) {
  const firstOrder = classOrders[0]
  const sortedOrders = [...classOrders].sort((a, b) =>
    String(a.number || '').localeCompare(String(b.number || ''), 'zh-Hant', { numeric: true })
  )
  const totalAmount = sortedOrders.reduce((sum, order) => sum + Number(order.finalTotal || 0), 0)
  const totalItems = sortedOrders.reduce((sum, order) => sum + countItems(order.items), 0)
  const studentRow = (order) => {
    const products = (order.items || [])
      .map((item) => `<span>${escapeHtml(item.name)} ×${escapeHtml(item.quantity)}</span>`)
      .join('、')
    return `<tr><td>${escapeHtml(order.number)}</td><td>${escapeHtml(order.customerName)}</td><td>${products}</td><td>NT$ ${escapeHtml(order.finalTotal)}</td></tr>`
  }
  // Past 12 orders the list is split into two side-by-side tables.
  const half = sortedOrders.length > 12 ? Math.ceil(sortedOrders.length / 2) : sortedOrders.length
  const tables = [sortedOrders.slice(0, half), sortedOrders.slice(half)]
    .filter((list) => list.length)
    .map((list) => `<table><thead><tr><th>座號</th><th>姓名</th><th>訂購品項</th><th>金額</th></tr></thead><tbody>${list.map(studentRow).join('')}</tbody></table>`)
    .join('')

  const makeCopy = (copyLabel) => `
    <header><div><p>建國中學班聯會</p><h1>班級代表領取收據</h1></div><strong>${copyLabel}</strong></header>
    <div class="meta"><span>學校：${escapeHtml(firstOrder.school)}</span><span>班級：${escapeHtml(getOrderClass(firstOrder))}</span><span>訂單數量：${sortedOrders.length} 份</span><span>產生日期：${escapeHtml(formatOrderDate(new Date()))}</span></div>
    <p class="notice">班級代表確認已代為領取下列同班同學的紀念品，並應將商品轉交給各訂購人。</p>
    <div class="lists">${tables}</div>
    <div class="summary"><span>商品總件數：<b>${totalItems}</b></span><span>訂單總額：<strong>NT$ ${totalAmount}</strong></span></div>
    <footer><p>班級代表簽名：<span></span></p><p>班聯會工作人員簽名：<span></span></p></footer>`

  return sheet(makeCopy, ['班聯會留存聯', '班級代表收執聯'])
}

// One sheet (two copies) per school + class, for class representatives who
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
