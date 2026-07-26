import * as functions from 'firebase-functions'
import nodemailer from 'nodemailer'
import QRCode from 'qrcode'
import sharp from 'sharp'

import { initializeApp } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

import { generateEmailHTML } from './emailTemplate.js'
import { generateOrderNotificationHTML } from './paymentNotificationTemplate.js'

initializeApp()

const db = getFirestore()

const createTransporter = () => {
  const email = process.env.GMAIL_EMAIL
  const password = process.env.GMAIL_PASSWORD

  if (!email) {
    throw new Error('Missing required environment variable: GMAIL_EMAIL')
  }

  if (!password) {
    throw new Error('Missing required secret: GMAIL_PASSWORD')
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: email,
      pass: password
    }
  })
}


/**
 * 新訂單自動寄送 QR Code
 */
export const sendOrderQRCode = functions
  .region('asia-east1')
  .runWith({
    secrets: ['GMAIL_PASSWORD']
  })
  .firestore
  .document('orders/{orderId}')
  .onCreate(async (snap, context) => {
    const order = snap.data()
    const orderId = context.params.orderId

    console.log(
      `Sending email using account: ${process.env.GMAIL_EMAIL}`
    )

    if (!order.customerEmail) {
      console.log(
        `Order ${orderId} has no customer email, skipping`
      )
      return
    }

    try {
      const transporter = createTransporter()

      const orderUrl =
        `https://souvenir.cksc.tw/admin/orders/${orderId}`

      const qrCodeBuffer = await QRCode.toBuffer(orderUrl, {
        width: 300,
        margin: 2,
        color: {
          dark: '#1d1d1f',
          light: '#ffffff'
        },
        errorCorrectionLevel: 'H',
        type: 'png'
      })

      const qrPngBuffer = await sharp(qrCodeBuffer)
        .flatten({
          background: '#ffffff'
        })
        .png()
        .toBuffer()


      const mailOptions = {
        from: process.env.GMAIL_EMAIL,
        to: order.customerEmail,
        subject:
          `建中校慶紀念品訂單確認 - 訂單編號：${orderId}`,
        html: generateEmailHTML(orderId, order),

        attachments: [
          {
            filename: 'order-qrcode.png',
            content: qrPngBuffer,
            contentType: 'image/png',
            cid: 'qrcode',
            contentDisposition: 'inline'
          }
        ]
      }


      await transporter.sendMail(mailOptions)

      console.log(
        `Successfully sent order confirmation email to ${order.customerEmail}`
      )

    } catch (error) {
      console.error(
        `Error sending email for order ${orderId}:`,
        error
      )
    }
  })



/**
 * 群發通知
 */

const MAX_BCC_PER_BATCH = 90


function chunk(array, size) {
  const result = []

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size))
  }

  return result
}


async function assertIsAdmin(context) {

  if (!context.auth) {
    throw new functions.https.HttpsError(
      'unauthenticated',
      '請先登入'
    )
  }


  const userDoc = await db
    .collection('users')
    .doc(context.auth.uid)
    .get()


  const role =
    userDoc.exists
      ? userDoc.data()?.role
      : null


  if (role !== 'admin' && role !== 'super_admin') {
    throw new functions.https.HttpsError(
      'permission-denied',
      '無管理員權限'
    )
  }
}



const NOTIFY_SUBJECTS = {
  payment: '【建中校慶紀念品】繳費通知',
  pickup: '【建中校慶紀念品】領貨通知',
  both: '【建中校慶紀念品】繳費暨領貨通知'
}



export const sendOrderNotification = functions
  .region('asia-east1')
  .runWith({
    secrets: ['GMAIL_PASSWORD']
  })
  .https.onCall(async (data, context) => {

    await assertIsAdmin(context)


    const type =
      ['payment', 'pickup', 'both'].includes(data.type)
        ? data.type
        : 'payment'


    const paymentTime =
      String(data.paymentTime || '').trim()

    const pickupTime =
      String(data.pickupTime || '').trim()

    const location =
      String(data.location || '').trim()

    const message =
      String(data.message || '').trim()



    if (!location) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        '請提供地點'
      )
    }


    if (
      (type === 'payment' || type === 'both')
      && !paymentTime
    ) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        '請提供繳費時間'
      )
    }


    if (
      (type === 'pickup' || type === 'both')
      && !pickupTime
    ) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        '請提供領貨時間'
      )
    }



    const snapshot =
      await db.collection('orders').get()


    const emailSet = new Set()


    snapshot.forEach(doc => {

      const email =
        doc.data().customerEmail

      if (email) {
        emailSet.add(email)
      }

    })


    const recipients =
      Array.from(emailSet)



    if (recipients.length === 0) {
      return {
        sentCount: 0
      }
    }



    console.log(
      `Sending order notification (${type}) using account: ${process.env.GMAIL_EMAIL}`
    )



    const transporter =
      createTransporter()



    const html =
      generateOrderNotificationHTML({
        type,
        paymentTime,
        pickupTime,
        location,
        message
      })



    const batches =
      chunk(
        recipients,
        MAX_BCC_PER_BATCH
      )



    for (const batch of batches) {

      await transporter.sendMail({

        from: process.env.GMAIL_EMAIL,

        to: process.env.GMAIL_EMAIL,

        bcc: batch,

        subject:
          NOTIFY_SUBJECTS[type],
        html

      })

    }



    console.log(
      `Successfully sent order notification to ${recipients.length} recipients`
    )


    return {
      sentCount: recipients.length
    }

  })