import { products as catalogProducts, schools } from 'shared/catalog'
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

export const WEEKDAY_LABELS = ['週一', '週二', '週三', '週四', '週五', '週六', '週日']
export const OTHER_CATEGORY = '其他'
// Categories in the cross-purchase matrix, and in the product mix (the rest
// of the mix folds into 其他).
const BASKET_CATEGORIES = 8
const MIX_CATEGORIES = 7
// Product → category (both keychain designs are 鑰匙圈), categories in catalog order.
const CATEGORY_OF = new Map(catalogProducts.map((product) => [product.name, product.category]))
const CATALOG_CATEGORIES = [...new Set(catalogProducts.map((product) => product.category))]
// Longest first, so a name is matched by the most specific category it contains.
const CATEGORY_WORDS = [...CATALOG_CATEGORIES].sort((a, b) => b.length - a.length)

// This year's category for a product, so other years compare by kind:
// 黑色短踢 → 短踢, CKHS鑰匙圈 → 鑰匙圈. A product that matches none is its own.
export function categoryOf(product) {
  return CATEGORY_OF.get(product) || CATEGORY_WORDS.find((word) => product.includes(word)) || product
}

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
    const { product, size } = splitItemName(item.name)
    return { product, size, category: categoryOf(product), quantity, amount: quantity * (Number(item.price) || 0) }
  })

  const local = new Date(time + TAIWAN_OFFSET_MS)
  const combos = order.prPackageUsed
    ? []
    : (order.appliedCombos || []).map((combo) => String(combo.name ?? '').trim() || '其他組合')

  return {
    // Firestore ID of this year's orders; imported years have none.
    id: order.id ?? null,
    offset,
    day: Math.floor(offset / DAY_MS) + 1,
    hour: local.getUTCHours(),
    // 0 is Monday.
    weekday: (local.getUTCDay() + 6) % 7,
    identity: normalizeSchool(order.school) || UNKNOWN_IDENTITY,
    grade: order.grade ?? gradeFromClass(getOrderClass(order)),
    total: Number(order.finalTotal) || 0,
    // List price before any discount.
    gross: Number(order.originalTotal) || items.reduce((sum, item) => sum + item.amount, 0),
    units: items.reduce((sum, item) => sum + item.quantity, 0),
    pr: Boolean(order.prPackageUsed),
    combos,
    usedCombo: combos.length > 0,
    // Null when the order doesn't record it (imported years).
    gift: order.giftDiscount == null ? null : Number(order.giftDiscount) > 0,
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

// Share of orders in each weekday (rows) and hour (columns).
function weekHourShares(sales) {
  const counts = WEEKDAY_LABELS.map(() => Array(24).fill(0))
  sales.forEach((sale) => {
    counts[sale.weekday][sale.hour] += 1
  })
  return counts.map((row) => row.map((count) => ({ count, share: sales.length ? count / sales.length : 0 })))
}

// Orders using a combo deal (any, none, each by name) and the gift, with their
// share of all orders. The gift is null for a year whose orders don't record it.
function promotionRows(nowSales, pastSales) {
  const usage = new Map()
  ;[nowSales, pastSales].forEach((sales, year) => {
    sales.forEach((sale) => {
      new Set(sale.combos).forEach((name) => {
        const counts = usage.get(name) || [0, 0]
        counts[year] += 1
        usage.set(name, counts)
      })
    })
  })
  const names = [...usage.keys()].sort((a, b) => usage.get(b)[0] - usage.get(a)[0] || usage.get(b)[1] - usage.get(a)[1])

  const groups = [
    { key: 'combo', label: '使用組合優惠', test: (sale) => sale.usedCombo },
    { key: 'none', label: '未使用組合優惠', test: (sale) => !sale.usedCombo },
    ...names.map((name) => ({ key: `combo:${name}`, label: name, test: (sale) => sale.combos.includes(name) })),
    { key: 'gift', label: '滿額贈品', test: (sale) => sale.gift, needsGift: true }
  ]
  const entry = (sales, group) => {
    if (group.needsGift && !sales.some((sale) => sale.gift != null)) return null
    const matched = sales.filter(group.test)
    return { ...summarize(matched), share: sales.length ? matched.length / sales.length : 0 }
  }
  return groups.map((group) => ({
    key: group.key,
    label: group.label,
    current: entry(nowSales, group),
    previous: entry(pastSales, group)
  }))
}

// Discounts against list prices: the amount given and its share of the list price.
function discountSummary(sales) {
  const gross = sales.reduce((sum, sale) => sum + sale.gross, 0)
  const discount = gross - sales.reduce((sum, sale) => sum + sale.total, 0)
  return { gross, discount, rate: gross ? discount / gross : null }
}

// Orders that include each category, and of those, how many include each other category.
function basketStats(sales) {
  const counts = new Map()
  const pairs = new Map()
  sales.forEach((sale) => {
    const bought = [...new Set(sale.items.filter((item) => item.quantity > 0).map((item) => item.category))]
    bought.forEach((a) => {
      counts.set(a, (counts.get(a) || 0) + 1)
      bought.forEach((b) => {
        if (a !== b) pairs.set(`${a}\n${b}`, (pairs.get(`${a}\n${b}`) || 0) + 1)
      })
    })
  })
  return { orders: sales.length, counts, pairs }
}

// By product category, so years with different products compare. Penetration:
// the share of orders that include each category. Cross-purchase: for the
// most-bought categories, the share of orders with one (row) that also include
// another (column), and the lift, how much likelier that is than in orders overall.
function basketReport(nowSales, pastSales) {
  const now = basketStats(nowSales)
  const past = basketStats(pastSales)
  const ranked = (stats) => [...stats.counts.keys()].sort((a, b) => stats.counts.get(b) - stats.counts.get(a))
  const labels = [...new Set([...ranked(now), ...ranked(past)])]

  const penetration = (stats, label) => {
    const count = stats.counts.get(label) || 0
    return { count, share: stats.orders ? count / stats.orders : 0 }
  }
  // Each year's own most-bought categories.
  const matrix = (stats) => {
    const top = ranked(stats).slice(0, BASKET_CATEGORIES)
    return {
      labels: top,
      cells: top.map((a) => top.map((b) => {
        if (a === b) return null
        const base = stats.counts.get(a)
        const count = stats.pairs.get(`${a}\n${b}`) || 0
        const share = count / base
        return { count, base, share, lift: share / penetration(stats, b).share }
      }))
    }
  }

  return {
    products: labels.map((label) => ({ label, current: penetration(now, label), previous: penetration(past, label) })),
    pairs: { current: matrix(now), previous: matrix(past) }
  }
}

// Each group's units by product category, as shares. Categories follow the
// catalog so their colors stay put; past years' other products come after,
// and whatever is past MIX_CATEGORIES folds into 其他.
function mixReport(nowSales, pastSales) {
  const units = new Map()
  ;[...nowSales, ...pastSales].forEach((sale) => {
    sale.items.forEach((item) => {
      units.set(item.category, (units.get(item.category) || 0) + item.quantity)
    })
  })
  const sold = [...units.keys()].filter((category) => units.get(category) > 0)
  const ordered = [
    ...CATALOG_CATEGORIES.filter((category) => sold.includes(category)),
    ...sold.filter((category) => !CATALOG_CATEGORIES.includes(category)).sort((a, b) => units.get(b) - units.get(a))
  ]
  const kept = ordered.slice(0, MIX_CATEGORIES)
  const categories = ordered.length > kept.length ? [...kept, OTHER_CATEGORY] : kept
  const slot = (item) => (kept.includes(item.category) ? item.category : OTHER_CATEGORY)

  const mix = (sales) => {
    const counts = Object.fromEntries(categories.map((category) => [category, 0]))
    sales.forEach((sale) => {
      sale.items.forEach((item) => {
        counts[slot(item)] += item.quantity
      })
    })
    const total = categories.reduce((sum, category) => sum + counts[category], 0)
    return {
      units: total,
      segments: categories.map((category) => ({
        label: category,
        count: counts[category],
        share: total ? counts[category] / total : 0
      }))
    }
  }
  const rows = (now, past, keyOf, keys, labelOf) => {
    const nowGroups = groupBy(now, keyOf)
    const pastGroups = groupBy(past, keyOf)
    return keys
      .filter((key) => nowGroups.has(key) || pastGroups.has(key))
      .map((key) => ({
        key,
        label: labelOf(key),
        current: mix(nowGroups.get(key) || []),
        previous: mix(pastGroups.get(key) || [])
      }))
  }
  const isStudent = (sale) => sale.identity === '建國中學'

  return {
    categories,
    identities: rows(nowSales, pastSales, (sale) => sale.identity, IDENTITIES, (key) => key)
      .sort((a, b) => b.current.units - a.current.units || b.previous.units - a.previous.units),
    grades: rows(
      nowSales.filter(isStudent),
      pastSales.filter(isStudent),
      (sale) => sale.grade || 0,
      [1, 2, 3, 0],
      (grade) => GRADE_LABELS[grade - 1] || '無法判斷'
    )
  }
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
  // The marketing charts leave out PR packages (公關品): they're given away, not bought.
  const nowBought = now.filter((sale) => !sale.pr)
  const pastBought = past.filter((sale) => !sale.pr)

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
    // This year's 建國中學 orders counted as 無法判斷, so they can be looked up.
    ungradedOrderIds: now.filter((sale) => isStudent(sale) && !sale.grade).map((sale) => sale.id),
    values: bucketRows(now, past, VALUE_BUCKETS, (sale) => sale.total),
    units: bucketRows(now, past, UNIT_BUCKETS, (sale) => sale.units),
    products: { current: productRows(now), previous: productRows(past) },
    sizes: sizeRows(now, past),
    weekHours: { current: weekHourShares(nowBought), previous: weekHourShares(pastBought) },
    promotions: promotionRows(nowBought, pastBought),
    discounts: { current: discountSummary(nowBought), previous: discountSummary(pastBought) },
    basket: basketReport(nowBought, pastBought),
    mix: mixReport(nowBought, pastBought)
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
