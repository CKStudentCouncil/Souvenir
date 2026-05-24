<template>
  <div class="main-layout">
    <header class="main-header">
      <button
        type="button"
        class="icon-btn"
        aria-label="選單"
        @click="drawerOpen = true"
      >
        <q-icon name="menu" size="1.5rem" />
      </button>

      <span class="main-title">建中校慶紀念品訂購系統</span>

      <button
        type="button"
        class="icon-btn"
        aria-label="購物車"
        @click="$router.push('/cart')"
      >
        <q-icon name="shopping_bag" size="1.5rem" />
      </button>
    </header>

    <aside
      v-show="drawerOpen"
      class="drawer"
    >
      <button
        type="button"
        class="drawer-close"
        @click="drawerOpen = false"
      >
        &times;
      </button>

      <template v-if="auth.isAdmin">
        <button
          v-for="item in adminDrawerItems"
          :key="item.path"
          type="button"
          class="drawer-btn"
          @click="navigate(item.path)"
        >
          {{ item.label }}
        </button>
        <div class="drawer-user">
          <img
            :src="auth.user?.photoURL || 'https://via.placeholder.com/48?text=👤'"
            alt="User Avatar"
            class="drawer-avatar"
          >
          <div>
            <p class="drawer-name">{{ auth.user?.displayName || '管理員' }}</p>
            <p class="drawer-email">{{ auth.user?.email }}</p>
          </div>
        </div>
        <button
          type="button"
          class="drawer-btn drawer-btn--dark"
          @click="handleSignOut"
        >
          登出
        </button>
      </template>

      <template v-else>
        <button
          v-for="item in guestDrawerItems"
          :key="item.path"
          type="button"
          class="drawer-btn"
          @click="navigate(item.path)"
        >
          {{ item.label }}
        </button>
        <button
          type="button"
          class="drawer-btn"
          @click="navigate('/admin/login')"
        >
          管理員登入
        </button>
      </template>
    </aside>

    <div
      v-if="drawerOpen"
      class="drawer-overlay"
      @click="drawerOpen = false"
    />

    <main class="main-content">
      <router-view
        v-if="!auth.loading"
        :key="$route.fullPath"
      />
      <div
        v-else
        class="loading-screen"
      >
        <p>Loading...</p>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from 'src/stores/auth'
import { useToastStore } from 'src/stores/toast'

const router = useRouter()
const auth = useAuthStore()
const toast = useToastStore()
const drawerOpen = ref(false)

const guestDrawerItems = [
  { path: '/', label: '首頁' },
  { path: '/cart', label: '購物車' },
  { path: '/orders', label: '我的訂單' },
  { path: '/terms', label: '使用者條款' },
  { path: '/about', label: '關於' }
]

const adminDrawerItems = [
  { path: '/', label: '首頁' },
  { path: '/cart', label: '購物車' },
  { path: '/orders', label: '我的訂單' },
  { path: '/admin', label: '後台管理' },
  { path: '/admin/account', label: '帳號管理' },
  { path: '/terms', label: '使用者條款' },
  { path: '/about', label: '關於' }
]

onMounted(() => {
  if (auth.loading) auth.init()
})

function navigate(path) {
  drawerOpen.value = false
  router.push(path)
}

async function handleSignOut() {
  await auth.signOut()
  toast.show('已登出')
  drawerOpen.value = false
  router.push('/')
}
</script>

<style scoped>
.main-layout {
  min-height: 100vh;
  background: linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%);
}

.main-header {
  padding: 10px 20px;
  margin-bottom: 32px;
  background: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.icon-btn {
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: inherit;
}

.main-title {
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 2px;
}

.drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 260px;
  height: 100%;
  background: #fff;
  box-shadow: 2px 0 12px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  flex-direction: column;
  z-index: 1000;
}

.drawer-close {
  align-self: flex-end;
  margin-bottom: 20px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.drawer-btn {
  padding: 10px 16px;
  margin-bottom: 12px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(90deg, #ff512f 0%, #dd2476 100%);
  color: white;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  text-align: left;
}

.drawer-btn--dark {
  margin-top: 20px;
  background: linear-gradient(90deg, #232526 0%, #414345 100%);
  margin-bottom: 40px;
}

.drawer-user {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: auto;
  padding: 12px;
  border-radius: 12px;
  background: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.drawer-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ddd;
}

.drawer-name {
  margin: 0;
  font-weight: bold;
  font-size: 1rem;
  color: #333;
}

.drawer-email {
  margin: 0;
  font-size: 0.85rem;
  color: #666;
}

.drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 900;
}

.main-content {
  max-width: 900px;
  margin: 16px auto 0;
  padding: 0 12px 40px;
}

.loading-screen {
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-screen p {
  font-size: 1.2rem;
  color: #333;
}
</style>
