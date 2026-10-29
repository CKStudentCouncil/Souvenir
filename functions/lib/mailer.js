import nodemailer from 'nodemailer'
import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2'

// Secret Manager secrets every mail-sending function must request.
export const MAIL_SECRETS = ['AWS_ACCESS_KEY_ID', 'AWS_SECRET_ACCESS_KEY', 'SENDER_EMAIL', 'AWS_REGION']

// Read at call time: secrets are only present in functions that request them.
export function senderEmail() {
  const email = (process.env.SENDER_EMAIL || '').trim()
  if (!email) throw new Error('Missing SENDER_EMAIL secret')
  return email
}

export function fromHeader() {
  return `"建國中學班聯會" <${senderEmail()}>`
}

const DEFAULT_SES_REGION = 'us-east-1'

function createSesClient() {
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

  return new SESv2Client({
    region: process.env.AWS_REGION || DEFAULT_SES_REGION,
    // Retrying a request whose response was lost can send the same message
    // twice. The mail queue (mailQueueCore.js) retries only explicit rejections.
    maxAttempts: 1,
    // Without the secrets, the runtime's IAM role is used.
    ...(accessKeyId && secretAccessKey
      ? { credentials: { accessKeyId, secretAccessKey } }
      : {})
  })
}

// Sends through AWS SES. nodemailer >= 7 only accepts the SESv2 SDK:
// { sesClient, SendEmailCommand }.
export function createTransporter({ sesClient = createSesClient() } = {}) {
  return nodemailer.createTransport({
    SES: { sesClient, SendEmailCommand }
  })
}
