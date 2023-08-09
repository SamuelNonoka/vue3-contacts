<script lang="ts" setup>
import { computed } from 'vue'
import useSnackbarStore from "@/store/snackbar.store"


const snackbarStore = computed(() => useSnackbarStore())
const visible = computed(() => snackbarStore.value.visibleState)
const color = computed(() => snackbarStore.value.colorState)
const text = computed(() => snackbarStore.value.textState)
</script>

<template>
  <v-snackbar v-model="visible" :color="color">
    {{ text }}
  </v-snackbar>
</template>