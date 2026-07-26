import { USE_MOCK_ORDERS } from 'src/config/app'
import { collection, addDoc, serverTimestamp, doc, getDoc, getDocs, query, orderBy, deleteDoc, updateDoc } from 'firebase/firestore'
import { db } from 'src/boot/firebase'
import { addGuestOrderId, getGuestOrderIds, removeGuestOrderId } from 'src/utils/guestOrders'

const MOCK_ORDERS_KEY = 'cksc_mock_orders'

function loadMockOrders() {
  try {
    const raw = localStorage.getItem(MOCK_ORDERS_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveMockOrders(orders) {
  localStorage.setItem(MOCK_ORDERS_KEY, JSON.stringify(orders))
}

export function parseOrderDate(value) {
  if (!value) return null
  if (value instanceof Date) return value
  if (typeof value === 'string') return new Date(value)
  if (value.toDate) return value.toDate()
  return null
}

export function formatOrderDate(value) {
  const d = parseOrderDate(value)
  return d ? d.toLocaleString() : ''
}

function normalizeOrderPayload(payload) {
  const { ...rest } = payload

  return rest
}

export async function submitOrder(orderPayload) {
  const normalizedPayload = normalizeOrderPayload(orderPayload)

  if (!USE_MOCK_ORDERS) {
    const docRef = await addDoc(collection(db, 'orders'), {
      ...normalizedPayload,
      createdAt: serverTimestamp()
    })
    addGuestOrderId(docRef.id)
    return { status: 201, id: docRef.id }
  }

  await Promise.resolve()

  const id = `local-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
  const createdAt = new Date().toISOString()
  const order = {
    ...normalizedPayload,
    id,
    createdAt,
    delivered: false,
    deliveryUpdatedAt: null,
    deliveryUpdatedByName: null
  }

  const orders = loadMockOrders()
  orders.unshift(order)
  saveMockOrders(orders)
  addGuestOrderId(id)

  return { status: 201, id, order }
}

export async function fetchAllOrders() {
  if (!USE_MOCK_ORDERS) {
    const q = query(collection(db, 'orders'), orderBy('createdAt', 'desc'))
    const snapshot = await getDocs(q)
    const allOrdersRaw = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }))

    return Promise.all(
      allOrdersRaw.map(async (o) => {
        const needEnrich =
          !o.customerName || !o.customerPhone || !o.customerEmail
        if (!needEnrich || !o.userId) return o
        try {
          const userSnap = await getDoc(doc(db, 'users', o.userId))
          if (!userSnap.exists()) return o
          const u = userSnap.data()
          return {
            ...o,
            customerName: o.customerName || u.name || '',
            customerPhone: o.customerPhone || u.phone || '',
            customerEmail: o.customerEmail || u.email || '',
            school: o.school || u.school || '',
            class: o.class || u.class || '',
            number: o.number || u.number || ''
          }
        } catch {
          return o
        }
      })
    )
  }

  return loadMockOrders().sort(
    (a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )
}

export async function fetchOrderById(orderId) {
  if (!USE_MOCK_ORDERS) {
    const snap = await getDoc(doc(db, 'orders', orderId))
    if (!snap.exists()) return null
    return { id: snap.id, ...snap.data() }
  }

  return loadMockOrders().find((o) => o.id === orderId) || null
}

export async function fetchBuyerOrders() {
  const ids = getGuestOrderIds()
  if (!USE_MOCK_ORDERS) {
    const loaded = []
    for (const id of ids) {
      const order = await fetchOrderById(id)
      if (order) loaded.push(order)
    }
    return loaded.sort(
      (a, b) =>
        new Date(parseOrderDate(b.createdAt)).getTime() -
        new Date(parseOrderDate(a.createdAt)).getTime()
    )
  }

  const byId = new Map(loadMockOrders().map((o) => [o.id, o]))
  return ids
    .map((id) => byId.get(id))
    .filter(Boolean)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
}

export function canViewOrder(orderId) {
  if (!USE_MOCK_ORDERS) {
    return getGuestOrderIds().includes(orderId)
  }
  return getGuestOrderIds().includes(orderId) || loadMockOrders().some((o) => o.id === orderId)
}

export async function updateOrderDelivery(orderId, delivered, meta = {}) {
  if (!USE_MOCK_ORDERS) {
    const orderRef = doc(db, 'orders', orderId)
    const updateData = {
      delivered,
      deliveryUpdatedAt: serverTimestamp(),
      ...meta
    }
    await updateDoc(orderRef, updateData)
    return updateData
  }

  const orders = loadMockOrders()
  const idx = orders.findIndex((o) => o.id === orderId)
  if (idx === -1) throw new Error('訂單不存在')

  const patch = {
    delivered,
    deliveryUpdatedAt: new Date().toISOString(),
    deliveryUpdatedBy: meta.deliveryUpdatedBy,
    deliveryUpdatedByName: meta.deliveryUpdatedByName
  }
  orders[idx] = { ...orders[idx], ...patch }
  saveMockOrders(orders)
  return patch
}

export async function deleteOrderById(orderId) {
  if (!USE_MOCK_ORDERS) {
    await deleteDoc(doc(db, 'orders', orderId))
    removeGuestOrderId(orderId)
    return
  }

  saveMockOrders(loadMockOrders().filter((o) => o.id !== orderId))
  removeGuestOrderId(orderId)
}

export function getLastSubmittedOrderId() {
  try {
    return sessionStorage.getItem('cksc_last_order_id')
  } catch {
    return null
  }
}

export function setLastSubmittedOrderId(id) {
  try {
    sessionStorage.setItem('cksc_last_order_id', id)
  } catch {
    /* ignore */
  }
}
