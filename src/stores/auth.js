import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from 'src/boot/firebase'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const loading = ref(true)

  const isAdmin = computed(() => user.value?.isAdmin === true)
  const isLoggedIn = computed(() => !!user.value)

  let initPromise = null

  function init() {
    if (initPromise) return initPromise
    initPromise = new Promise((resolve) => {
      onAuthStateChanged(auth, async (currentUser) => {
        if (currentUser) {
          try {
            const userRef = doc(db, 'users', currentUser.uid)
            const userDoc = await getDoc(userRef)
            const isAdminRole =
              userDoc.exists() && userDoc.data().role === 'admin'
            user.value = { ...currentUser, isAdmin: isAdminRole }
          } catch {
            user.value = { ...currentUser, isAdmin: false }
          }
        } else {
          user.value = null
        }
        loading.value = false
        resolve()
      })
    })
    return initPromise
  }

  async function signOut() {
    await firebaseSignOut(auth)
    user.value = null
  }

  return { user, loading, isAdmin, isLoggedIn, init, signOut }
})
