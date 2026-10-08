import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { beforeEach, describe, it } from 'node:test'
import { MAX_ORDERS_PER_EMAIL_PER_DAY, saveOrderWithNewId } from './orders.js'

const DATE = '20261008'
const COUNTER_PATH = `orderCounters/${DATE}_CKS`
const order = {
  school: '建國中學',
  customerEmail: 'buyer@example.com',
  ownerUid: 'buyer-uid',
  finalTotal: 700,
  items: [{ id: '1_1', quantity: 1 }]
}
const emailHash = createHash('sha256').update(order.customerEmail).digest('hex').slice(0, 32)
const EMAIL_COUNTER_PATH = `orderEmailCounters/${DATE}_${emailHash}`

// Stage writes until the callback succeeds, and discard the first attempt
// when a retry is requested. Reads after writes are rejected like Firestore.
function fakeFirestore({ initial = [], onRead, onRetry } = {}) {
  const documents = new Map(initial)
  const attempts = []
  const committedWrites = []
  const db = {
    collection(collection) {
      return {
        doc(id) {
          return { id, path: `${collection}/${id}` }
        }
      }
    },
    async runTransaction(callback) {
      const attemptCount = onRetry ? 2 : 1
      for (let attempt = 0; attempt < attemptCount; attempt += 1) {
        const reads = []
        const writes = []
        const recorded = { reads, writes }
        attempts.push(recorded)
        const transaction = {
          async get(ref) {
            assert.equal(writes.length, 0, 'transaction reads must precede writes')
            reads.push(ref.path)
            onRead?.(ref, documents)
            const value = documents.get(ref.path)
            return { exists: documents.has(ref.path), data: () => value }
          },
          set(ref, data, options) {
            writes.push({ operation: 'set', ref, data, merge: options?.merge })
          },
          create(ref, data) {
            writes.push({ operation: 'create', ref, data })
          }
        }
        recorded.result = await callback(transaction)
        if (attempt < attemptCount - 1) {
          onRetry(documents)
          continue
        }

        for (const write of writes) {
          if (write.operation === 'create') {
            assert.equal(documents.has(write.ref.path), false, 'create must not overwrite an order')
          }
        }
        for (const write of writes) {
          documents.set(write.ref.path, write.merge
            ? { ...documents.get(write.ref.path), ...write.data }
            : write.data)
        }
        committedWrites.push(...writes)
        return recorded.result
      }
    }
  }
  return { db, documents, attempts, committedWrites }
}

describe('saveOrderWithNewId', () => {
  beforeEach((context) => {
    context.mock.timers.enable({ apis: ['Date'], now: Date.UTC(2026, 9, 8) })
  })

  it('returns the full suffixed ID used to store the order', async () => {
    const { db, documents, committedWrites } = fakeFirestore()

    const id = await saveOrderWithNewId(db, order)

    assert.match(id, /^CKS202610080001-[0-9A-F]{12}$/)
    const created = committedWrites.find((write) => write.operation === 'create')
    assert.equal(created.ref.id, id)
    assert.equal(created.ref.path, `orders/${id}`)
    const stored = documents.get(created.ref.path)
    assert.deepEqual(stored.items, order.items)
    assert.equal(stored.ownerUid, order.ownerUid)
    assert.equal(stored.finalTotal, order.finalTotal)
    assert.ok(stored.createdAt)
    assert.equal(documents.get(COUNTER_PATH).serialNumber, 1)
    assert.equal(documents.get(EMAIL_COUNTER_PATH).count, 1)
  })

  it('advances each school daily serial while adding a suffix to every order', async () => {
    const { db, documents } = fakeFirestore()

    const firstId = await saveOrderWithNewId(db, order)
    const secondId = await saveOrderWithNewId(db, order)
    const otherSchoolId = await saveOrderWithNewId(db, { ...order, school: '北一女中' })

    assert.match(firstId, /^CKS202610080001-[0-9A-F]{12}$/)
    assert.match(secondId, /^CKS202610080002-[0-9A-F]{12}$/)
    assert.match(otherSchoolId, /^TFG202610080001-[0-9A-F]{12}$/)
    assert.equal(documents.get(COUNTER_PATH).serialNumber, 2)
    assert.equal(documents.get(`orderCounters/${DATE}_TFG`).serialNumber, 1)
    assert.equal(documents.get(EMAIL_COUNTER_PATH).count, 3)
    assert.equal([...documents.keys()].filter((path) => path.startsWith('orders/')).length, 3)
  })

  it('skips occupied legacy serials and preserves their original documents', async () => {
    const firstLegacy = { ownerUid: 'old-buyer-1', paid: true }
    const secondLegacy = { ownerUid: 'old-buyer-2', delivered: true }
    const { db, documents } = fakeFirestore({
      initial: [
        [`orders/CKS${DATE}0001`, firstLegacy],
        [`orders/CKS${DATE}0002`, secondLegacy]
      ]
    })

    const id = await saveOrderWithNewId(db, order)

    assert.match(id, /^CKS202610080003-[0-9A-F]{12}$/)
    assert.deepEqual(documents.get(`orders/CKS${DATE}0001`), firstLegacy)
    assert.deepEqual(documents.get(`orders/CKS${DATE}0002`), secondLegacy)
    assert.equal(documents.get(COUNTER_PATH).serialNumber, 3)
    assert.ok(documents.has(`orders/${id}`))
  })

  it('skips a complete ID collision without overwriting the existing order', async () => {
    let occupiedPath
    const existingOrder = { ownerUid: 'existing-buyer', paid: true }
    const { db, documents } = fakeFirestore({
      onRead(ref, stored) {
        if (!occupiedPath && /^orders\/CKS202610080001-[0-9A-F]{12}$/.test(ref.path)) {
          occupiedPath = ref.path
          stored.set(ref.path, existingOrder)
        }
      }
    })

    const id = await saveOrderWithNewId(db, order)

    assert.match(id, /^CKS202610080002-[0-9A-F]{12}$/)
    assert.equal(id.split('-')[1], occupiedPath.split('-')[1])
    assert.deepEqual(documents.get(occupiedPath), existingOrder)
    assert.equal(documents.get(COUNTER_PATH).serialNumber, 2)
    assert.ok(documents.has(`orders/${id}`))
  })

  it('retains the suffix across a transaction retry and commits only the final attempt', async () => {
    const { db, documents, attempts, committedWrites } = fakeFirestore({
      onRetry(stored) {
        // Another checkout advances the counter before this attempt retries.
        stored.set(COUNTER_PATH, { serialNumber: 5 })
      }
    })

    const id = await saveOrderWithNewId(db, order)

    assert.equal(attempts.length, 2)
    assert.match(attempts[0].result, /^CKS202610080001-[0-9A-F]{12}$/)
    assert.match(id, /^CKS202610080006-[0-9A-F]{12}$/)
    assert.equal(attempts[0].result.split('-')[1], id.split('-')[1])
    assert.equal(documents.has(`orders/${attempts[0].result}`), false)
    assert.ok(documents.has(`orders/${id}`))
    assert.equal(documents.get(COUNTER_PATH).serialNumber, 6)
    assert.equal(documents.get(EMAIL_COUNTER_PATH).count, 1)
    assert.equal(committedWrites.filter((write) => write.operation === 'create').length, 1)
  })

  it('rejects orders at the daily email limit without changing any documents', async () => {
    const initial = [
      [COUNTER_PATH, { serialNumber: 4 }],
      [EMAIL_COUNTER_PATH, { count: MAX_ORDERS_PER_EMAIL_PER_DAY }]
    ]
    const { db, documents, attempts, committedWrites } = fakeFirestore({ initial })

    await assert.rejects(saveOrderWithNewId(db, order), { code: 'resource-exhausted' })

    assert.deepEqual([...documents], initial)
    assert.equal(attempts[0].writes.length, 0)
    assert.equal(committedWrites.length, 0)
  })

  it('allows exempt staff orders without reading or incrementing the email limit', async () => {
    const emailCounter = { count: MAX_ORDERS_PER_EMAIL_PER_DAY }
    const { db, documents, attempts } = fakeFirestore({
      initial: [[EMAIL_COUNTER_PATH, emailCounter]]
    })

    const id = await saveOrderWithNewId(db, order, { limitEmail: false })

    assert.match(id, /^CKS202610080001-[0-9A-F]{12}$/)
    assert.ok(documents.has(`orders/${id}`))
    assert.equal(documents.get(COUNTER_PATH).serialNumber, 1)
    assert.deepEqual(documents.get(EMAIL_COUNTER_PATH), emailCounter)
    assert.equal(attempts[0].reads.includes(EMAIL_COUNTER_PATH), false)
    assert.equal(attempts[0].writes.some((write) => write.ref.path === EMAIL_COUNTER_PATH), false)
  })
})
