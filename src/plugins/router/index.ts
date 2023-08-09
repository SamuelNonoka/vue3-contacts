import { createRouter, createWebHistory } from 'vue-router'
import useRoutesUtil from '@/utils/routes.util'

const { routesNames } =useRoutesUtil()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      component: () => import('@/app/template/application/Index.vue'),
      children: [
        {
          path: '',
          name: routesNames.HOME,
          component: () => import('@/app/home/application/Index.vue'),
          meta: {
            private: true
          },
        }, 
        {
          path: 'meu-cadastro',
          name: routesNames.PROFILE,
          component: () => import('@/app/profile/application/Index.vue'),
          meta: {
            private: true
          },
        },    
      ]
    },
    {
      path: '/autenticacao',
      name: 'auth',
      component: () => import('@/app/auth/application/Index.vue')
    },
  ]
})

router.beforeEach((to, from, next)=>{
  if (to.meta.private) {
    if (!localStorage.getItem('accessToken')) {
      next({ name: routesNames.SIGNIN })
    }
  }

  if (!to.meta.private ){
    if (localStorage.getItem('accessToken')) {
      next({ name: routesNames.HOME })
    }
  } 
  
  next()
})

export default router
