import * as functions from 'firebase-functions'
import { FieldValue } from 'firebase-admin/firestore'
import {
  MAX_ITEM_QUANTITY,
  SCHOOL_CODES,
  findPurchasableItem,
  schoolFields,
  schools
} from '../shared/catalog.js'
import { calculatePricing } from '../shared/pricing.js'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function invalid(message) {
  return new functions.https.HttpsError('invalid-argument', message)
}

function text(value, label, maxLength) {
  const result = typeof value === 'string' ? value.trim() : ''
  if (!result) throw invalid(`請填寫${label}`)
  if (result.length > maxLength) throw invalid(`${label}過長`)
  return result
}

// Merges duplicate lines and takes name/price from the catalog, never from the request.
function normalizeItems(rawItems) {
  if (!Array.isArray(rawItems) || rawItems.length === 0) throw invalid('購物袋是空的')

  const quantities = new Map()
  for (const raw of rawItems) {
    const item = findPurchasableItem(raw?.id)
    const quantity = Number(raw?.quantity)
    if (!item) throw invalid('購物袋中有已下架的商品，請移除後再試一次')
    if (!Number.isInteger(quantity) || quantity < 1) throw invalid('商品數量有誤')
    quantities.set(item.id, (quantities.get(item.id) || 0) + quantity)
  }

  return [...quantities].map(([id, quantity]) => {
    if (quantity > MAX_ITEM_QUANTITY) throw invalid(`單一商品最多訂購 ${MAX_ITEM_QUANTITY} 件`)
    const { no, name, price } = findPurchasableItem(id)
    return { id, no, name, price, quantity }
  })
}

// Validates what the browser sent and prices it from the catalog, so a
// tampered request cannot change prices, discounts or the PR-package flag.
export function buildOrder(payload, { ownerUid, isAdmin }) {
  const school = text(payload?.school, '學校', 20)
  if (!schools.includes(school)) throw invalid('學校選項有誤')
  const { needsClass, needsOffice } = schoolFields(school)

  const customerEmail = text(payload.customerEmail, 'Email', 254).toLowerCase()
  if (!EMAIL_PATTERN.test(customerEmail)) throw invalid('Email 格式不正確')

  const items = normalizeItems(payload.items)
  const pricing = calculatePricing(items, { usePRPackage: payload.usePRPackage === true, isAdmin })
  const appliedCombos = pricing.prPackageApplied
    ? [{ name: '公關品訂單', discount: pricing.prPackageDiscount, applicableCount: 1 }]
    : pricing.appliedCombos.map(({ id, name, discount, applicableCount }) => ({ id, name, discount, applicableCount }))

  return {
    ownerUid,
    items,
    customerName: text(payload.customerName, '姓名', 50),
    customerEmail,
    customerPhone: text(payload.customerPhone, '電話', 30),
    school,
    class: needsClass ? text(payload.class, '班級', 20) : '',
    number: needsClass ? text(payload.number, '座號', 10) : '',
    office: needsOffice ? text(payload.office, '辦公室', 30) : '',
    originalTotal: pricing.originalTotal,
    totalDiscount: pricing.originalTotal - pricing.finalTotal,
    giftDiscount: pricing.giftDiscount,
    appliedCombos,
    prPackageUsed: pricing.prPackageApplied,
    finalTotal: pricing.finalTotal,
    isAdminOrder: isAdmin,
    delivered: false,
    paid: false
  }
}

// YYYYMMDD in Taiwan time.
function taiwanDateString(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Taipei',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).formatToParts(date)

  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]))
  return `${values.year}${values.month}${values.day}`
}

// Saves the order as <school code><YYYYMMDD><4-digit daily serial>, e.g.
// CKS202611050001. The counter and the order are written in one transaction.
export async function saveOrderWithNewId(db, order) {
  const date = taiwanDateString()
  const counterRef = db.collection('orderCounters').doc(date)
  const prefix = SCHOOL_CODES[order.school] || 'O'

  return db.runTransaction(async (transaction) => {
    const counterSnap = await transaction.get(counterRef)
    const serialNumber = Number(counterSnap.data()?.serialNumber || 0) + 1
    const orderId = `${prefix}${date}${String(serialNumber).padStart(4, '0')}`

    transaction.set(
      counterRef,
      { date, serialNumber, updatedAt: FieldValue.serverTimestamp() },
      { merge: true }
    )
    transaction.create(db.collection('orders').doc(orderId), {
      ...order,
      createdAt: FieldValue.serverTimestamp()
    })

    return orderId
  })
}
