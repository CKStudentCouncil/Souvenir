import * as XLSX from 'xlsx'
import { taiwanDate } from 'shared/format'
import { getOrderClass, parseOrderDate } from 'src/utils/orders'
import { gradeFromClass, normalizeSchool, taiwanDayStart } from 'src/utils/salesAnalytics'

// Reads a past year's order export (last year's system or this site's 匯出
// Excel) for the analytics archive. Only what the charts need is read: time,
// school, grade, items and amounts. Names, phone numbers, emails, classes and
// seat numbers are never read, so they never leave the browser.

const DAY_MS = 24 * 60 * 60 * 1000
const TAIWAN_OFFSET_MS = 8 * 60 * 60 * 1000
// The sale period ends at the first gap this long; later orders are
// corrections or tests.
const SALE_GAP_DAYS = 14

function taiwanTime(year, month, day, hour, minute, second) {
  return new Date(Date.UTC(year, month - 1, day, hour, minute, second) - TAIWAN_OFFSET_MS)
}

function hour24(hour, meridiem) {
  if (/^(上午|AM)$/i.test(meridiem || '')) return hour % 12
  if (/^(下午|PM)$/i.test(meridiem || '')) return (hour % 12) + 12
  return hour
}

// 建立時間 as written by toLocaleString() in a Taiwanese or English browser
// (2025/11/5 下午1:47:57, 11/5/2025, 1:47:57 PM) or an Excel date, read as
// Taiwan time. Null when it can't be read.
export function parseExportTime(value) {
  if (typeof value === 'number') {
    // Days since 1899-12-30, in the wall-clock time it was typed in.
    return new Date(Math.round((value - 25569) * DAY_MS) - TAIWAN_OFFSET_MS)
  }
  const text = String(value ?? '').trim()
  let match = text.match(/^(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*(上午|下午)?\s*(\d{1,2}):(\d{2})(?::(\d{2}))?/)
  if (match) {
    const [, year, month, day, meridiem, hour, minute, second = 0] = match
    return taiwanTime(+year, +month, +day, hour24(+hour, meridiem), +minute, +second)
  }
  match = text.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4}),?\s*(\d{1,2}):(\d{2})(?::(\d{2}))?\s*(AM|PM)?/i)
  if (match) {
    const [, month, day, year, hour, minute, second = 0, meridiem] = match
    return taiwanTime(+year, +month, +day, hour24(+hour, meridiem), +minute, +second)
  }
  return null
}

function amount(value) {
  return Number(value) || 0
}

// 組合包 such as「套餐A x 1, 套餐B x 2」. PR orders (公關品) aren't combo deals.
function parseCombos(value) {
  const combos = String(value ?? '')
    .split(/[,，]/)
    .map((part) => part.trim().match(/^(.*?)(?:\s*[x×]\s*(\S+))?$/))
    .filter((match) => match && match[1])
    .map(([, name, count]) => ({ name, applicableCount: Number(count) || 1 }))
  return {
    appliedCombos: combos.filter((combo) => !combo.name.includes('公關')),
    prPackageUsed: combos.some((combo) => combo.name.includes('公關'))
  }
}

// One order per 訂單ID row; the item rows below it (merged order cells) belong to it.
function readOrderRows(header, rows) {
  const column = (name) => header.indexOf(name)
  const col = {
    id: column('訂單ID'),
    time: column('建立時間'),
    original: column('訂單原價'),
    combos: column('組合包'),
    discount: column('折扣金額'),
    total: column('訂單總金額'),
    school: column('學校'),
    // Last year: 班級座號 (10102); this site: 班級 (329 or 三數).
    class: column('班級座號') >= 0 ? column('班級座號') : column('班級'),
    item: column('商品名稱'),
    quantity: column('數量'),
    price: column('單價')
  }
  if (col.time < 0 || col.total < 0) {
    throw new Error('檔案缺少「建立時間」或「訂單總金額」欄位')
  }

  const orders = []
  let skipped = 0
  let order = null
  for (const row of rows) {
    if (String(row[col.id] ?? '').trim()) {
      const createdAt = parseExportTime(row[col.time])
      if (!createdAt) {
        skipped += 1
        order = null
        continue
      }
      order = {
        createdAt,
        school: normalizeSchool(row[col.school]),
        grade: gradeFromClass(row[col.class]),
        items: [],
        originalTotal: amount(row[col.original]),
        totalDiscount: amount(row[col.discount]),
        finalTotal: amount(row[col.total]),
        ...parseCombos(row[col.combos])
      }
      orders.push(order)
    }
    const name = String(row[col.item] ?? '').trim()
    if (order && name) {
      order.items.push({ name, quantity: amount(row[col.quantity]), price: amount(row[col.price]) })
    }
  }
  return { orders, skipped }
}

// One of this year's orders (Firestore) in the same shape as the imported
// ones, for saving the year to the archive before its orders are deleted.
export function toArchivedOrder(order) {
  return {
    createdAt: parseOrderDate(order.createdAt),
    school: normalizeSchool(order.school),
    grade: gradeFromClass(getOrderClass(order)),
    items: (order.items || []).map((item) => ({
      name: String(item.name ?? ''),
      quantity: amount(item.quantity),
      price: amount(item.price)
    })),
    originalTotal: amount(order.originalTotal),
    totalDiscount: amount(order.totalDiscount),
    // Kept for the promotion charts; imports don't have it (null).
    giftDiscount: order.giftDiscount == null ? null : amount(order.giftDiscount),
    finalTotal: amount(order.finalTotal),
    // PR orders list 公關品訂單 as their combo; imports leave it out.
    appliedCombos: order.prPackageUsed
      ? []
      : (order.appliedCombos || []).map((combo) => ({
          name: String(combo.name ?? ''),
          applicableCount: Number(combo.applicableCount) || 1
        })),
    prPackageUsed: Boolean(order.prPackageUsed)
  }
}

// First and last day of the sale: from the first order until a gap of
// SALE_GAP_DAYS without orders.
function salePeriod(orders) {
  const days = [...new Set(orders.map((order) => taiwanDate(order.createdAt)))].sort()
  let closeDate = days[0]
  for (const day of days.slice(1)) {
    if ((taiwanDayStart(day) - taiwanDayStart(closeDate)) / DAY_MS > SALE_GAP_DAYS) break
    closeDate = day
  }
  return { openDate: days[0], closeDate }
}

// Orders outside openDate–closeDate (YYYY-MM-DD); the charts count them on the
// first or last day.
export function countOutsidePeriod(orders, openDate, closeDate) {
  const start = taiwanDayStart(openDate)
  const end = taiwanDayStart(closeDate) + DAY_MS
  return orders.filter((order) => order.createdAt < start || order.createdAt >= end).length
}

// { orders, skipped, openDate, closeDate } from the order detail sheet
// (the one with 訂單ID and 商品名稱 columns).
export function readSalesWorkbook(data) {
  let workbook
  try {
    workbook = XLSX.read(data, { type: 'array' })
  } catch {
    throw new Error('無法讀取這個檔案，請選擇訂單匯出的 Excel（.xlsx）')
  }
  for (const sheetName of workbook.SheetNames) {
    const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1, defval: '' })
    const header = (rows[0] || []).map((cell) => String(cell).trim())
    if (!header.includes('訂單ID') || !header.includes('商品名稱')) continue

    const { orders, skipped } = readOrderRows(header, rows.slice(1))
    if (!orders.length) throw new Error('檔案中沒有可匯入的訂單')
    return { orders, skipped, ...salePeriod(orders) }
  }
  throw new Error('找不到訂單明細工作表（需要「訂單ID」與「商品名稱」欄位）')
}
