import { collection, doc, getDoc, getDocs, serverTimestamp, writeBatch } from 'firebase/firestore'
import { db } from 'src/services/firebase'

// Past years' orders for the analytics page, without names or contact details:
// imported from Excel, or saved from this year's orders before they're deleted
// (utils/salesImport.js). Super admins only.
//   salesArchive/{year}: openDate, closeDate, orderCount, revenue, chunkCount, who imported it
//   salesArchive/{year}/chunks/{0, 1, ...}: { orders: [...] }, so no document
//     gets near Firestore's 1 MiB limit
const ORDERS_PER_CHUNK = 500

// Imported years, newest first.
export async function fetchSalesArchives() {
  const snapshot = await getDocs(collection(db, 'salesArchive'))
  return snapshot.docs
    .map((d) => ({ ...d.data(), year: Number(d.id) }))
    .sort((a, b) => b.year - a.year)
}

// One year's summary, or null when it hasn't been saved.
export async function fetchSalesArchive(year) {
  const snap = await getDoc(doc(db, 'salesArchive', String(year)))
  return snap.exists() ? { ...snap.data(), year } : null
}

export async function fetchArchivedOrders(archive) {
  const yearRef = doc(db, 'salesArchive', String(archive.year))
  const chunks = await Promise.all(
    Array.from({ length: archive.chunkCount || 0 }, (_, i) => getDoc(doc(yearRef, 'chunks', String(i))))
  )
  return chunks.flatMap((chunk) => chunk.data()?.orders || [])
}

// Saves a year in one batch, replacing an earlier import of it (chunks a
// larger earlier import left behind are deleted).
export async function saveSalesArchive({ year, openDate, closeDate, orders }, staff, previousChunkCount = 0) {
  const yearRef = doc(db, 'salesArchive', String(year))
  const chunkCount = Math.ceil(orders.length / ORDERS_PER_CHUNK)
  const batch = writeBatch(db)

  for (let i = 0; i < Math.max(chunkCount, previousChunkCount); i++) {
    const chunkRef = doc(yearRef, 'chunks', String(i))
    if (i < chunkCount) {
      batch.set(chunkRef, { orders: orders.slice(i * ORDERS_PER_CHUNK, (i + 1) * ORDERS_PER_CHUNK) })
    } else {
      batch.delete(chunkRef)
    }
  }
  batch.set(yearRef, {
    openDate,
    closeDate,
    orderCount: orders.length,
    revenue: orders.reduce((sum, order) => sum + order.finalTotal, 0),
    chunkCount,
    importedAt: serverTimestamp(),
    importedBy: staff.uid,
    importedByName: staff.name
  })

  await batch.commit()
}
