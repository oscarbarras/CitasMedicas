import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Registro from '@/pages/Registro.vue'
import Login from '@/pages/Login.vue'
import Inicio from '@/pages/Inicio.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/registro',
      name: 'registro',
      component: Registro
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/inicio',
      name: 'inicio',
      component: Inicio
    }
  ]
})

export default router
