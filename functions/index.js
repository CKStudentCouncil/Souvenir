import * as functions from 'firebase-functions'
import QRCode from 'qrcode'

import { initializeApp } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

import { schools } from './shared/catalog.js'
import { ADMIN_ROLES, SITE_URL, STAFF_ROLES, isShopOpen } from './shared/config.js'
import { generateEmailHTML, generateOrderNotificationHTML } from './lib/emailTemplates.js'
import { MAIL_SECRETS, createTransporter, fromHeader, senderEmail } from './lib/mailer.js'
import { buildOrder, saveOrderWithNewId } from './lib/orders.js'

initializeApp()

const db = getFirestore()
const { HttpsError } = functions.https
const inTaiwan = functions.region('asia-east1')

async function getRole(uid) {
  const snap = await db.collection('users').doc(uid).get()
  return snap.exists ? snap.data()?.role || null : null
}

async function assertRole(context, roles) {
  if (!context.auth) {
    throw new HttpsError('unauthenticated', '請先登入')
  }
  if (!roles.includes(await getRole(context.auth.uid))) {
    throw new HttpsError('permission-denied', '無管理員權限')
  }
}

// Called by the checkout page. Guests are signed in anonymously, so every
// order records the uid that owns it (see firestore.rules).
export const createOrder = inTaiwan.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new HttpsError('unauthenticated', '請重新整理頁面後再試一次')
  }

  const role = await getRole(context.auth.uid)

  if (!isShopOpen() && !STAFF_ROLES.includes(role)) {
    throw new HttpsError('failed-precondition', '尚未開放訂購')
  }

  const order = buildOrder(data, {
    ownerUid: context.auth.uid,
    isAdmin: ADMIN_ROLES.includes(role)
  })

  const id = await saveOrderWithNewId(db, order)

  return { id }
})

// Emails the order confirmation with a QR code staff scan at pickup.
export const sendOrderQRCode = inTaiwan
  .runWith({ secrets: MAIL_SECRETS })
  .firestore
  .document('orders/{orderId}')
  .onCreate(async (snap, context) => {
    const order = snap.data()
    const { orderId } = context.params

    if (!order.customerEmail) {
      console.log(`Order ${orderId} has no customer email, skipping`)
      return
    }

    try {
      const qrCode = await QRCode.toBuffer(`${SITE_URL}/admin/orders/${orderId}`, {
        width: 300,
        margin: 2,
        color: { dark: '#1d1d1f', light: '#ffffff' },
        errorCorrectionLevel: 'H',
        type: 'png'
      })

      await createTransporter().sendMail({
        from: fromHeader(),
        to: order.customerEmail,
        subject: `建中校慶紀念品訂單確認 - 訂單編號：${orderId}`,
        html: generateEmailHTML(orderId, order),
        attachments: [
          {
            filename: 'order-qrcode.png',
            content: qrCode,
            contentType: 'image/png',
            cid: 'qrcode',
            contentDisposition: 'inline'
          }
        ]
      })

      console.log(`Sent order confirmation for ${orderId} to ${order.customerEmail}`)
    } catch (error) {
      console.error(`Error sending email for order ${orderId}:`, error)
    }
  })

const NOTIFY_TYPES = ['payment', 'pickup', 'both', 'custom']

const NOTIFY_SUBJECTS = {
  payment: '【建中校慶紀念品】繳費通知',
  pickup: '【建中校慶紀念品】領貨通知',
  both: '【建中校慶紀念品】繳費暨領貨通知',
  custom: '【建中校慶紀念品】訂購通知'
}

// Recipients are sent as BCC in batches. SES counts each sendMail() call as
// one message against its rate limit (commonly 14/second).
const MAX_BCC_PER_BATCH = 49
const MIN_MS_BETWEEN_SENDS = Math.ceil(1000 / 14)

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function chunk(array, size) {
  const result = []
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size))
  }
  return result
}

function field(value, maxLength) {
  return String(value || '').trim().slice(0, maxLength)
}

function parseSchool(value) {
  const school = field(value, 50) || 'all'
  if (school !== 'all' && !schools.includes(school)) {
    throw new HttpsError('invalid-argument', '學校選項有誤')
  }
  return school
}

function parseNotification(data) {
  const notification = {
    type: NOTIFY_TYPES.includes(data?.type) ? data.type : 'payment',
    school: parseSchool(data?.school),
    subject: field(data?.subject, 150),
    paymentTime: field(data?.paymentTime, 100),
    pickupTime: field(data?.pickupTime, 100),
    location: field(data?.location, 100),
    message: field(data?.message, 5000)
  }
  const { type, paymentTime, pickupTime, location, message } = notification

  // The subject box is only shown for custom messages.
  if (type !== 'custom') notification.subject = ''

  if (type === 'custom' && !message) {
    throw new HttpsError('invalid-argument', '請提供訊息內容')
  }
  if (type !== 'custom' && !location) {
    throw new HttpsError('invalid-argument', '請提供地點')
  }
  if ((type === 'payment' || type === 'both') && !paymentTime) {
    throw new HttpsError('invalid-argument', '請提供繳費時間')
  }
  if ((type === 'pickup' || type === 'both') && !pickupTime) {
    throw new HttpsError('invalid-argument', '請提供領貨時間')
  }

  return notification
}

// Unique customer emails for a school ('all' = every school).
async function collectRecipients(school) {
  let query = db.collection('orders')
  if (school !== 'all') query = query.where('school', '==', school)

  const snapshot = await query.select('customerEmail').get()
  const sender = senderEmail().toLowerCase()
  const emails = new Set()

  snapshot.forEach((doc) => {
    const email = String(doc.get('customerEmail') || '').trim().toLowerCase()
    if (email && email !== sender && !email.startsWith('no-reply@') && !email.startsWith('noreply@')) {
      emails.add(email)
    }
  })

  return [...emails]
}

// Bulk payment / pickup / custom notification, sent from the admin page by
// any staff member. With { dryRun: true } it only returns the recipient count.
export const sendOrderNotification = inTaiwan
  .runWith({ secrets: MAIL_SECRETS, timeoutSeconds: 300 })
  .https.onCall(async (data, context) => {
    await assertRole(context, STAFF_ROLES)

    if (data?.dryRun) {
      const recipients = await collectRecipients(parseSchool(data.school))
      return { recipientCount: recipients.length }
    }

    const notification = parseNotification(data)
    const recipients = await collectRecipients(notification.school)

    console.log(`Sending ${notification.type} notification to ${recipients.length} recipients`)

    const transporter = createTransporter()
    const html = generateOrderNotificationHTML(notification)
    let sentCount = 0
    let failedCount = 0
    let lastSendAt = 0

    for (const batch of chunk(recipients, MAX_BCC_PER_BATCH)) {
      const waitMs = lastSendAt + MIN_MS_BETWEEN_SENDS - Date.now()
      if (waitMs > 0) await sleep(waitMs)
      lastSendAt = Date.now()

      try {
        await transporter.sendMail({
          from: fromHeader(),
          to: senderEmail(),
          bcc: batch,
          subject: notification.subject || NOTIFY_SUBJECTS[notification.type],
          html
        })
        sentCount += batch.length
      } catch (error) {
        console.error('Failed to send a notification batch:', error)
        failedCount += batch.length
      }
    }

    console.log(`Notification sent: ${sentCount} ok, ${failedCount} failed`)

    return { sentCount, failedCount }
  })
