import { test } from 'node:test'
import assert from 'node:assert/strict'

import { batchDelayMs } from './mailQueueCore.js'
import { parseNotification, resolveSubject } from './notifications.js'

test('pacing counts recipients, not messages', () => {
  // 49 BCC + 1 To at 14 recipients/s = 50/14 s
  assert.equal(batchDelayMs(50, 14), 3572)
  assert.equal(batchDelayMs(10, 0), 10_000) // never divide by zero
})

test('a leftover custom subject never replaces a payment / pickup / survey subject', () => {
  assert.equal(resolveSubject('payment', '延期'), '【建中校慶紀念品】繳費通知')
  assert.equal(resolveSubject('pickup', '延期'), '【建中校慶紀念品】領貨通知')
  assert.equal(resolveSubject('survey', '延期'), '【建中校慶紀念品】意見反饋問卷')
  assert.equal(resolveSubject('custom', '延期'), '延期')
  assert.equal(resolveSubject('custom', ''), '【建中校慶紀念品】訂購通知')
})

test('notices require the fields their email shows', () => {
  assert.throws(() => parseNotification({ type: 'custom' }), /訊息內容/)
  assert.throws(() => parseNotification({ type: 'payment', paymentTime: '10:00' }), /地點/)
  assert.throws(() => parseNotification({ type: 'both', location: 'A', paymentTime: '10:00' }), /領貨時間/)
  assert.throws(() => parseNotification({ type: 'payment', school: '不存在的學校', location: 'A', paymentTime: '1' }), /學校/)

  const survey = parseNotification({ type: 'survey' })
  assert.equal(survey.school, 'all')
  assert.equal(survey.subject, '【建中校慶紀念品】意見反饋問卷')
})

test('the payment filter picks buyers by each order\'s paid flag', async () => {
  const { notificationRecipients } = await import('../shared/format.js')
  const orders = [
    { customerEmail: 'Paid@x.com', school: 'A', paid: true },
    { customerEmail: 'unpaid@x.com', school: 'A', paid: false },
    { customerEmail: 'legacy@x.com', school: 'A' },
    { customerEmail: 'both@x.com', school: 'A', paid: true },
    { customerEmail: 'both@x.com', school: 'A', paid: false },
    { customerEmail: 'other@x.com', school: 'B', paid: false }
  ]
  assert.deepEqual(notificationRecipients(orders, 'A', 'paid'), ['paid@x.com', 'both@x.com'])
  assert.deepEqual(notificationRecipients(orders, 'A', 'unpaid'), ['unpaid@x.com', 'legacy@x.com', 'both@x.com'])
  assert.equal(notificationRecipients(orders, 'all').length, 5)
  assert.equal(notificationRecipients(orders, 'all', 'unpaid').length, 4)
})

test('a missing or unknown payment filter means every buyer', () => {
  assert.equal(parseNotification({ type: 'survey' }).payment, 'all')
  assert.equal(parseNotification({ type: 'survey', payment: 'bogus' }).payment, 'all')
  assert.equal(parseNotification({ type: 'custom', message: 'hi', payment: 'unpaid' }).payment, 'unpaid')
})
