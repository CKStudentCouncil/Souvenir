import nodemailer from 'nodemailer'
import AWS from 'aws-sdk'

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

// Sends through AWS SES. Credentials come from Secret Manager, or from the
// runtime's IAM role when the secrets are not set.
export function createTransporter() {
  const region = process.env.AWS_REGION || 'us-east-1'
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

  if (accessKeyId && secretAccessKey) {
    AWS.config.update({ accessKeyId, secretAccessKey, region })
  } else {
    AWS.config.update({ region })
  }

  const ses = new AWS.SES({ apiVersion: '2010-12-01', region })

  return nodemailer.createTransport({
    SES: { ses, aws: AWS }
  })
}
