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

// Unique, normalised customer emails that a bulk notification goes to.
// `school` is a school name or 'all'.
export function notificationRecipients(orders, school = 'all') {
  const emails = new Set()
  orders.forEach((order) => {
    if (school !== 'all' && order.school !== school) return
    const email = String(order.customerEmail || '').trim().toLowerCase()
    if (email && !email.startsWith('no-reply@') && !email.startsWith('noreply@')) {
      emails.add(email)
    }
  })
  return [...emails]
}
