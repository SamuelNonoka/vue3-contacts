import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/autenticacao',
      name: 'auth',
      component: () => import('../app/user-management/application/auth/Index.vue')
    },
  ]
})

export default router
