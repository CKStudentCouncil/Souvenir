import { createHash } from 'node:crypto'
import * as functions from 'firebase-functions'
import { FieldValue } from 'firebase-admin/firestore'
import {
  MAX_ITEM_QUANTITY,
  SCHOOL_CODES,
  findPurchasableItem,
  schoolFields,
  schools
} from '../shared/catalog.js'
import { isValidEmail, taiwanDate } from '../shared/format.js'
import { calculatePricing } from '../shared/pricing.js'

// Each order sends a confirmation email, so cap how many orders one address
// can receive per day (staff are exempt). Stops the shop being used to spam
// someone's inbox.
export const MAX_ORDERS_PER_EMAIL_PER_DAY = 10

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
  if (!isValidEmail(customerEmail)) throw invalid('Email 格式不正確')

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

function orderId(prefix, date, serial) {
  return `${prefix}${date}${String(serial).padStart(4, '0')}`
}

// Saves the order as <school code><YYYYMMDD><4-digit serial>, e.g.
// CKS202611050001. Each school has its own daily counter so checkouts from
// different schools don't queue on one document when the shop opens. The
// counter, the order and the per-email limit are written in one transaction.
export async function saveOrderWithNewId(db, order, { limitEmail = true } = {}) {
  const date = taiwanDate().replaceAll('-', '')
  const prefix = SCHOOL_CODES[order.school] || 'O'
  const counterRef = db.collection('orderCounters').doc(`${date}_${prefix}`)
  const emailHash = createHash('sha256').update(order.customerEmail).digest('hex').slice(0, 32)
  const emailCounterRef = db.collection('orderEmailCounters').doc(`${date}_${emailHash}`)

  return db.runTransaction(async (transaction) => {
    const counterSnap = await transaction.get(counterRef)
    const emailCount = limitEmail ? Number((await transaction.get(emailCounterRef)).data()?.count || 0) : 0

    if (emailCount >= MAX_ORDERS_PER_EMAIL_PER_DAY) {
      throw new functions.https.HttpsError('resource-exhausted', '此 Email 今日的訂單數已達上限，請明天再試或聯繫班聯會')
    }

    // Skip any ID that is already taken (e.g. orders made before counters
    // were split per school), so the create below can't collide.
    let serialNumber = Number(counterSnap.data()?.serialNumber || 0)
    let orderRef
    do {
      serialNumber += 1
      orderRef = db.collection('orders').doc(orderId(prefix, date, serialNumber))
    } while ((await transaction.get(orderRef)).exists)

    transaction.set(
      counterRef,
      { date, school: order.school, serialNumber, updatedAt: FieldValue.serverTimestamp() },
      { merge: true }
    )
    if (limitEmail) {
      transaction.set(emailCounterRef, { date, count: emailCount + 1 }, { merge: true })
    }
    transaction.create(orderRef, { ...order, createdAt: FieldValue.serverTimestamp() })

    return orderRef.id
  }, { maxAttempts: 10 })
}
