import { createRouter, createWebHashHistory } from 'vue-router'
import VistaPersonajes from '@/views/VistaPersonajes.vue'

const routes = [
  {
    path: '/',
    name: 'VistaPersonaje',
    component: VistaPersonajes
  },
  {
    path: '/VistaEscenario',
    name: 'VistaEscenario',
    component: () => import('@/views/VistaEscenario.vue')
  },
  {
    path: '/VistaCombate',
    name: 'VistaCombate',
    component: () => import('@/views/VistaCombate.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
