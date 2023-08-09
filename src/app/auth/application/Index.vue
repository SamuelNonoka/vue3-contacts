<script lang="ts" setup>
import AuthForm from './components/AuthForm.vue'
</script>

<template>
  <main class="auth">
    <v-card class="auth-card" light>
      <v-card-title class="text-center">
        Login
      </v-card-title>
      
      <div class="pa-4">
        <auth-form />
      </div>
    </v-card>
  </main>
</template>

<style scoped>
.auth {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.auth-card {
  width: 500px;
  max-width: calc(100% - 32px);
}
</style>