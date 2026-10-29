import * as functions from 'firebase-functions'
import { initializeApp } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

initializeApp()

export const db = getFirestore()

export const { HttpsError } = functions.https

// A new builder per function: FunctionBuilder.runWith() changes the builder
// it is called on, so a shared one would leak secrets/timeouts between functions.
export function inTaiwan(options = {}) {
  return functions.region('asia-east1').runWith(options)
}

export async function getRole(uid) {
  const snap = await db.collection('users').doc(uid).get()
  return snap.exists ? snap.data()?.role || null : null
}

export async function assertRole(context, roles) {
  if (!context.auth) {
    throw new HttpsError('unauthenticated', '請先登入')
  }
  if (!roles.includes(await getRole(context.auth.uid))) {
    throw new HttpsError('permission-denied', '無管理員權限')
  }
}
