import QRCode from 'qrcode'

import { getAuth } from 'firebase-admin/auth'

import { ADMIN_ROLES, APP_CHECK_SITE_KEY, SITE_URL, STAFF_ROLES, isSaleEnded, isShopOpen } from './shared/config.js'
import { generateEmailHTML } from './lib/emailTemplates.js'
import { MAIL_SECRETS, createTransporter, fromHeader } from './lib/mailer.js'
import { buildOrder, saveOrderWithNewId } from './lib/orders.js'
import { HttpsError, assertRole, db, getRole, inTaiwan } from './lib/common.js'

export { prepareOrderNotification, sendOrderNotification, getOrderNotificationStatus } from './lib/notifications.js'
export { processMailQueue } from './lib/mailQueue.js'

function isAnonymous(auth) {
  return auth?.token?.firebase?.sign_in_provider === 'anonymous'
}

// Called by the checkout page. Guests are signed in anonymously, so every
// order records the uid that owns it (see firestore.rules). With App Check
// on (shared/config.js), only requests from this website are accepted.
export const createOrder = inTaiwan({ enforceAppCheck: Boolean(APP_CHECK_SITE_KEY) })
  .https.onCall(async (data, context) => {
    if (!context.auth) {
      throw new HttpsError('unauthenticated', '請重新整理頁面後再試一次')
    }

    const role = await getRole(context.auth.uid)
    const isStaff = STAFF_ROLES.includes(role)

    if (isSaleEnded() && !isStaff) {
      throw new HttpsError('failed-precondition', '本次販售已結束，謝謝你的支持')
    }

    if (!isShopOpen() && !isStaff) {
      throw new HttpsError('failed-precondition', '尚未開放訂購')
    }

    // Pages loaded before this version still send { orderPayload: {...} }.
    const payload = data?.orderPayload ?? data

    const order = buildOrder(payload, {
      ownerUid: context.auth.uid,
      isAdmin: ADMIN_ROLES.includes(role)
    })

    const id = await saveOrderWithNewId(db, order, { limitEmail: !isStaff })

    return { id }
  })

// Moves orders onto the signed-in account. Used after a staff login on a
// device that had been ordering as a guest, so those orders stay visible:
//  - guest orders: proven by the guest (anonymous) account's ID token, which
//    the browser reads before signing in with Google;
//  - orders from before `ownerUid` existed that recorded this account as userId.
export const claimOrders = inTaiwan().https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new HttpsError('unauthenticated', '請先登入')
  }

  const uid = context.auth.uid
  const updates = []

  if (data?.guestToken) {
    let guest
    try {
      guest = await getAuth().verifyIdToken(String(data.guestToken))
    } catch {
      throw new HttpsError('invalid-argument', '訪客身分已過期')
    }
    if (!isAnonymous({ token: guest })) {
      throw new HttpsError('invalid-argument', '只能轉移訪客訂單')
    }
    if (guest.uid !== uid) {
      const snap = await db.collection('orders').where('ownerUid', '==', guest.uid).get()
      updates.push(...snap.docs)
    }
  }

  if (!isAnonymous(context.auth)) {
    const snap = await db.collection('orders').where('userId', '==', uid).get()
    updates.push(...snap.docs.filter((doc) => !doc.get('ownerUid')))
  }

  for (let i = 0; i < updates.length; i += 400) {
    const batch = db.batch()
    updates.slice(i, i + 400).forEach((doc) => batch.update(doc.ref, { ownerUid: uid }))
    await batch.commit()
  }

  return { moved: updates.length }
})

// Emails the order confirmation with a QR code staff scan at pickup.
export const sendOrderQRCode = inTaiwan({ secrets: MAIL_SECRETS })
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

// Admin-triggered resend of an order confirmation.
export const resendOrderConfirmation = inTaiwan({ secrets: MAIL_SECRETS }).https.onCall(async (data, context) => {
  await assertRole(context, ADMIN_ROLES)
  const orderId = String(data?.orderId || '').trim()
  if (!orderId || orderId.length > 100) throw new HttpsError('invalid-argument', '訂單編號無效')
  const snap = await db.collection('orders').doc(orderId).get()
  if (!snap.exists) throw new HttpsError('not-found', '找不到此訂單')
  const order = snap.data()
  if (!order.customerEmail) throw new HttpsError('failed-precondition', '此訂單沒有 Email')
  const qrCode = await QRCode.toBuffer(`${SITE_URL}/admin/orders/${orderId}`, { width: 300, margin: 2, color: { dark: '#1d1d1f', light: '#ffffff' }, errorCorrectionLevel: 'H', type: 'png' })
  await createTransporter().sendMail({ from: fromHeader(), to: order.customerEmail, subject: `建中校慶紀念品訂單確認 - 訂單編號：${orderId}`, html: generateEmailHTML(orderId, order), attachments: [{ filename: 'order-qrcode.png', content: qrCode, contentType: 'image/png', cid: 'qrcode', contentDisposition: 'inline' }] })
  return { sentTo: order.customerEmail }
})
