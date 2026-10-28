<template>
  <div class="scan-page">
    <button type="button" class="back-link" @click="router.push({ name: 'admin' })">
      ← 返回訂單列表
    </button>

    <div class="page-heading">
      <p class="eyebrow">後台管理 · 現場取貨</p>
      <h1>掃描訂單 QR Code</h1>
      <p class="lead">對準訂購者的 QR Code，讀到後會自動開啟訂單。</p>
    </div>

    <div class="viewfinder">
      <video
        ref="video"
        muted
        playsinline
        autoplay
        aria-label="相機畫面"
      />
      <div v-if="state === 'scanning'" class="frame" aria-hidden="true" />
      <p v-if="state === 'starting'" class="overlay">正在開啟相機…</p>
      <div v-else-if="state === 'error'" class="overlay">
        <p role="alert">{{ errorMessage }}</p>
        <button type="button" class="btn" @click="start()">重新開啟相機</button>
      </div>
    </div>

    <p class="scan-notice" role="status" aria-live="polite">{{ notice }}</p>

    <div v-if="state === 'scanning'" class="camera-row">
      <p class="camera-hint">畫面模糊時，把手機拿遠一點（約 20–30 公分）讓鏡頭對焦；仍讀不到時請訂購者調高螢幕亮度。</p>
      <button v-if="cameras.length > 1" type="button" class="btn-outline" @click="switchCamera">
        切換鏡頭
      </button>
    </div>
    <p v-if="state === 'scanning' && cameraInfo" class="camera-info">{{ cameraInfo }}</p>

    <form class="manual" @submit.prevent="openManual">
      <label for="manual-order-id">無法掃描時，輸入訂單編號</label>
      <div class="manual-row">
        <input
          id="manual-order-id"
          v-model="manualId"
          autocomplete="off"
          autocapitalize="characters"
          spellcheck="false"
          placeholder="例如 CKS202611050001-4A9C7E21B8D3"
          :aria-invalid="!!manualError"
        >
        <button type="submit" class="btn">開啟訂單</button>
      </div>
      <p v-if="manualError" class="manual-error" role="alert">{{ manualError }}</p>
    </form>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { SITE_URL } from 'shared/config'
import { cameraErrorMessage, listCameras, startQrScanner } from 'src/utils/qrScanner'
import { ORDER_ID_PATTERN, parseOrderQr } from 'src/utils/orderQr'

const router = useRouter()

// The camera picked with 切換鏡頭, reused on this device's next visits
const CAMERA_KEY = 'cksc.souvenirScanCamera'

function savedCamera() {
  try {
    return localStorage.getItem(CAMERA_KEY) || ''
  } catch {
    return ''
  }
}

function saveCamera(deviceId) {
  try {
    localStorage.setItem(CAMERA_KEY, deviceId)
  } catch {
    // ignore
  }
}

// Emailed QR codes point at the production site, the ones on 我的訂單 at the
// origin they were drawn on; accept both so a development frontend works too
const origins = [...new Set([new URL(SITE_URL).origin, window.location.origin])]

const video = ref(null)
// starting | scanning | paused (page hidden) | error
const state = ref('starting')
const errorMessage = ref('')
const notice = ref('')
const manualId = ref('')
const manualError = ref('')
const cameras = ref([])
const cameraInfo = ref('')

let stopScanner = null
let currentCamera = ''
let infoTimer = 0
let startSequence = 0
let lastInvalid = ''
let noticeTimer = 0

async function start(deviceId = savedCamera()) {
  const sequence = ++startSequence
  stopScanner?.()
  stopScanner = null
  clearInterval(infoTimer)
  state.value = 'starting'

  try {
    let scanner
    try {
      scanner = await startQrScanner(video.value, handleCode, { deviceId })
    } catch (error) {
      // the saved camera is gone (other phone, unplugged): use the default
      if (!deviceId || sequence !== startSequence) throw error
      saveCamera('')
      scanner = await startQrScanner(video.value, handleCode)
    }
    if (sequence !== startSequence) {
      scanner.stop()
      return
    }
    stopScanner = scanner.stop
    currentCamera = scanner.deviceId
    state.value = 'scanning'
    cameraInfo.value = scanner.info()
    // the size is known once frames arrive, and the decoder can change
    infoTimer = setInterval(() => { cameraInfo.value = scanner.info() }, 1000)
    listCameras().then((list) => {
      if (sequence === startSequence) cameras.value = list
    }).catch(() => {})
  } catch (error) {
    if (sequence !== startSequence) return
    console.error('Camera failed to start', error)
    errorMessage.value = cameraErrorMessage(error)
    state.value = 'error'
  }
}

function stop() {
  startSequence++
  stopScanner?.()
  stopScanner = null
  clearInterval(infoTimer)
}

function switchCamera() {
  const list = cameras.value
  const index = list.findIndex((camera) => camera.deviceId === currentCamera)
  const next = list[(index + 1) % list.length]
  if (!next) return
  saveCamera(next.deviceId)
  start(next.deviceId)
}

function showNotice(text) {
  notice.value = text
  clearTimeout(noticeTimer)
  noticeTimer = setTimeout(() => {
    notice.value = ''
    lastInvalid = ''
  }, 3000)
}

function openOrder(orderId) {
  stop()
  router.push({ name: 'admin-order-detail', params: { id: orderId } })
}

function handleCode(text) {
  const orderId = parseOrderQr(text, origins)
  if (!orderId) {
    // the same wrong code stays in view for many frames; say it once
    if (text !== lastInvalid) {
      lastInvalid = text
      showNotice('這不是本網站的訂單 QR Code')
    }
    return
  }
  navigator.vibrate?.(60)
  openOrder(orderId)
}

function openManual() {
  const orderId = manualId.value.normalize('NFKC').trim().toUpperCase()
  if (!ORDER_ID_PATTERN.test(orderId)) {
    manualError.value = '訂單編號格式不正確'
    return
  }
  manualError.value = ''
  openOrder(orderId)
}

// Phones stop the camera in the background; restart it on return
function onVisibilityChange() {
  if (document.hidden) {
    if (state.value === 'starting' || state.value === 'scanning') {
      stop()
      state.value = 'paused'
    }
  } else if (state.value === 'paused') {
    start(currentCamera)
  }
}

onMounted(() => {
  document.addEventListener('visibilitychange', onVisibilityChange)
  start()
})

onBeforeUnmount(() => {
  document.removeEventListener('visibilitychange', onVisibilityChange)
  clearTimeout(noticeTimer)
  stop()
})
</script>

<style scoped>
@import 'src/css/scanpage.scss';
</style>
