<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppSnackbar from '@/app/shared-components/snackbar/AppSnackbar.vue'
</script>

<template>
  <v-app class="app">
    <RouterView />
    <app-snackbar />
  </v-app>
</template>

<style scoped>
.app {
  width: 100%;
  background-color: transparent;
}
</style>