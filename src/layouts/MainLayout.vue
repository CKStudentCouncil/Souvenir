<template>
  <div class="app-shell">
    <header class="site-header">
      <router-link to="/" class="brand" aria-label="建中紀念品首頁">
        <span class="brand-mark">CK</span>
        <span>CK Souvenir 2.0</span>
      </router-link>

      <nav class="primary-nav" aria-label="主要導覽">
        <router-link to="/" exact-active-class="is-active">商品</router-link>
        <router-link to="/orders" active-class="is-active">我的訂單</router-link>
        <router-link to="/about" active-class="is-active">關於我們</router-link>
      </nav>

      <div class="header-actions">
        <router-link to="/cart" class="bag-link" aria-label="開啟購物袋">
          <q-icon name="shopping_bag" size="1.2rem" />
          <span class="bag-label">購物袋</span>
          <span v-if="itemCount" class="bag-count">{{ itemCount }}</span>
        </router-link>
        <button
          class="more-button"
          type="button"
          aria-label="更多選項"
          @click="menuOpen = !menuOpen"
        >
          <q-icon name="more_horiz" size="1.35rem" />
        </button>
      </div>

      <div v-if="menuOpen" class="menu-popover">
        <router-link to="/terms" @click="menuOpen = false">使用條款與隱私權</router-link>
        <router-link v-if="auth.isAdmin" to="/admin" @click="menuOpen = false">管理後台</router-link>
        <router-link v-if="auth.isAdmin" to="/admin/account" @click="menuOpen = false">帳號管理</router-link>
        <router-link v-else to="/admin/login" @click="menuOpen = false">團隊登入</router-link>
        <button v-if="auth.isAdmin" type="button" @click="handleSignOut">登出</button>
      </div>
    </header>

    <main class="page-container">
      <router-view v-if="!auth.loading" :key="$route.fullPath" />
      <div v-else class="loading-screen" role="status">正在為你準備商品…</div>
    </main>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from 'src/stores/auth'
import { useCartStore } from 'src/stores/cart'
import { useToastStore } from 'src/stores/toast'

const router = useRouter()
const auth = useAuthStore()
const cart = useCartStore()
const toast = useToastStore()
const menuOpen = ref(false)

const itemCount = computed(() =>
  cart.cartItems.reduce((total, item) => total + item.quantity, 0)
)

onMounted(() => {
  if (auth.loading) auth.init()
})

async function handleSignOut() {
  await auth.signOut()
  menuOpen.value = false
  toast.show('你已安全登出。')
  router.push('/')
}
</script>

<style scoped>
.app-shell { min-height: 100vh; background: #f5f5f7; color: #1d1d1f; }
.site-header { position: sticky; top: 0; z-index: 50; height: 56px; padding: 0 max(24px, calc((100vw - 1180px) / 2)); display: flex; align-items: center; gap: 32px; background: rgba(255, 255, 255, .78); border-bottom: 1px solid rgba(0, 0, 0, .08); backdrop-filter: saturate(180%) blur(18px); }
.brand { display: inline-flex; align-items: center; gap: 9px; color: inherit; font-weight: 650; letter-spacing: -.02em; text-decoration: none; white-space: nowrap; }
.brand-mark { width: 25px; height: 25px; display: grid; place-items: center; border-radius: 8px; background: #1d1d1f; color: #fff; font-size: .68rem; font-weight: 750; letter-spacing: -.05em; }
.primary-nav { display: flex; align-items: center; gap: 24px; margin-left: auto; }
.primary-nav a, .menu-popover a { color: #6e6e73; font-size: .9rem; text-decoration: none; }
.primary-nav a:hover, .primary-nav .is-active { color: #1d1d1f; }
.header-actions { display: flex; align-items: center; gap: 8px; }
.bag-link, .more-button { min-height: 36px; display: inline-flex; align-items: center; justify-content: center; gap: 6px; border: 0; border-radius: 999px; background: transparent; color: #1d1d1f; cursor: pointer; font: inherit; text-decoration: none; }
.bag-link { padding: 0 11px; border: 1px solid #e5e5e7; background: #fff; font-size: .86rem; }
.bag-count { min-width: 18px; height: 18px; padding: 0 5px; display: grid; place-items: center; border-radius: 999px; background: #1d1d1f; color: #fff; font-size: .7rem; }
.more-button { width: 36px; }
.menu-popover { position: absolute; top: 48px; right: max(24px, calc((100vw - 1180px) / 2)); min-width: 180px; padding: 8px; display: grid; border: 1px solid #e5e5e7; border-radius: 14px; background: rgba(255, 255, 255, .97); box-shadow: 0 12px 32px rgba(0, 0, 0, .12); }
.menu-popover a, .menu-popover button { padding: 10px 12px; border: 0; border-radius: 8px; background: transparent; color: #1d1d1f; cursor: pointer; font: inherit; text-align: left; }
.menu-popover a:hover, .menu-popover button:hover { background: #f5f5f7; }
.page-container { min-height: calc(100vh - 56px); }
.loading-screen { min-height: 60vh; display: grid; place-items: center; color: #6e6e73; }
@media (max-width: 640px) { .site-header { padding: 0 16px; gap: 12px; } .brand span:last-child, .primary-nav, .bag-label { display: none; } .menu-popover { right: 16px; } .brand { margin-right: auto; } }
</style>
