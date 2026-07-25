import * as functions from 'firebase-functions'
import nodemailer from 'nodemailer'
import QRCode from 'qrcode'
import sharp from 'sharp'
import { generateEmailHTML } from './emailTemplate.js'

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

    console.log(`Sending email using account: ${process.env.GMAIL_EMAIL}`)

    if (!order.customerEmail) {
      console.log(`Order ${orderId} has no customer email, skipping`)
      return
    }

    try {
      const transporter = createTransporter()

      const orderUrl = `https://cksc-merchandis.web.app/admin/orders/${orderId}`
      const qrCodeBuffer = await QRCode.toBuffer(orderUrl, {
        width: 300,
        margin: 2,
        color: { dark: '#1d1d1f', light: '#ffffff' },
        errorCorrectionLevel: 'H',
        type: 'png'
      })

      // Flatten onto a solid white background and drop the alpha channel
      // entirely. Some mail clients (Gmail app, Outlook.com) auto-dark-mode
      // any PNG that still carries an alpha channel, inverting/dimming it
      // even when every pixel is fully opaque. Removing the channel outright
      // stops that heuristic from firing, so the QR stays white-on-black
      // regardless of the recipient's dark mode setting.
      const qrPngBuffer = await sharp(qrCodeBuffer)
        .flatten({ background: '#ffffff' })
        .png()
        .toBuffer()

      const mailOptions = {
        from: process.env.GMAIL_EMAIL,
        to: order.customerEmail,
        subject: `建中校慶紀念品訂單確認 - 訂單編號： ${orderId}`,
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
      console.log(`Successfully sent order confirmation email to ${order.customerEmail}`)
    } catch (error) {
      console.error(`Error sending email for order ${orderId}:`, error)
    }
  })