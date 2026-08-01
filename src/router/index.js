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

    if (to.meta.requiresManager && !mockAdminOk) {
      if (!authStore.isLoggedIn || !authStore.isManager) {
        return { name: 'comingsoon' }
      }
    }

    if (to.meta.isAdminSection && !mockAdminOk) {
      if (!authStore.isLoggedIn) {
        return { name: 'admin-login', query: { redirect: to.fullPath } }
      }
      if (!authStore.isAdmin) {
        return { name: 'home' }
      }
    }

    if (to.meta.requiresSuperAdmin && !mockAdminOk) {
      if (!authStore.isSuperAdmin) {
        return { name: 'admin' }
      }
    }

    if (to.name === 'admin-login' && authStore.isAdmin) {
      return { name: 'admin' }
    }

    const starttime = new Date('2026-11-05T12:00:00+08:00')
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