<script lang="ts" setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router';
import useRoutesUtil from '@/utils/routes.util'

const { routesNames } = useRoutesUtil()

const drawer = ref(false)

const items = [
  {
    title: 'Home',
    value: routesNames.HOME,
  },
  {
    title: 'Meu cadastro',
    value: routesNames.PROFILE,
  },
  {
    title: 'Usuários',
    value: routesNames.HOME,
  },
  {
    title: 'Pessoas',
    value: routesNames.HOME,
  },
  {
    title: 'Contatos',
    value: routesNames.HOME,
  },
  {
    title: 'Logout',
    value: routesNames.HOME,
  },
]
</script>

<template>
  <v-app-bar
    color="primary"
    prominent
  >
    <v-app-bar-nav-icon 
      variant="text" 
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>
      Contatos
    </v-toolbar-title>
  </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      location="left"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          color="primary"
        >
          <router-link :to="{ name: item.value }">
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="main">
      <v-card-text>
        <router-view />
      </v-card-text>
    </v-main>
  
</template>

<style scoped>
.main {
  height: 100vh;
  width: 100%;
}
</style>