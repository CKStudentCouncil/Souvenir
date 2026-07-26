import { defineRouter } from '#q-app/wrappers'
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory
} from 'vue-router'
import routes from './routes'
import { useAuthStore } from 'src/stores/auth'
import { USE_MOCK_ORDERS, MOCK_ALLOW_ADMIN_WITHOUT_AUTH } from 'src/config/app'

export default defineRouter(function () {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
      ? createWebHistory
      : createWebHashHistory

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })

  Router.beforeEach(async (to) => {
    const authStore = useAuthStore()

    if (authStore.loading) {
      await authStore.init()
    }

    const mockAdminOk = USE_MOCK_ORDERS && MOCK_ALLOW_ADMIN_WITHOUT_AUTH

    // 一般商店頁面：沒登入或不是 manager，一律導向 comingsoon。
    // （原本沒登入導去 admin-login、沒權限導去 home——home 自己也要求
    // requiresManager，會造成無限重導向；comingsoon 沒有這個 meta，安全。）
    if (to.meta.requiresManager && !mockAdminOk) {
      if (!authStore.isLoggedIn || !authStore.isManager) {
        return { name: 'comingsoon' }
      }
    }

    // 管理後台區塊：routes.js 用的是 isAdminSection，這裡原本沒有對應檢查，
    // 等於後台只靠上面的 requiresManager 擋門，manager 也能直接進去。
    if (to.meta.isAdminSection && !mockAdminOk) {
      if (!authStore.isLoggedIn) {
        return { name: 'admin-login', query: { redirect: to.fullPath } }
      }
      if (!authStore.isAdmin) {
        return { name: 'home' }
      }
    }

    // 帳號管理頁：routes.js 設了 requiresSuperAdmin，這裡原本完全沒讀過這個
    // meta，等於任何 manager 都能打開帳號管理頁。
    if (to.meta.requiresSuperAdmin && !mockAdminOk) {
      if (!authStore.isSuperAdmin) {
        return { name: 'admin' }
      }
    }

    if (to.name === 'admin-login' && authStore.isAdmin) {
      return { name: 'admin' }
    }

    const starttime = new Date('2025-11-05T12:00:00+08:00')
    const isAfterStartTime = new Date() >= starttime
    const shopRoutes = ['home', 'product', 'cart', 'order-success', 'orders', 'order-detail']

    if (!USE_MOCK_ORDERS && !isAfterStartTime && shopRoutes.includes(to.name)) {
      if (!authStore.isManager) {
        return { name: 'comingsoon' }
      }
    }

    return true
  })

  return Router
})