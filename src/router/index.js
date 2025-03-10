import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Registro from '@/pages/Registro.vue'
import Login from '@/pages/Login.vue'
import Inicio from '@/pages/Inicio.vue'
import Centros from '@/pages/Centros.vue'
import Citas from '@/pages/Citas.vue'


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
    },
    {
      path: '/centros',
      name: 'centros',
      component: Centros
    },
    {
      path: '/citas',
      name: 'citas',
      component: Citas
    }
  ]
})

export default router
