<template>
  <div
    v-if="toast.visible"
    class="app-toast"
  >
    <span>{{ toast.message }}</span>
    <span
      v-if="toast.count > 1"
      class="app-toast-count"
    >{{ toast.count }}</span>
  </div>
</template>

<script setup>
import { useToastStore } from 'src/stores/toast'

const toast = useToastStore()
</script>

<style scoped>
.app-toast {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
  z-index: 10000;
  display: flex;
  align-items: center;
  gap: 8px;
}

.app-toast-count {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2px 6px;
  font-size: 0.8em;
  min-width: 20px;
  text-align: center;
}
</style>
