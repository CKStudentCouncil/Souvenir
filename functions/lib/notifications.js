import { FieldPath, FieldValue } from 'firebase-admin/firestore'
import { schools } from '../shared/catalog.js'
import { ADMIN_ROLES } from '../shared/config.js'
import { NOTIFY_DELIVERY_FILTERS, NOTIFY_PAYMENT_FILTERS, notificationRecipients } from '../shared/format.js'
import { db, HttpsError, assertRole, inTaiwan } from './common.js'
import { enqueueNotificationBatch, MAX_BCC_PER_BATCH, NOTIFY_TO } from './mailQueue.js'
import { notificationProgress } from './mailQueueCore.js'

// Bulk email to buyers, the same way as the ticket system:
//  1. prepareOrderNotification freezes the recipients and the message as
//     notificationJobs/{id}, nothing is sent yet;
//  2. sendOrderNotification puts that job's BCC batches in mailQueue;
//  3. processMailQueue (mailQueue.js) sends them, paced to the SES rate;
//  4. getOrderNotificationStatus reports progress from the queued batches.
// survey is the feedback survey invitation (/survey) to every buyer.
const NOTIFY_TYPES = ['payment', 'pickup', 'both', 'custom', 'survey']

const NOTIFY_SUBJECTS = {
  payment: '【建中校慶紀念品】繳費通知',
  pickup: '【建中校慶紀念品】領貨通知',
  both: '【建中校慶紀念品】繳費暨領貨通知',
  custom: '【建中校慶紀念品】訂購通知',
  survey: '【建中校慶紀念品】意見反饋問卷'
}

const JOB_ID_PATTERN = /^[A-Za-z0-9]{1,40}$/
// 10,000 recipients need 205 batch documents, within one 500-write batch.
const MAX_RECIPIENTS = 10_000

export function resolveSubject(type, subject) {
  return type === 'custom' && subject ? subject : NOTIFY_SUBJECTS[type]
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

export function parseNotification(data) {
  const type = NOTIFY_TYPES.includes(data?.type) ? data.type : 'payment'
  const fields = {
    paymentTime: field(data?.paymentTime, 100),
    pickupTime: field(data?.pickupTime, 100),
    location: field(data?.location, 100),
    message: field(data?.message, 5000)
  }
  const { paymentTime, pickupTime, location, message } = fields

  if (type === 'custom' && !message) {
    throw new HttpsError('invalid-argument', '請提供訊息內容')
  }
  if (type !== 'custom' && type !== 'survey') {
    if (!location) throw new HttpsError('invalid-argument', '請提供地點')
    if ((type === 'payment' || type === 'both') && !paymentTime) {
      throw new HttpsError('invalid-argument', '請提供繳費時間')
    }
    if ((type === 'pickup' || type === 'both') && !pickupTime) {
      throw new HttpsError('invalid-argument', '請提供領貨時間')
    }
  }

  return {
    type,
    school: parseSchool(data?.school),
    // Pages loaded before a filter existed send none: every buyer.
    payment: NOTIFY_PAYMENT_FILTERS.includes(data?.payment) ? data.payment : 'all',
    delivery: NOTIFY_DELIVERY_FILTERS.includes(data?.delivery) ? data.delivery : 'all',
    // The subject box is only shown for custom messages.
    subject: resolveSubject(type, field(data?.subject, 150)),
    fields
  }
}

// Unique customer emails for a school ('all' = every school) and payment /
// pickup filters, same rule as the count shown on the admin page. The council
// mailbox is already the To.
async function collectRecipients({ school, payment, delivery }) {
  let query = db.collection('orders')
  if (school !== 'all') query = query.where('school', '==', school)

  const snapshot = await query.select('customerEmail', 'school', 'paid', 'delivered').get()
  const recipients = notificationRecipients(snapshot.docs.map((doc) => doc.data()), { school, payment, delivery })
    .filter((email) => email !== NOTIFY_TO)

  if (recipients.length > MAX_RECIPIENTS) {
    throw new HttpsError('resource-exhausted', '收件人過多，請依學校分批寄送')
  }
  return recipients
}

function notificationRef(data) {
  const id = String(data?.jobId || '')
  if (!JOB_ID_PATTERN.test(id)) throw new HttpsError('invalid-argument', '寄送紀錄無效，請重新整理頁面後再試')
  return db.doc(`notificationJobs/${id}`)
}

async function progressOf(ref) {
  const snap = await ref.get()
  if (!snap.exists) throw new HttpsError('not-found', '找不到這次寄送紀錄')
  const batches = await db.collection('mailQueue').where('notificationJobId', '==', ref.id).get()
  const progress = notificationProgress(ref.id, snap.data().total, batches.docs.map((batch) => batch.data()))
  // Informational counters only; the queued batches are the source of truth.
  await ref.update({ status: progress.status, acceptedCount: progress.acceptedCount,
    failedCount: progress.failedCount, uncertainCount: progress.uncertainCount,
    updatedAt: FieldValue.serverTimestamp() })
  return progress
}

// Preparation freezes recipients and message; the admin confirms this count
// before sendOrderNotification queues them. Admins only: the message goes out
// under the council's name.
export const prepareOrderNotification = inTaiwan().https.onCall(async (data, context) => {
  await assertRole(context, ADMIN_ROLES)

  const notification = parseNotification(data)
  const recipients = await collectRecipients(notification)
  if (!recipients.length) return { status: 'empty', jobId: null, sentCount: 0, total: 0 }

  const ref = db.collection('notificationJobs').doc()
  const batch = db.batch()
  batch.create(ref, { ...notification, total: recipients.length,
    batchCount: Math.ceil(recipients.length / MAX_BCC_PER_BATCH), status: 'ready',
    createdBy: context.auth.uid, createdAt: FieldValue.serverTimestamp() })
  // Bounded immutable subdocuments keep the job document itself small.
  for (let start = 0; start < recipients.length; start += MAX_BCC_PER_BATCH) {
    batch.create(ref.collection('batches').doc(String(start).padStart(6, '0')), {
      start, recipients: recipients.slice(start, start + MAX_BCC_PER_BATCH)
    })
  }
  await batch.commit()

  console.log(`Prepared ${notification.type} notification ${ref.id} for ${recipients.length} recipients`)

  return { status: 'ready', jobId: ref.id, sentCount: 0, total: recipients.length, pendingEnqueueCount: recipients.length }
})

// Retry this callable with the same jobId after an interruption: batches
// already in the queue are never reset or resent. No SES call happens here.
export const sendOrderNotification = inTaiwan({ timeoutSeconds: 120 })
  .https.onCall(async (data, context) => {
    await assertRole(context, ADMIN_ROLES)

    const ref = notificationRef(data)
    const snap = await ref.get()
    if (!snap.exists) throw new HttpsError('not-found', '找不到這次寄送紀錄')
    const job = snap.data()

    const query = ref.collection('batches').orderBy(FieldPath.documentId()).limit(100)
    let cursor
    while (true) {
      const page = await (cursor ? query.startAfter(cursor) : query).get()
      for (const batch of page.docs) {
        const { start, recipients } = batch.data()
        await enqueueNotificationBatch(`notification_${ref.id}_${start}`, {
          kind: 'notification', notificationJobId: ref.id, type: job.type,
          subject: job.subject, fields: job.fields, recipients,
          buyerCount: recipients.length, recipientCount: recipients.length + 1,
          createdBy: context.auth.uid
        })
      }
      if (page.size < 100) break
      cursor = page.docs.at(-1)
    }

    return progressOf(ref)
  })

export const getOrderNotificationStatus = inTaiwan().https.onCall(async (data, context) => {
  await assertRole(context, ADMIN_ROLES)
  return progressOf(notificationRef(data))
})
