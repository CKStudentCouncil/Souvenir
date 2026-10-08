<template>
  <router-view />
  <EntryNotice />
  <AppToast />
</template>

<script setup>
import AppToast from 'components/AppToast.vue'
import EntryNotice from 'components/EntryNotice.vue'
</script>
