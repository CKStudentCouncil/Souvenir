<template>
  <div class="scan-page">
    <button type="button" class="back-link" @click="router.push({ name: 'admin' })">
      ← 返回訂單列表
    </button>

    <div class="title-row">
      <h1>掃描 QR Code</h1>
      <button
        v-if="state === 'scanning' && cameras.length > 1"
        type="button"
        class="btn-outline"
        @click="switchCamera"
      >
        <q-icon name="cameraswitch" size="18px" />
        切換鏡頭
      </button>
    </div>

    <div class="viewfinder" :class="`is-${tone}`">
      <div class="camera">
        <video
          ref="video"
          muted
          playsinline
          autoplay
          aria-label="相機畫面"
        />
        <div v-show="state === 'scanning'" class="frame" aria-hidden="true">
          <span class="corner top-left" />
          <span class="corner top-right" />
          <span class="corner bottom-left" />
          <span class="corner bottom-right" />
        </div>
        <div v-if="state === 'error'" class="overlay">
          <p role="alert">{{ errorMessage }}</p>
          <button type="button" class="btn btn-light" @click="start()">重新開啟相機</button>
        </div>
      </div>
      <p class="frame-status" role="status" aria-live="polite">{{ statusText }}</p>
    </div>

    <form class="manual" novalidate @submit.prevent="openManual">
      <label for="manual-order-id">無法掃描時，輸入訂單編號</label>
      <div class="manual-row">
        <input
          id="manual-order-id"
          v-model="manualId"
          autocomplete="off"
          autocapitalize="characters"
          spellcheck="false"
          enterkeyhint="go"
          placeholder="CKS202611050001-4A9C7E21B8D3"
          :aria-invalid="!!manualError"
          :aria-describedby="manualError ? 'manual-error' : undefined"
          @input="manualError = ''"
        >
        <button type="submit" class="btn">開啟訂單</button>
      </div>
      <p v-if="manualError" id="manual-error" class="manual-error" role="alert">{{ manualError }}</p>
    </form>

    <details v-if="state === 'scanning' && cameraInfo" class="camera-details">
      <summary>相機資訊</summary>
      <p>{{ cameraInfo }}</p>
    </details>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { SITE_URL } from 'shared/config'
import { cameraErrorMessage, listCameras, startQrScanner } from 'src/utils/qrScanner'
import { ORDER_ID_PATTERN, parseOrderQr } from 'src/utils/orderQr'

const router = useRouter()

// The camera picked with 切換鏡頭, reused on this device's next visits
const CAMERA_KEY = 'cksc.souvenirScanCamera'

// How long scanning runs without a read before the focus tip replaces the
// aiming prompt; a code that reads at once never shows it
const HELP_DELAY_MS = 6000

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
// what the frame shows: idle | invalid (not an order code) | found
const tone = ref('idle')
const helpShown = ref(false)
const manualId = ref('')
const manualError = ref('')
const cameras = ref([])
const cameraInfo = ref('')

const statusText = computed(() => {
  if (state.value === 'error') return '也可以在下方輸入訂單編號'
  if (state.value !== 'scanning') return '正在開啟相機…'
  if (tone.value === 'found') return '已讀取，正在開啟訂單…'
  if (tone.value === 'invalid') return '這不是本網站的訂單 QR Code'
  return helpShown.value
    ? '讀不到？拿遠一點（約 20–30 公分）讓鏡頭對焦，或請訂購者調亮螢幕'
    : '對準 QR Code，讀到會自動開啟訂單'
})

let stopScanner = null
let currentCamera = ''
let infoTimer = 0
let helpTimer = 0
let startSequence = 0
let lastInvalid = ''
let invalidTimer = 0
let opening = false

async function start(deviceId = savedCamera()) {
  const sequence = ++startSequence
  stopScanner?.()
  stopScanner = null
  clearInterval(infoTimer)
  clearTimeout(helpTimer)
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
    if (!helpShown.value) helpTimer = setTimeout(() => { helpShown.value = true }, HELP_DELAY_MS)
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
  clearTimeout(helpTimer)
}

function switchCamera() {
  const list = cameras.value
  const index = list.findIndex((camera) => camera.deviceId === currentCamera)
  const next = list[(index + 1) % list.length]
  if (!next) return
  saveCamera(next.deviceId)
  start(next.deviceId)
}

function showInvalid() {
  tone.value = 'invalid'
  clearTimeout(invalidTimer)
  invalidTimer = setTimeout(() => {
    if (tone.value === 'invalid') tone.value = 'idle'
    lastInvalid = ''
  }, 3000)
}

// The camera keeps running until the page unmounts, so the code just read
// stays in view, framed green, while the order page loads
async function openOrder(orderId) {
  if (opening) return
  opening = true
  let failure
  try {
    failure = await router.push({ name: 'admin-order-detail', params: { id: orderId } })
  } catch (error) {
    failure = error
  }
  if (failure) {
    opening = false
    tone.value = 'idle'
  }
}

function handleCode(text) {
  if (opening) return
  const orderId = parseOrderQr(text, origins)
  if (!orderId) {
    // the same wrong code stays in view for many frames; say it once
    if (text !== lastInvalid) {
      lastInvalid = text
      showInvalid()
    }
    return
  }
  clearTimeout(invalidTimer)
  tone.value = 'found'
  navigator.vibrate?.(60)
  openOrder(orderId)
}

function openManual() {
  const orderId = manualId.value.normalize('NFKC').trim().toUpperCase()
  if (!ORDER_ID_PATTERN.test(orderId)) {
    manualError.value = '格式不符。訂單編號是英文字母加 12 位數字，例如 CKS202611050001-4A9C7E21B8D3。'
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
  clearTimeout(invalidTimer)
  stop()
})
</script>

<style scoped>
@import 'src/css/scanpage.scss';
</style>
