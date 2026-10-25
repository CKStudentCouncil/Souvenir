import { schools } from 'shared/catalog'
import { SHOP_OPEN_AT } from 'shared/config'
import { taiwanDate } from 'shared/format'
import { getOrderClass, parseOrderDate } from 'src/utils/orders'

// Numbers for the super admin's sales analytics page: this year's orders
// against an imported past year (services/salesArchiveService.js).
//
// Days and hours are Taiwan time wherever the browser is. Taiwan has no
// daylight saving time, so every day is exactly 24 hours.

const HOUR_MS = 60 * 60 * 1000
const DAY_MS = 24 * HOUR_MS
const TAIWAN_OFFSET_MS = 8 * HOUR_MS

export const UNKNOWN_IDENTITY = '未填寫'
export const GRADE_LABELS = ['高一', '高二', '高三']
const IDENTITIES = [...schools, UNKNOWN_IDENTITY]

const SIZE_ORDER = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL']
const SIZE_ALIASES = { XXL: '2XL', XXXL: '3XL', '2L': '2XL', '3L': '3XL', '4L': '4XL', '5L': '5XL' }
// A size at the end of an item name: 衝鋒外套2XL, 黑色帽踢-M, 深藍色短踢-2L.
const SIZE_SUFFIX = /^(.*[^A-Za-z0-9])[-\s]?(XS|S|M|L|XL|XXL|XXXL|[2-5]XL|[2-5]L)$/

// Upper bounds of the order value and items-per-order groups.
const VALUE_BUCKETS = [
  { max: 0, label: 'NT$0' },
  { max: 499, label: '1–499' },
  { max: 999, label: '500–999' },
  { max: 1499, label: '1,000–1,499' },
  { max: 1999, label: '1,500–1,999' },
  { max: 2499, label: '2,000–2,499' },
  { max: 2999, label: '2,500–2,999' },
  { max: Infinity, label: '3,000 以上' }
]
const UNIT_BUCKETS = [
  { max: 1, label: '1 件' },
  { max: 2, label: '2 件' },
  { max: 3, label: '3 件' },
  { max: 4, label: '4 件' },
  { max: 5, label: '5 件' },
  { max: 9, label: '6–9 件' },
  { max: Infinity, label: '10 件以上' }
]

export const KPI_KEYS = ['revenue', 'orders', 'aov', 'units', 'unitsPerOrder', 'comboRate']

// This year's sale opens on SHOP_OPEN_AT; every order in the orders collection belongs to it.
export const OPEN_DATE = taiwanDate(SHOP_OPEN_AT)
export const CURRENT_YEAR = Number(OPEN_DATE.slice(0, 4))

// Midnight in Taiwan at the start of a YYYY-MM-DD date, as a timestamp.
export function taiwanDayStart(isoDate) {
  const [year, month, day] = isoDate.split('-').map(Number)
  return Date.UTC(year, month - 1, day) - TAIWAN_OFFSET_MS
}

// One of the checkout's school options. Free text from older orders counts as
// 其他學校或社會人士; a blank stays blank.
export function normalizeSchool(value) {
  const school = String(value ?? '').trim()
  if (!school || schools.includes(school)) return school
  return '其他學校或社會人士'
}

// 1–3 from a class such as 329, 10102 (class + seat number) or 三數.
export function gradeFromClass(value) {
  const text = String(value ?? '').trim()
  const code = text.match(/^([1-3])\d\d/)
  if (code) return Number(code[1])
  const word = text.match(/^高?([一二三])/)
  return word ? '一二三'.indexOf(word[1]) + 1 : null
}

// { product, size } from an item name; size is null for unsized items.
export function splitItemName(name) {
  const text = String(name ?? '').trim()
  const match = text.match(SIZE_SUFFIX)
  if (!match) return { product: text, size: null }
  return { product: match[1].replace(/[-\s]+$/, ''), size: SIZE_ALIASES[match[2]] || match[2] }
}

// An order reduced to what the charts use. `offset` is the time since the
// campaign's first day began, kept inside the sale period: orders placed
// before the opening (staff) count at the start of day 1, orders after a past
// year's last day at the end of that day.
function toSale(order, campaign) {
  const time = parseOrderDate(order.createdAt)?.getTime() ?? campaign.start
  const offset = Math.min(Math.max(time - campaign.start, 0), campaign.end - campaign.start - 1)
  const items = (order.items || []).map((item) => {
    const quantity = Number(item.quantity) || 0
    return { ...splitItemName(item.name), quantity, amount: quantity * (Number(item.price) || 0) }
  })

  return {
    offset,
    day: Math.floor(offset / DAY_MS) + 1,
    hour: new Date(time + TAIWAN_OFFSET_MS).getUTCHours(),
    identity: normalizeSchool(order.school) || UNKNOWN_IDENTITY,
    grade: order.grade ?? gradeFromClass(getOrderClass(order)),
    total: Number(order.finalTotal) || 0,
    units: items.reduce((sum, item) => sum + item.quantity, 0),
    usedCombo: !order.prPackageUsed && (order.appliedCombos || []).length > 0,
    items
  }
}

// A sale period and its orders. `closeDate` is a past year's last day; the
// live campaign has none and runs up to `now`.
export function buildCampaign({ year, openDate, closeDate = null, orders, now = Date.now() }) {
  const start = taiwanDayStart(openDate)
  const end = closeDate ? taiwanDayStart(closeDate) + DAY_MS : Infinity
  const campaign = { year, openDate, closeDate, start, end, live: !closeDate }
  const sales = orders.map((order) => toSale(order, campaign))
  // How far into its sale period the campaign is.
  const elapsed = closeDate ? end - start : now - start
  const periodDays = closeDate ? Math.round(elapsed / DAY_MS) : Math.floor(elapsed / DAY_MS) + 1
  const lastDay = sales.reduce((max, sale) => Math.max(max, sale.day), 0)

  return { ...campaign, sales, elapsed, days: Math.max(periodDays, lastDay, 1) }
}

function summarize(sales) {
  const orders = sales.length
  const revenue = sales.reduce((sum, sale) => sum + sale.total, 0)
  const units = sales.reduce((sum, sale) => sum + sale.units, 0)
  // Free (NT$0) orders such as PR packages would drag the average down.
  const paying = sales.filter((sale) => sale.total > 0).length

  return {
    revenue,
    orders,
    units,
    aov: paying ? revenue / paying : null,
    unitsPerOrder: orders ? units / orders : null,
    comboRate: orders ? sales.filter((sale) => sale.usedCombo).length / orders : null
  }
}

function groupBy(sales, keyOf) {
  const groups = new Map()
  sales.forEach((sale) => {
    const key = keyOf(sale)
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key).push(sale)
  })
  return groups
}

// Summary per group, for the groups that have orders in either year.
function groupRows(nowSales, pastSales, keyOf, keys, labelOf) {
  const now = groupBy(nowSales, keyOf)
  const past = groupBy(pastSales, keyOf)
  return keys
    .filter((key) => now.has(key) || past.has(key))
    .map((key) => ({
      key,
      label: labelOf(key),
      current: summarize(now.get(key) || []),
      previous: summarize(past.get(key) || [])
    }))
}

// Share of orders in each bucket, by the bucket's upper bound.
function bucketRows(nowSales, pastSales, buckets, valueOf) {
  const shares = (sales) => {
    const counts = buckets.map(() => 0)
    sales.forEach((sale) => {
      counts[buckets.findIndex((bucket) => valueOf(sale) <= bucket.max)] += 1
    })
    return counts.map((count) => ({ count, share: sales.length ? count / sales.length : 0 }))
  }
  const now = shares(nowSales)
  const past = shares(pastSales)
  return buckets.map((bucket, i) => ({ label: bucket.label, current: now[i], previous: past[i] }))
}

function hourShares(sales) {
  const counts = Array(24).fill(0)
  sales.forEach((sale) => {
    counts[sale.hour] += 1
  })
  return counts.map((count) => ({ count, share: sales.length ? count / sales.length : 0 }))
}

// Units and amount (before discounts) per product, best sellers first.
function productRows(sales) {
  const products = new Map()
  sales.forEach((sale) => {
    sale.items.forEach((item) => {
      const row = products.get(item.product) || { label: item.product, units: 0, amount: 0 }
      row.units += item.quantity
      row.amount += item.amount
      products.set(item.product, row)
    })
  })
  return [...products.values()].sort((a, b) => b.units - a.units || b.amount - a.amount)
}

// Each size's share of the sized units (jackets, tees, hoodies).
function sizeRows(nowSales, pastSales) {
  const count = (sales) => {
    const units = {}
    let total = 0
    sales.forEach((sale) => {
      sale.items.forEach((item) => {
        if (!item.size) return
        units[item.size] = (units[item.size] || 0) + item.quantity
        total += item.quantity
      })
    })
    return { units, total }
  }
  const now = count(nowSales)
  const past = count(pastSales)
  const entry = ({ units, total }, size) => ({ count: units[size] || 0, share: total ? (units[size] || 0) / total : 0 })
  return SIZE_ORDER
    .filter((size) => now.units[size] || past.units[size])
    .map((size) => ({ label: size, current: entry(now, size), previous: entry(past, size) }))
}

// Revenue, orders and average order value per day since the opening, plus
// cumulative revenue. Days not reached yet are null so the line stops at today.
function daySeries(campaign, sales, days) {
  const lastDay = sales.reduce((max, sale) => Math.max(max, sale.day), 0)
  const reached = campaign.live ? Math.floor(campaign.elapsed / DAY_MS) + 1 : Math.round(campaign.elapsed / DAY_MS)
  const visible = Math.min(days, Math.max(reached, lastDay))

  const revenue = Array(days).fill(0)
  const orders = Array(days).fill(0)
  const paying = Array(days).fill(0)
  sales.forEach((sale) => {
    const i = sale.day - 1
    if (i >= days) return
    revenue[i] += sale.total
    orders[i] += 1
    if (sale.total > 0) paying[i] += 1
  })

  let running = 0
  const cumulative = revenue.map((value) => (running += value))
  const upToToday = (values) => values.map((value, i) => (i < visible ? value : null))
  return {
    revenue: upToToday(revenue),
    orders: upToToday(orders),
    aov: upToToday(revenue.map((value, i) => (paying[i] ? value / paying[i] : null))),
    cumulative: upToToday(cumulative)
  }
}

// Same time window: both years up to today's day, last year cut at the same
// time of day. Otherwise last year's whole sale period.
function buildTimeline(current, nowSales, previous, pastSales, sameTime) {
  const days = sameTime ? current.days : Math.max(current.days, previous?.days || 0)
  return {
    days,
    dayStart: (campaign, i) => campaign.start + i * DAY_MS,
    current: daySeries(current, nowSales, days),
    previous: previous ? daySeries(previous, pastSales, days) : null
  }
}

// Everything the page shows. basis 'same' compares with the past year up to
// the same day and time of its sale as now (same time window); 'full' with
// its whole sale period.
export function buildReport({ current, previous, basis }) {
  const now = current.sales
  const pastAll = previous ? previous.sales : []
  // This year's sale hasn't run as long as the past year's yet.
  const ongoing = !!previous && current.elapsed < previous.elapsed
  const sameTime = ongoing && basis === 'same'
  const past = sameTime ? pastAll.filter((sale) => sale.offset <= current.elapsed) : pastAll

  const nowSummary = summarize(now)
  const pastSummary = summarize(past)
  const fullSummary = summarize(pastAll)
  const isStudent = (sale) => sale.identity === '建國中學'

  return {
    hasPrevious: !!previous,
    ongoing,
    sameTime,
    kpis: KPI_KEYS.map((key) => ({
      key,
      value: nowSummary[key],
      previous: previous ? pastSummary[key] : null,
      // The past year's whole period, shown under the same-window figure.
      previousFull: sameTime ? fullSummary[key] : null
    })),
    timeline: buildTimeline(current, now, previous, past, sameTime),
    hours: { current: hourShares(now), previous: hourShares(past) },
    identities: groupRows(now, past, (sale) => sale.identity, IDENTITIES, (key) => key)
      .sort((a, b) => b.current.revenue - a.current.revenue || b.previous.revenue - a.previous.revenue),
    grades: groupRows(
      now.filter(isStudent),
      past.filter(isStudent),
      (sale) => sale.grade || 0,
      [1, 2, 3, 0],
      (grade) => GRADE_LABELS[grade - 1] || '無法判斷'
    ),
    values: bucketRows(now, past, VALUE_BUCKETS, (sale) => sale.total),
    units: bucketRows(now, past, UNIT_BUCKETS, (sale) => sale.units),
    products: { current: productRows(now), previous: productRows(past) },
    sizes: sizeRows(now, past)
  }
}

// ---- Formatting ----

const integerFormat = new Intl.NumberFormat('zh-TW', { maximumFractionDigits: 0 })
const compactFormat = new Intl.NumberFormat('zh-TW', { notation: 'compact', maximumFractionDigits: 1 })
const dayFormat = new Intl.DateTimeFormat('zh-TW', {
  timeZone: 'Asia/Taipei',
  month: 'numeric',
  day: 'numeric',
  weekday: 'short'
})

export function formatCurrency(value) {
  return value == null ? '—' : `NT$ ${integerFormat.format(value)}`
}

// Axis ticks: 0, 5000, 1.2萬, 89.2萬.
export function formatCompact(value) {
  return compactFormat.format(value)
}

export function formatCount(value) {
  return value == null ? '—' : integerFormat.format(value)
}

export function formatDecimal(value) {
  return value == null ? '—' : value.toFixed(1)
}

export function formatPercent(value) {
  return value == null ? '—' : `${(value * 100).toFixed(1)}%`
}

// 10/25 週日 for a timestamp, in Taiwan time.
export function formatDay(timestamp) {
  return dayFormat.format(new Date(timestamp))
}
