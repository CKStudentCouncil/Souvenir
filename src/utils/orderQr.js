// Order ids made by saveOrderWithNewId in functions/lib/orders.js, e.g.
// CKS202611050001-4A9C7E21B8D3; older orders have no suffix.
export const ORDER_ID_PATTERN = /^[A-Z]{1,4}\d{12}(-[0-9A-F]{12})?$/

// Reads a scanned pickup QR (made by orderAdminUrl / the confirmation email)
// back into the order id. Only links to one of `origins` count, so an
// unrelated QR code never opens an admin page.
export function parseOrderQr(text, origins) {
  let url
  try {
    url = new URL(String(text || '').trim())
  } catch {
    return null
  }
  if (!origins.includes(url.origin)) return null

  const match = url.pathname.match(/^\/admin\/orders\/([^/]+)\/?$/)
  if (!match) return null

  let orderId
  try {
    orderId = decodeURIComponent(match[1])
  } catch {
    return null
  }
  return ORDER_ID_PATTERN.test(orderId) ? orderId : null
}
