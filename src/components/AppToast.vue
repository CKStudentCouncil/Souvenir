<template>
  <transition name="toast">
    <div
      v-if="toast.visible"
      class="app-toast"
    >
      <span class="toast-message">{{ toast.message }}</span>
      <span
        v-if="toast.count > 1"
        class="toast-count num"
      >{{ toast.count }}</span>
    </div>
  </transition>
</template>

<script setup>
import { useToastStore } from 'src/stores/toast'

const toast = useToastStore()
</script>

<style scoped>
.app-toast {
  position: fixed;
  left: 50%;
  bottom: 32px;
  z-index: 10000;
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 12px 20px;
  border-radius: 999px;
  background: #1d1d1f;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'PingFang TC', 'Noto Sans TC',
    'Microsoft JhengHei', 'Helvetica Neue', Arial, sans-serif;
  font-size: .88rem;
  line-height: 1.5;
  box-shadow: 0 8px 24px rgba(0, 0, 0, .18);
  transform: translateX(-50%);
}

.toast-message { white-space: pre-line; }

.toast-count {
  flex-shrink: 0;
  min-width: 20px;
  padding: 1px 7px;
  border-radius: 999px;
  background: rgba(255, 255, 255, .16);
  color: #fff;
  font-size: .75rem;
  font-weight: 700;
  text-align: center;
  font-variant-numeric: tabular-nums;
}

.toast-enter-active,
.toast-leave-active {
  transition: opacity .2s ease, transform .2s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(8px);
}

@media (max-width: 480px) {
  .app-toast {
    max-width: calc(100vw - 32px);
    padding: 11px 16px;
    font-size: .85rem;
  }
}
</style>