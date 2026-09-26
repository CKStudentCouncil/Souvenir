// Settings shared by the web app and the Cloud Functions.

// Before this time only staff can open the shop pages or place orders.
export const SHOP_OPEN_AT = new Date('2026-11-05T12:00:00+08:00')

export function isShopOpen(now = new Date()) {
  return now >= SHOP_OPEN_AT
}

export const SITE_URL = 'https://souvenir.cksc.tw'

// Staff roles, stored in users/{uid}.role.
export const ROLE_LABELS = {
  super_admin: '系統管理員',
  admin: '建班幹部',
  manager: '友校幹部'
}

export const STAFF_ROLES = ['manager', 'admin', 'super_admin']
export const ADMIN_ROLES = ['admin', 'super_admin']
