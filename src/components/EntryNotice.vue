<template>
  <q-dialog
    v-model="visible"
    no-route-dismiss
    aria-labelledby="entry-notice-title"
    aria-describedby="entry-notice-message"
  >
    <div class="entry-notice">
      <q-icon name="straighten" size="28px" class="notice-icon" aria-hidden="true" />
      <h2 id="entry-notice-title">尺碼提醒</h2>
      <p id="entry-notice-message">本次校慶紀念品尺碼較為特殊，建議挑選平常穿著的尺寸大兩號到三號</p>
      <button type="button" class="notice-button" autofocus @click="visible = false">
        我知道了
      </button>
    </div>
  </q-dialog>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(true)
</script>

<style scoped>
.entry-notice {
  width: 420px;
  max-width: 100%;
  padding: 32px;
  border: 1px solid var(--line);
  border-radius: 20px;
  background: var(--surface);
  color: var(--ink);
}

.notice-icon {
  color: var(--link);
}

.entry-notice h2 {
  margin: 16px 0 12px;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
}

.entry-notice p {
  margin: 0 0 24px;
  font-size: 1rem;
  line-height: 1.8;
}

.notice-button {
  width: 100%;
  min-height: 44px;
  padding: 12px 20px;
  border: 0;
  border-radius: 999px;
  background: var(--ink);
  color: var(--surface);
  cursor: pointer;
}

.notice-button:hover {
  background: #3a3a3c;
}

@media (max-width: 480px) {
  .entry-notice {
    padding: 24px;
  }
}
</style>
