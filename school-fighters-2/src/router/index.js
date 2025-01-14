import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Personajes',
    component:() => import('@/views/VistaPersonajes.vue')
  },
  {
    path: '/combate',
    name: 'Combate',
    component: () => import('@/views/VistaCombate.vue')
  },
  {
    path: '/escenarios',
    name: 'Escenarios',
    component: import('@/views/VistaEscenarios.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
