// Settings shared by the web app and the Cloud Functions.

// Before this time only staff can open the shop pages or place orders.
export const SHOP_OPEN_AT = new Date('2026-11-05T12:00:00+08:00')

export function isShopOpen(now = new Date()) {
  return now >= SHOP_OPEN_AT
}

export const SITE_URL = 'https://souvenir.cksc.tw'

// Firebase App Check (reCAPTCHA v3) site key. Blocks scripted orders and
// email spam that don't come from this website. Leave empty to turn App
// Check off; once set, the website sends App Check tokens and createOrder
// rejects requests without one. Setup: README.md → "App Check".
export const APP_CHECK_SITE_KEY = ''

// Staff roles, stored in users/{uid}.role.
export const ROLE_LABELS = {
  super_admin: '系統管理員',
  admin: '建班幹部',
  manager: '友校幹部'
}

export const STAFF_ROLES = ['manager', 'admin', 'super_admin']
export const ADMIN_ROLES = ['admin', 'super_admin']
