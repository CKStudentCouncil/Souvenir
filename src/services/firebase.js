import { initializeApp } from 'firebase/app'
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getFunctions } from 'firebase/functions'
import { APP_CHECK_SITE_KEY } from 'shared/config'

const firebaseConfig = {
  apiKey: 'AIzaSyB8PR6m1CjfxX4JH4BEQXJcs2EjSnDssbE',
  authDomain: 'cksc-merchandis.firebaseapp.com',
  projectId: 'cksc-merchandis',
  storageBucket: 'cksc-merchandis.firebasestorage.app',
  messagingSenderId: '294251224185',
  appId: '1:294251224185:web:5b1904f929e6ced3eb08a8',
  measurementId: 'G-J8LM25YKVM'
}

export const app = initializeApp(firebaseConfig)

// Proves requests come from this website (createOrder requires it once a key is set).
if (APP_CHECK_SITE_KEY) {
  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(APP_CHECK_SITE_KEY),
    isTokenAutoRefreshEnabled: true
  })
}

export const auth = getAuth(app)
export const db = getFirestore(app)
// Cloud Functions are deployed to asia-east1 (see functions/index.js).
export const functions = getFunctions(app, 'asia-east1')
