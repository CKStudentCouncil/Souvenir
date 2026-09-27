// meta.shop: hidden behind the launch gate until SHOP_OPEN_AT (shared/config.js)
// meta.requiresManager / requiresAdmin / requiresSuperAdmin: staff roles, see router/index.js
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/HomePage.vue'),
        meta: { shop: true }
      },
      {
        path: 'product/:id',
        name: 'product',
        component: () => import('pages/ProductPage.vue'),
        meta: { shop: true }
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('pages/CartPage.vue'),
        meta: { shop: true }
      },
      {
        path: 'order-success',
        name: 'order-success',
        component: () => import('pages/OrderSuccessPage.vue'),
        meta: { shop: true }
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('pages/OrdersPage.vue'),
        meta: { shop: true }
      },
      {
        path: 'orders/:id',
        name: 'order-detail',
        component: () => import('pages/OrderDetailPage.vue'),
        meta: { shop: true }
      },
      {
        path: 'survey',
        name: 'survey',
        component: () => import('pages/SurveyPage.vue')
      },
      {
        path: 'policy',
        name: 'policy',
        component: () => import('pages/SalesPolicyPage.vue')
      },
      {
        path: 'terms',
        name: 'terms',
        component: () => import('pages/TermsPage.vue')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('pages/AboutPage.vue')
      },
      {
        path: 'comingsoon',
        name: 'comingsoon',
        component: () => import('pages/ComingSoonPage.vue')
      }
    ]
  },

  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    meta: { requiresManager: true },
    children: [
      {
        path: '',
        name: 'admin',
        component: () => import('pages/AdminPage.vue')
      },
      {
        path: 'orders/:id',
        name: 'admin-order-detail',
        component: () => import('pages/OrderDetailPage.vue'),
        meta: { requiresAdmin: true }
      },
      {
        path: 'account',
        name: 'admin-account',
        component: () => import('pages/AccountPage.vue'),
        meta: { requiresSuperAdmin: true }
      },
      {
        path: 'survey',
        name: 'admin-survey',
        component: () => import('pages/SurveyAdminPage.vue')
      }
    ]
  },

  {
    path: '/admin/login',
    name: 'admin-login',
    component: () => import('pages/AdminLoginPage.vue')
  },

  {
    path: '/:catchAll(.*)*',
    redirect: '/'
  }
]

export default routes
