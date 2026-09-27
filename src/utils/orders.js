// Small helpers for displaying orders.

export function parseOrderDate(value) {
  if (!value) return null
  if (value instanceof Date) return value
  if (typeof value.toDate === 'function') return value.toDate()
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? null : date
}

export function formatOrderDate(value) {
  const date = parseOrderDate(value)
  return date ? date.toLocaleString() : ''
}

// Older orders stored the class as `classNumber`.
export function getOrderClass(order) {
  return order?.class || order?.classNumber || ''
}

export function countItems(items = []) {
  return items.reduce((total, item) => total + Number(item.quantity || 0), 0)
}

// Link encoded in the pickup QR codes: staff scan it to open the order in the admin view.
export function orderAdminUrl(orderId) {
  return `${window.location.origin}/admin/orders/${orderId}`
}
