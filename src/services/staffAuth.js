// Staff sign-in with Google, used by the admin login page and the router.
//
// Guests are signed in anonymously and their orders belong to that account.
// Signing in with Google replaces it, so before switching we keep the guest
// account's ID token and afterwards ask the claimOrders Cloud Function to
// move the guest's orders to whichever account the person ends up on.
import {
  GoogleAuthProvider,
  getRedirectResult,
  signInAnonymously,
  signInWithPopup,
  signInWithRedirect
} from 'firebase/auth'
import { collection, doc, getDoc, getDocs, query, setDoc, where, writeBatch } from 'firebase/firestore'
import { httpsCallable } from 'firebase/functions'
import { auth, db, functions } from 'src/services/firebase'

const GUEST_TOKEN_KEY = 'cksc_guest_token'
const REDIRECT_PENDING_KEY = 'cksc_staff_redirect_pending'

const claimOrders = httpsCallable(functions, 'claimOrders')

function storage() {
  try {
    return window.sessionStorage
  } catch {
    return null
  }
}

// Popups don't work inside the LINE in-app browser, so use a redirect there.
function isLineApp() {
  const ua = navigator.userAgent.toLowerCase()
  return ua.includes('line/') || ua.includes('liff/')
}

// True while coming back from a redirect sign-in that the login page still has to finish.
export function hasPendingRedirectSignIn() {
  return storage()?.getItem(REDIRECT_PENDING_KEY) === '1'
}

// Only follow in-app paths from ?redirect= (not //other-site.com).
export function safeRedirect(value) {
  const path = String(value || '')
  return path.startsWith('/') && !path.startsWith('//') ? path : '/admin'
}

function takeGuestToken() {
  const token = storage()?.getItem(GUEST_TOKEN_KEY) || null
  storage()?.removeItem(GUEST_TOKEN_KEY)
  return token
}

// Opens Google sign-in. Returns the user, or null when the page is about to
// redirect (LINE); finishRedirectSignIn() picks it up after the redirect.
export async function startGoogleSignIn() {
  const current = auth.currentUser
  if (current?.isAnonymous) storage()?.setItem(GUEST_TOKEN_KEY, await current.getIdToken())

  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })

  try {
    if (isLineApp()) {
      storage()?.setItem(REDIRECT_PENDING_KEY, '1')
      await signInWithRedirect(auth, provider)
      return null
    }
    return (await signInWithPopup(auth, provider)).user
  } catch (error) {
    // Still the guest: forget the saved token.
    takeGuestToken()
    storage()?.removeItem(REDIRECT_PENDING_KEY)
    throw error
  }
}

export async function finishRedirectSignIn() {
  if (!hasPendingRedirectSignIn()) return null
  storage()?.removeItem(REDIRECT_PENDING_KEY)

  let user = null
  try {
    user = (await getRedirectResult(auth))?.user || null
    return user
  } finally {
    // Cancelled or failed: still the guest, forget the saved token.
    if (!user) takeGuestToken()
  }
}

// Makes sure users/{uid} exists for an invited staff member. The first
// sign-in turns the pendingUsers invitation into a users document; the
// Firestore rules check `pendingId` against the invitation and require it to
// be deleted in the same batch.
async function linkUserAccount(user) {
  const userRef = doc(db, 'users', user.uid)
  const existingSnap = await getDoc(userRef)
  const email = (user.email || '').toLowerCase()
  const now = new Date().toISOString()

  if (existingSnap.exists()) {
    await setDoc(
      userRef,
      {
        email,
        displayName: user.displayName || existingSnap.data().displayName || '',
        photoURL: user.photoURL || '',
        updatedAt: now
      },
      { merge: true }
    )
    return
  }

  const pendingSnap = await getDocs(query(collection(db, 'pendingUsers'), where('email', '==', email)))
  if (pendingSnap.empty) return

  const pendingDoc = pendingSnap.docs[0]
  const pendingData = pendingDoc.data()

  const batch = writeBatch(db)
  batch.set(userRef, {
    email,
    displayName: user.displayName || pendingData.name || '',
    photoURL: user.photoURL || '',
    name: pendingData.name || '',
    role: pendingData.role,
    uid: user.uid,
    pending: false,
    pendingId: pendingDoc.id,
    createdAt: pendingData.createdAt || now,
    updatedAt: now
  })
  batch.delete(pendingDoc.ref)
  await batch.commit()
}

async function claim(guestToken) {
  try {
    await claimOrders(guestToken ? { guestToken } : {})
  } catch (error) {
    console.error('Failed to move orders to this account:', error)
  }
}

// Signs out and, if the person was a guest before, puts them back on a guest
// account that owns their earlier orders.
async function returnToGuest(authStore, guestToken) {
  await authStore.signOut()
  if (!guestToken) return
  try {
    await signInAnonymously(auth)
    await claim(guestToken)
  } catch (error) {
    console.error('Failed to restore guest session:', error)
  }
}

// Finishes a Google sign-in. Staff stay signed in (and take over this
// device's guest orders); anyone else, or any failure, ends signed out.
// Returns whether the account is staff.
export async function completeStaffSignIn(user, authStore) {
  const guestToken = takeGuestToken()

  try {
    await linkUserAccount(user)
    await authStore.refresh()
  } catch (error) {
    await returnToGuest(authStore, guestToken)
    throw error
  }

  if (!authStore.isManager) {
    await returnToGuest(authStore, guestToken)
    return false
  }

  // Also picks up orders this account placed before orders had an owner.
  await claim(guestToken)
  return true
}
