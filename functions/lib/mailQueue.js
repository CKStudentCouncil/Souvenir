import * as functions from 'firebase-functions'
import { defineInt } from 'firebase-functions/params'
import { db } from './common.js'
import { createTransporter, fromHeader, MAIL_SECRETS } from './mailer.js'
import { createMailQueue } from './mailQueueCore.js'
import { generateOrderNotificationHTML } from './emailTemplates.js'
import { generateSurveyInvitationHTML } from './surveyEmailTemplate.js'

// SES sending rate of the AWS account, in recipients per second. Set it in
// functions/.env to change it without a code edit.
const SES_RECIPIENTS_PER_SECOND = defineInt('SES_RECIPIENTS_PER_SECOND', { default: 14 })

// Bulk notices go To the council's mailbox with buyers in BCC, as in the
// ticket system. The To address counts toward the SES recipient rate.
export const NOTIFY_TO = 'ckhssc@gl.ck.tp.edu.tw'
export const MAX_BCC_PER_BATCH = 49

function buildMessage(job) {
  if (job.kind !== 'notification') throw new Error('Unsupported queue message kind')
  return {
    from: fromHeader(), to: NOTIFY_TO, bcc: job.recipients,
    subject: job.subject,
    html: job.type === 'survey'
      ? generateSurveyInvitationHTML()
      : generateOrderNotificationHTML({ type: job.type, ...job.fields })
  }
}

const queue = createMailQueue({ db, buildMessage,
  // Created only while the scheduled worker sends, never during enqueue.
  send: (message) => createTransporter().sendMail(message),
  recipientsPerSecond: () => SES_RECIPIENTS_PER_SECOND.value() })

export const enqueueNotificationBatch = (id, payload) => queue.enqueue(id, payload)

// Sends whatever is due in mailQueue, paced to the SES rate. Only one worker
// runs at a time (mailQueueControl/global holds its lease).
export const processMailQueue = functions.region('asia-east1')
  .runWith({ secrets: MAIL_SECRETS, timeoutSeconds: 120, maxInstances: 1 })
  .pubsub.schedule('every 1 minutes').timeZone('Asia/Taipei')
  .onRun(() => queue.runWorker())
