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
