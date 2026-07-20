<template>
  <div class="auth-page">
    <div class="auth-shell">
      <header class="auth-header">
        <p class="eyebrow">帳號</p>
        <h1>登入 / 註冊</h1>
        <p class="auth-subtitle">使用 Google 帳號，快速登入或建立新帳號。</p>
      </header>

      <div class="auth-card">
        <div v-if="isInLineApp" class="notice">
          <p class="notice-title">LINE 用戶請注意</p>
          <p>請改用外部瀏覽器開啟（例如 Safari、Chrome），否則將無法完成登入。</p>
          <button type="button" class="notice-btn" @click="openExternal">
            開啟外部瀏覽器
          </button>
        </div>

        <div class="notice">
          <p class="notice-title">CK APP 用戶請注意</p>
          <p>請改用外部瀏覽器開啟（例如 Safari、Chrome），否則將無法完成登入。</p>
          <button type="button" class="notice-btn" @click="openExternal">
            開啟外部瀏覽器
          </button>
        </div>

        <button
          type="button"
          class="google-btn"
          :disabled="isLoading"
          @click="handleGoogleAuth"
        >
          <template v-if="isLoading">
            <span class="google-spinner" />
            處理中...
          </template>
          <template v-else>
            <svg class="google-icon" viewBox="0 0 48 48">
              <path
                d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
                fill="#4285F4"
              />
              <path
                d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
                fill="#34A853"
              />
              <path
                d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"
                fill="#FBBC05"
              />
              <path
                d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
                fill="#EA4335"
              />
            </svg>
            Sign in with Google
          </template>
        </button>

        <label class="terms-label">
          <input v-model="agree" type="checkbox">
          我已閱讀並同意 <router-link to="/terms">使用者條款</router-link>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult
} from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { auth, db } from 'src/boot/firebase'
import { useAuthStore } from 'src/stores/auth'
import { useToastStore } from 'src/stores/toast'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()
const toast = useToastStore()

const agree = ref(false)
const isLoading = ref(false)
const isInLineApp = ref(false)

function isLineApp() {
  const ua = navigator.userAgent.toLowerCase()
  return ua.includes('line/') || ua.includes('liff/')
}

function openExternal() {
  window.open('https://souvenir.cksc.tw', '_blank')
}

async function ensureUserDoc(user) {
  const userRef = doc(db, 'users', user.uid)
  const userSnap = await getDoc(userRef)
  if (!userSnap.exists()) {
    await setDoc(userRef, {
      email: user.email,
      displayName: user.displayName || '',
      photoURL: user.photoURL || '',
      role: 'user',
      status: 'active',
      profileCompleted: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    })
  }
}

async function afterLogin(user) {
  await ensureUserDoc(user)
  await authStore.init()
  if (!authStore.isAdmin) {
    toast.show('此帳號無管理員權限')
    await authStore.signOut()
    return
  }
  toast.show('登入成功！')
  const redirect = route.query.redirect || '/admin'
  router.replace(String(redirect))
}

onMounted(async () => {
  isInLineApp.value = isLineApp()
  try {
    isLoading.value = true
    const result = await getRedirectResult(auth)
    if (result?.user) await afterLogin(result.user)
  } catch (error) {
    console.error('Redirect result error:', error)
    if (error.code === 'auth/account-exists-with-different-credential') {
      toast.show('此帳號已使用其他方式註冊')
    } else if (error.code === 'auth/popup-closed-by-user') {
      toast.show('登入已取消')
    } else {
      toast.show('Google 認證失敗，請重試')
    }
  } finally {
    isLoading.value = false
  }
})

async function handleGoogleAuth() {
  if (!agree.value) {
    toast.show('請先閱讀並同意使用者條款')
    return
  }

  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })

  try {
    isLoading.value = true
    if (isInLineApp.value) {
      await signInWithRedirect(auth, provider)
    } else {
      const result = await signInWithPopup(auth, provider)
      await afterLogin(result.user)
      isLoading.value = false
    }
  } catch (error) {
    console.error('Google Auth error:', error)
    if (error.code === 'auth/popup-closed-by-user') {
      toast.show('Google 登入被取消')
    } else if (error.code === 'auth/popup-blocked') {
      toast.show('彈出視窗被阻擋，請允許彈出視窗後重試')
    } else if (error.code === 'auth/account-exists-with-different-credential') {
      toast.show('此帳號已使用其他方式註冊')
    } else if (error.code !== 'auth/cancelled-popup-request') {
      toast.show('Google 認證失敗，請重試')
    }
    isLoading.value = false
  }
}
</script>

<style scoped>
/*
  排版與視覺統一原則（與 StorefrontPage / OrderDetailPage / OrdersPage 共用同一套邏輯）：
  1. 字體堆疊涵蓋中英文，避免中文落回系統預設字體造成字重不一致。
  2. 大標題字距收斂到接近 0（拉丁字的深負字距套在中文上會重疊），中文行距拉寬到 1.6 左右。
  3. 用 eyebrow + 大標題 的頁首結構，與商店首頁、訂單頁維持同一套視覺語言，
     而不是讓登入頁自成一格。
  4. 卡片維持細邊框（#e5e5e7）＋大圓角（20px），不用陰影堆疊出重量感。
  5. 提示區塊改用低飽和暖色 + 簡短標題，取代驚嘆號＋粗體的警告感；
     按鈕統一膠囊造型；連結色統一用 #06c。
  6. Google 登入按鈕維持品牌規範樣式（白底、細邊框、彩色 G 圖示）。
*/

.auth-page {
  min-height: 100vh;
  padding: 96px 24px 96px;
  display: flex;
  justify-content: center;
  background: radial-gradient(circle at 50% 0%, #fff 0%, #f5f5f7 65%);
  font-family: -apple-system, BlinkMacSystemFont, 'PingFang TC', 'Noto Sans TC',
    'Microsoft JhengHei', 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.65;
  color: #1d1d1f;
}

.auth-shell {
  max-width: 420px;
  width: 100%;
}

.auth-header {
  margin-bottom: 28px;
  text-align: center;
}

.eyebrow {
  margin: 0 0 12px;
  color: #6e6e73;
  font-size: .72rem;
  font-weight: 700;
  letter-spacing: .06em;
}

h1 {
  margin: 0 0 10px;
  font-size: clamp(1.9rem, 5vw, 2.5rem);
  line-height: 1.2;
  letter-spacing: -.01em;
  font-weight: 700;
}

.auth-subtitle {
  margin: 0;
  color: #6e6e73;
  font-size: .95rem;
  line-height: 1.6;
}

.auth-card {
  background: #fff;
  border: 1px solid #e5e5e7;
  border-radius: 20px;
  padding: 28px 24px;
}

.notice {
  margin-bottom: 14px;
  padding: 16px;
  border: 1px solid #f0dcc0;
  border-radius: 14px;
  background: #fff8f0;
  text-align: left;
}

.notice-title {
  margin: 0 0 4px;
  color: #92400e;
  font-size: .85rem;
  font-weight: 700;
}

.notice p:not(.notice-title) {
  margin: 0 0 12px;
  color: #92400e;
  font-size: .83rem;
  line-height: 1.55;
}

.notice-btn {
  padding: 8px 16px;
  border: 1px solid #e5e5e7;
  border-radius: 999px;
  background: #fff;
  color: #1d1d1f;
  font-size: .83rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
}

.google-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 4px;
  padding: 14px 20px;
  border: 1px solid #e5e5e7;
  border-radius: 999px;
  background: #fff;
  color: #3c4043;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background .15s ease;
}

.google-btn:hover:not(:disabled) { background: #f9f9fa; }
.google-btn:disabled { opacity: .7; cursor: not-allowed; }

.google-icon { width: 20px; height: 20px; margin-right: 12px; }

.google-spinner {
  width: 20px;
  height: 20px;
  margin-right: 12px;
  border: 3px solid #ececee;
  border-top: 3px solid #3c4043;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.terms-label {
  display: block;
  margin-top: 20px;
  color: #6e6e73;
  font-size: .85rem;
  line-height: 1.6;
  text-align: center;
  cursor: pointer;
}

.terms-label input { margin-right: 8px; cursor: pointer; }

.terms-label a {
  color: #06c;
  font-weight: 600;
  text-decoration: none;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@media (max-width: 480px) {
  .auth-page { padding: 64px 16px; }
  .auth-card { padding: 24px 20px; }
}
</style>