import { defineRouter } from '#q-app/wrappers'
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory
} from 'vue-router'
import routes from './routes'
import { useAuthStore } from 'src/stores/auth'
import { hasPendingRedirectSignIn, safeRedirect } from 'src/services/staffAuth'
import { isShopOpen } from 'shared/config'

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
    await authStore.init()

    // Signed-in staff skip the login page and go where they were headed,
    // unless the page still has to finish a redirect sign-in (LINE).
    if (to.name === 'admin-login') {
      return authStore.isManager && !hasPendingRedirectSignIn()
        ? safeRedirect(to.query.redirect)
        : true
    }

    if (to.meta.requiresManager && !authStore.isManager) {
      // Send staff to the login page and back here afterwards (e.g. after
      // scanning an order QR code); anyone else goes to the shop.
      return authStore.isLoggedIn
        ? { name: 'home' }
        : { name: 'admin-login', query: { redirect: to.fullPath } }
    }

    // Managers (友校幹部) only have the survey results.
    if (to.meta.requiresAdmin && !authStore.isAdmin) {
      return { name: 'admin-survey' }
    }

    if (to.meta.requiresSuperAdmin && !authStore.isSuperAdmin) {
      return { name: 'admin' }
    }

    // Launch gate: staff can see the shop before it opens.
    if (to.meta.shop && !isShopOpen() && !authStore.isManager) {
      return { name: 'comingsoon' }
    }

    return true
  })

  return Router
})
