<template>
  <div class="app-shell">
    <header class="site-header">
      <router-link to="/" class="brand" aria-label="建中紀念品首頁">
        <img src="../../public/cksclogo.png" alt="CK Souvenir Logo" class="brand-mark" />
        <span>CK Souvenir 2.0</span>
      </router-link>

      <nav class="primary-nav" aria-label="主要導覽">
        <router-link to="/" exact-active-class="is-active">首頁</router-link>
        <router-link to="/orders" active-class="is-active">我的訂單</router-link>
        <router-link to="/about" active-class="is-active">關於我們</router-link>
      </nav>

      <div class="header-actions">
        <router-link to="/cart" class="bag-link" aria-label="開啟購物袋">
          <q-icon name="shopping_bag" size="1.2rem" />
          <span class="bag-label">購物袋</span>
          <span v-if="itemCount" class="bag-count">{{ itemCount }}</span>
        </router-link>
        <div class="menu-wrapper">
          <button
            class="more-button"
            type="button"
            aria-label="更多選項"
            @click.stop="menuOpen = !menuOpen"
          >
            <q-icon name="more_horiz" size="1.35rem" />
          </button>

          <div v-if="menuOpen" class="menu-popover"></div>
        </div>
      </div>

      <div v-if="menuOpen" class="menu-popover">
        <router-link to="/terms" @click="menuOpen = false">
          使用者條款
        </router-link>

        <router-link
          v-if="auth.isAdmin"
          to="/admin"
          @click="menuOpen = false"
        >
          訂單管理
        </router-link>

        <router-link
          v-if="auth.isSuperAdmin"
          to="/admin/account"
          @click="menuOpen = false"
        >
          帳號管理
        </router-link>

        <router-link
          v-if="!auth.isLoggedIn"
          to="/admin/login"
          @click="menuOpen = false"
        >
          幹部登入
        </router-link>

        <button
          v-if="auth.isManager || auth.isSuperAdmin || auth.isAdmin"
          type="button"
          @click="handleSignOut"
        >
          登出
        </button>
      </div>
    </header>

    <main class="page-container">
      <router-view v-if="!auth.loading" :key="$route.fullPath" />
      <div v-else class="loading-screen" role="status">正在為你準備商品…</div>
    </main>

    <footer class="site-footer">
      <div class="footer-grid">
        <div class="footer-col">
          <p class="footer-heading">Navigation</p>
          <nav class="footer-links">
            <router-link to="/">首頁</router-link>
            <router-link to="/orders">我的訂單</router-link>
            <router-link to="/about">關於我們</router-link>
            <router-link to="/terms">使用者條款</router-link>
          </nav>
        </div>
  
        <div class="footer-col">
          <p class="footer-heading">Links</p>
          <nav class="footer-links">
            <a href="https://cksc.tw" target="_blank">建中班聯會</a>
            <a href="https://cktfgpromo.cskc.tw" target="_blank">建北特約官網</a>
              <div class="footer-social">
              <a
                href="https://www.instagram.com/cksc.80th/"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                class="social-icon"
              >
                <svg class="ig-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" stroke-width="1.6"/>
                <circle cx="12" cy="12" r="4.4" stroke="currentColor" stroke-width="1.6"/>
                <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor"/>
              </svg>
              </a>
            </div>
          </nav>
        </div>
  
        <div class="footer-col footer-brand">
          <div class="footer-logo">
            <span>CK Souvenir</span>
          </div>
          <p class="footer-meta">Taipei Municipal Chien Kuo High School Student Council</p>
          <p class="footer-meta">Developed by Chris Sun and Jim Tang</p>
        </div>
      </div> 
      <div class="footer-bottom">
        <span>© <span class="num">{{ currentYear }}</span> CK Souvenir. All rights reserved.</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from 'src/stores/auth'
import { useCartStore } from 'src/stores/cart'
import { useToastStore } from 'src/stores/toast'

const router = useRouter()
const auth = useAuthStore()
const cart = useCartStore()
const toast = useToastStore()

const menuOpen = ref(false)
const currentYear = computed(() => new Date().getFullYear())

const itemCount = computed(() =>
  cart.cartItems.reduce((total, item) => total + item.quantity, 0)
)

function closeMenu() {
  menuOpen.value = false
}

function handleClickOutside(event) {
  const menu = document.querySelector('.menu-wrapper')

  if (menu && !menu.contains(event.target)) {
    closeMenu()
  }
}

onMounted(() => {
  if (auth.loading) auth.init()

  document.addEventListener(
    'click',
    handleClickOutside
  )
})

onBeforeUnmount(() => {
  document.removeEventListener(
    'click',
    handleClickOutside
  )
})


async function handleSignOut() {
  await auth.signOut()
  menuOpen.value = false

  toast.show('Logged out')
  router.push('/')
}
</script>

<style scoped>
.app-shell { min-height: 100vh; background: #f5f5f7; color: #1d1d1f; display: flex; flex-direction: column; }
.site-header { position: sticky; top: 0; z-index: 50; height: 56px; padding: 0 max(24px, calc((100vw - 1180px) / 2)); display: flex; align-items: center; gap: 32px; background: rgba(255, 255, 255, .78); border-bottom: 1px solid rgba(0, 0, 0, .08); backdrop-filter: saturate(180%) blur(18px); }
.brand { display: inline-flex; align-items: center; gap: 9px; color: inherit; font-weight: 650; letter-spacing: -.02em; text-decoration: none; white-space: nowrap; flex-shrink: 0; }
.brand-mark { width: 25px; height: 25px; object-fit: contain; border-radius: 6px; flex-shrink: 0; }
.primary-nav { display: flex; align-items: center; gap: 24px; margin-left: auto; }
.primary-nav a, .menu-popover a { color: #6e6e73; font-size: .9rem; text-decoration: none; }
.primary-nav a:hover, .primary-nav .is-active { color: #1d1d1f; }
.header-actions { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
.bag-link, .more-button { min-height: 36px; display: inline-flex; align-items: center; justify-content: center; gap: 6px; border: 0; border-radius: 999px; background: transparent; color: #1d1d1f; cursor: pointer; font: inherit; text-decoration: none; }
.bag-link { padding: 0 11px; border: 1px solid #e5e5e7; background: #fff; font-size: .86rem; }
.bag-count { min-width: 18px; height: 18px; padding: 0 5px; display: grid; place-items: center; border-radius: 999px; background: #1d1d1f; color: #fff; font-size: .7rem; }
.more-button { width: 36px; }
.menu-popover { position: absolute; top: 48px; right: max(24px, calc((100vw - 1180px) / 2)); min-width: 180px; padding: 8px; display: grid; border: 1px solid #e5e5e7; border-radius: 14px; background: rgba(255, 255, 255, .97); box-shadow: 0 12px 32px rgba(0, 0, 0, .12); }
.menu-popover a, .menu-popover button { padding: 10px 12px; border: 0; border-radius: 8px; background: transparent; color: #1d1d1f; cursor: pointer; font: inherit; text-align: left; }
.menu-popover a:hover, .menu-popover button:hover { background: #f5f5f7; }
.page-container { min-height: calc(100vh - 56px); flex: 1; }
.loading-screen { min-height: 60vh; display: grid; place-items: center; color: #6e6e73; }


.site-footer {
  padding: 40px 24px 24px;
  background: #f5f5f7;
  border-top: 1px solid #e5e5e7;
  color: #1d1d1f;
  font-family: -apple-system, BlinkMacSystemFont, 'PingFang TC', 'Noto Sans TC',
    'Microsoft JhengHei', 'Helvetica Neue', Arial, sans-serif;
}

.num {
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Noto Sans TC', Arial, sans-serif;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0;
}

.footer-grid {
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.footer-heading {
  margin: 0 0 14px;
  color: #1d1d1f;
  font-size: .75rem;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
}

.footer-links {
  display: grid;
  gap: 9px;
}

.footer-links a {
  color: #6e6e73;
  font-size: .85rem;
  text-decoration: none;
}

.footer-links a:hover {
  color: #1d1d1f;
  text-decoration: underline;
}

.footer-brand {
  display: grid;
  gap: 10px;
  justify-items: start;
}

.footer-logo {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #1d1d1f;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -.01em;
}

.footer-logo img {
  width: 24px;
  height: 24px;
  object-fit: contain;
  border-radius: 6px;
}

.footer-meta {
  margin: 0;
  color: #6e6e73;
  font-size: .8rem;
  line-height: 1.6;
}

.footer-social {
  margin-top: 6px;
  display: flex;
  gap: 10px;
}

.social-icon {
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: #1d1d1f;
  font-size: .92rem;
  text-decoration: none;
}

.social-icon:hover {
  background: #e0e0e3;
}

.footer-bottom {
  max-width: 1180px;
  margin: 28px auto 0;
  padding-top: 16px;
  border-top: 1px solid #d2d2d7;
  color: #86868b;
  font-size: .75rem;
  text-align: center;
}

@media (max-width: 700px) {
  .site-footer { padding: 32px 20px 20px; }
  .footer-grid { grid-template-columns: 1fr; gap: 28px; text-align: left; }
}

@media (max-width: 640px) {
  .site-header { padding: 0 14px; gap: 10px; }
  .brand span:last-child, .bag-label { display: none; }
  .brand { margin-right: 2px; }

  .primary-nav {
    gap: 14px;
    margin-left: 0;
    flex: 1 1 auto;
    min-width: 0;
    overflow-x: auto;
    scrollbar-width: none;
  }
  .primary-nav::-webkit-scrollbar { display: none; }
  .primary-nav a { font-size: .82rem; white-space: nowrap; }

  .menu-popover { right: 14px; }
}
</style>