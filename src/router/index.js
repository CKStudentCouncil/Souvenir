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

    if (to.meta.requiresManager) {
      const mockAdminOk = USE_MOCK_ORDERS && MOCK_ALLOW_ADMIN_WITHOUT_AUTH

      if (!mockAdminOk) {
        if (!authStore.isLoggedIn) {
          return { 
            name: 'admin-login',
            query: { redirect: to.fullPath }
          }
        }

        if (!authStore.isManager) {
          return { name: 'home' }
        }
      }
    }


    if (to.meta.requiresAdmin) {
      const mockAdminOk =
        USE_MOCK_ORDERS &&
        MOCK_ALLOW_ADMIN_WITHOUT_AUTH

      if (!mockAdminOk) {

        if (!authStore.isLoggedIn) {
          return {
            name: 'admin-login',
            query: {
              redirect: to.fullPath
            }
          }
        }

        // manager / admin / super_admin 都可以進入
        if (!authStore.isManager) {
          return {
            name: 'home'
          }
        }
      }
    }

    if (to.name === 'admin-login' && authStore.isAdmin) {
      return { name: 'admin' }
    }

    const starttime = new Date('2025-11-05T12:00:00+08:00')
    const isAfterStartTime = new Date() >= starttime
    const shopRoutes = ['home', 'product', 'cart', 'orders', 'order-detail']

    if (!USE_MOCK_ORDERS && !isAfterStartTime && shopRoutes.includes(to.name)) {
      if (!authStore.isAdmin) {
        return { name: 'comingsoon' }
      }
    }

    return true
  })

  return Router
})
