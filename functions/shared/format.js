// Small helpers shared by the web app and the Cloud Functions.

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function isValidEmail(email) {
  return EMAIL_PATTERN.test(String(email || '').trim())
}

export function escapeHtml(value) {
  if (value === null || value === undefined) return ''
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

// YYYY-MM-DD in Taiwan time (Cloud Functions run in UTC, browsers anywhere).
export function taiwanDate(date = new Date()) {
  return date.toLocaleDateString('en-CA', { timeZone: 'Asia/Taipei' })
}

// Payment and pickup filters of a bulk notification.
export const NOTIFY_PAYMENT_FILTERS = ['all', 'unpaid', 'paid']
export const NOTIFY_DELIVERY_FILTERS = ['all', 'undelivered', 'delivered']

// Unique, normalised customer emails that a bulk notification goes to.
// `school` is a school name or 'all'; `payment` and `delivery` are one of
// the filters above. They are checked per order, so a buyer with both a
// paid and an unpaid order matches either payment filter.
export function notificationRecipients(orders, { school = 'all', payment = 'all', delivery = 'all' } = {}) {
  const emails = new Set()
  orders.forEach((order) => {
    if (school !== 'all' && order.school !== school) return
    if (payment === 'unpaid' && order.paid === true) return
    if (payment === 'paid' && order.paid !== true) return
    if (delivery === 'undelivered' && order.delivered === true) return
    if (delivery === 'delivered' && order.delivered !== true) return
    const email = String(order.customerEmail || '').trim().toLowerCase()
    if (email && !email.startsWith('no-reply@') && !email.startsWith('noreply@')) {
      emails.add(email)
    }
  })
  return [...emails]
}
