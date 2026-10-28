import test from 'node:test'
import assert from 'node:assert/strict'
import { parseOrderQr } from '../src/utils/orderQr.js'

const origins = ['https://souvenir.cksc.tw', 'http://localhost:9000']

test('reads the order id from a pickup QR', () => {
  assert.equal(
    parseOrderQr('https://souvenir.cksc.tw/admin/orders/CKS202611050001-4A9C7E21B8D3', origins),
    'CKS202611050001-4A9C7E21B8D3'
  )
  assert.equal(parseOrderQr('  http://localhost:9000/admin/orders/HSNU202610220012/  ', origins), 'HSNU202610220012')
  assert.equal(parseOrderQr('https://souvenir.cksc.tw/admin/orders/O202610220003', origins), 'O202610220003')
})

test('ignores QR codes that are not this site\'s order links', () => {
  for (const text of [
    '',
    'CKS202611050001',
    'https://evil.example/admin/orders/CKS202611050001',
    'https://souvenir.cksc.tw.evil.example/admin/orders/CKS202611050001',
    'https://souvenir.cksc.tw/orders/CKS202611050001',
    'https://souvenir.cksc.tw/admin/orders/not-an-order',
    'https://souvenir.cksc.tw/admin/orders/CKS202611050001/history',
    'https://souvenir.cksc.tw/admin/orders/%E0%A4%A'
  ]) assert.equal(parseOrderQr(text, origins), null, text)
})
