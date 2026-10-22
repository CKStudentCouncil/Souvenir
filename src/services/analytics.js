// Send a GA4 ecommerce purchase for an order accepted by the store.
// GA4 uses transaction_id to deduplicate repeat visits to the success page.
export function trackOrderPurchase(order) {
  if (!order?.id || typeof window.gtag !== 'function') return

  window.gtag('event', 'purchase', {
    transaction_id: order.id,
    value: Number(order.finalTotal) || 0,
    currency: 'TWD',
    items: (order.items || []).map((item) => ({
      item_id: String(item.no || item.id || ''),
      item_name: item.name,
      price: Number(item.price) || 0,
      quantity: Number(item.quantity) || 0
    }))
  })
}
