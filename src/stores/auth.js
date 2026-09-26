import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from 'src/services/firebase'
import { ADMIN_ROLES, STAFF_ROLES } from 'shared/config'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const loading = ref(true)

  const role = computed(() => user.value?.role || null)
  // Guests are signed in anonymously when they order; that is not a staff login.
  const isLoggedIn = computed(() => !!user.value && !user.value.isAnonymous)
  const isManager = computed(() => STAFF_ROLES.includes(role.value))
  const isAdmin = computed(() => ADMIN_ROLES.includes(role.value))
  const isSuperAdmin = computed(() => role.value === 'super_admin')
  const displayName = computed(
    () => user.value?.name || user.value?.displayName || user.value?.email || '管理員'
  )

  // Loads may overlap (auth listener + refresh after login); only the latest wins.
  let loadSeq = 0

  async function loadProfile(firebaseUser) {
    const seq = ++loadSeq

    if (!firebaseUser) {
      user.value = null
      return
    }

    let profile = {}
    if (!firebaseUser.isAnonymous) {
      try {
        const snap = await getDoc(doc(db, 'users', firebaseUser.uid))
        if (snap.exists()) profile = snap.data()
      } catch (error) {
        console.error('Failed to load user profile:', error)
      }
    }

    if (seq !== loadSeq) return

    user.value = {
      email: firebaseUser.email,
      displayName: firebaseUser.displayName,
      photoURL: firebaseUser.photoURL,
      ...profile,
      uid: firebaseUser.uid,
      isAnonymous: firebaseUser.isAnonymous
    }
  }

  let initPromise = null

  function init() {
    if (!initPromise) {
      initPromise = new Promise((resolve) => {
        onAuthStateChanged(auth, async (firebaseUser) => {
          await loadProfile(firebaseUser)
          loading.value = false
          resolve()
        })
      })
    }
    return initPromise
  }

  // Re-reads users/{uid}, e.g. right after login created or activated it.
  function refresh() {
    return loadProfile(auth.currentUser)
  }

  async function signOut() {
    await firebaseSignOut(auth)
    user.value = null
  }

  return {
    user,
    loading,
    role,
    isLoggedIn,
    isManager,
    isAdmin,
    isSuperAdmin,
    displayName,
    init,
    refresh,
    signOut
  }
})
