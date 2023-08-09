<script lang="ts" setup>
import { ref, computed } from 'vue';
import AuthViewModel from '../auth_view_model'
import AuthRepository from '../../domain/repositories/auth.repository'
import LoginFormDto from '../dtos/login_form.dto';
import AxiosHttpClient from '@/http-client/axios_http_client';

const httpClient = new AxiosHttpClient()
const authRepository = new AuthRepository(httpClient)
const viewModel = new AuthViewModel(authRepository)

const RULES = [
  (value: string) => {
    if (value) return true
    return 'Informe o usuário.'
  }
]

const loading = ref(false)
const user = ref('')
const password = ref('')

const valid = computed(() => {
  if (user.value.length === 0 || password.value.length === 0) return false  
  return true
})

async function login () {
  loading.value = true

  const loginForm = new LoginFormDto(user.value, password.value)
  await viewModel.login(loginForm)

  loading.value = false
}
</script>

<template>
   <v-form 
    v-model="valid" 
    @submit.prevent="login"
  >
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="user"
            label="Usuário"
            :rules="RULES"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-text-field
            v-model="password"
            label="Senha"
            :rules="RULES"
            type="password"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row justify="center">
        <b-col cols="auto">
          <v-btn
            type="submit"
            block
            class="primary"
            text="Logar"
            :disabled="!valid"
            :loading="loading"
          ></v-btn>
        </b-col>
      </v-row>
    </v-container>
  </v-form>
</template>