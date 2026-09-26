import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where
} from 'firebase/firestore'
import { signInAnonymously } from 'firebase/auth'
import { httpsCallable } from 'firebase/functions'
import { auth, db, functions } from 'src/services/firebase'
import { parseOrderDate } from 'src/utils/orders'

const createOrder = httpsCallable(functions, 'createOrder')

function newestFirst(a, b) {
  return (parseOrderDate(b.createdAt)?.getTime() || 0) - (parseOrderDate(a.createdAt)?.getTime() || 0)
}

// Prices are recalculated by the createOrder Cloud Function; only item ids,
// quantities and contact details are trusted from the browser. Guests are
// signed in anonymously so the order is tied to this device's account.
export async function submitOrder(orderPayload) {
  if (!auth.currentUser) await signInAnonymously(auth)
  const { data } = await createOrder(orderPayload)
  return data.id
}

export async function fetchAllOrders() {
  const snapshot = await getDocs(query(collection(db, 'orders'), orderBy('createdAt', 'desc')))
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }))
}

// Orders placed from this device (the current, possibly anonymous, account).
export async function fetchMyOrders() {
  const uid = auth.currentUser?.uid
  if (!uid) return []
  const snapshot = await getDocs(query(collection(db, 'orders'), where('ownerUid', '==', uid)))
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() })).sort(newestFirst)
}

// Returns null when the order does not exist or belongs to someone else.
export async function fetchOrderById(orderId) {
  try {
    const snap = await getDoc(doc(db, 'orders', orderId))
    return snap.exists() ? { id: snap.id, ...snap.data() } : null
  } catch (error) {
    if (error.code === 'permission-denied') return null
    throw error
  }
}

const STATUS_FIELDS = {
  delivered: 'delivery',
  paid: 'payment'
}

// Sets `delivered` or `paid` and records who changed it. Returns the patch
// with a local timestamp so the page can show it without reloading.
export async function updateOrderStatus(orderId, field, value, staff) {
  const prefix = STATUS_FIELDS[field]
  if (!prefix) throw new Error(`Unknown order status: ${field}`)

  await updateDoc(doc(db, 'orders', orderId), {
    [field]: value,
    [`${prefix}UpdatedAt`]: serverTimestamp(),
    [`${prefix}UpdatedBy`]: staff.uid,
    [`${prefix}UpdatedByName`]: staff.name
  })

  return {
    [field]: value,
    [`${prefix}UpdatedAt`]: new Date(),
    [`${prefix}UpdatedBy`]: staff.uid,
    [`${prefix}UpdatedByName`]: staff.name
  }
}

export async function deleteOrderById(orderId) {
  await deleteDoc(doc(db, 'orders', orderId))
}
