<template>
  <div class="auth-page">
    <div class="auth-card">
      <h1 class="auth-title">註冊/登入</h1>

      <h2 class="auth-subtitle">使用 Google 帳號登入或註冊</h2>

      <div
        v-if="isInLineApp"
        class="warn-box"
      >
        <strong>⚠️ LINE 用戶提示</strong>
        <p>Line 用戶請使用外部瀏覽器(例：Safari, Google Chrome...)，否則無法登入成功</p>
        <button
          type="button"
          class="warn-btn"
          @click="openExternal"
        >
          開啟外部瀏覽器
        </button>
      </div>

      <div class="warn-box">
        <strong>⚠️ CK APP 用戶提示</strong>
        <p>CK APP 用戶請使用外部瀏覽器(例：Safari, Google Chrome...)，否則無法登入成功</p>
        <button
          type="button"
          class="warn-btn"
          @click="openExternal"
        >
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
          <svg
            class="google-icon"
            viewBox="0 0 48 48"
          >
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
        <input
          v-model="agree"
          type="checkbox"
        >
        我已閱讀並同意 <router-link to="/terms">使用者條款</router-link>
      </label>
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
.auth-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 20px;
  align-items: flex-start;
}

.auth-card {
  background: white;
  border-radius: 12px;
  padding: 32px 24px;
  max-width: 380px;
  width: 100%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  text-align: center;
}

.auth-title {
  margin: 0 0 16px;
  color: #333;
  font-size: 1.5rem;
}

.auth-subtitle {
  margin: 0 0 24px;
  color: #666;
  font-size: 1rem;
  font-weight: normal;
}

.warn-box {
  margin-bottom: 16px;
  padding: 12px;
  background: #ffe7e7;
  border: 1px solid #ff0000;
  border-radius: 8px;
  font-size: 0.85rem;
  color: #a10d0d;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.warn-box p {
  margin: 8px 0 0;
  line-height: 1.5;
  width: 100%;
}

.warn-btn {
  display: flex;
  margin-top: 8px;
  padding: 8px 12px;
  background: #dd2476;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.85rem;
  cursor: pointer;
}

.google-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 20px;
  border-radius: 8px;
  border: 1px solid #dadce0;
  background: white;
  color: #3c4043;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.google-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.google-icon {
  width: 20px;
  height: 20px;
  margin-right: 12px;
}

.google-spinner {
  width: 20px;
  height: 20px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #3c4043;
  border-radius: 50%;
  margin-right: 12px;
  animation: spin 1s linear infinite;
}

.terms-label {
  margin-top: 20px;
  font-size: 0.9rem;
  color: #555;
  text-align: center;
  display: block;
  cursor: pointer;
}

.terms-label input {
  margin-right: 8px;
  cursor: pointer;
}

.terms-label a {
  color: #667eea;
  font-weight: bold;
  text-decoration: none;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
