import Vue from 'vue'
import Router from 'vue-router'
import VistaPersonajes from '@/views/VistaPersonajes.vue'
import VistaEscenario from '@/views/VistaEscenario.vue'
import VistaCombate from '@/views/VistaCombate.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'VistaPersonajes',
      component: VistaPersonajes
    },
    {
      path: '/escenario',
      name: 'VistaEscenario',
      component: VistaEscenario
    },
    {
      path: '/combate',
      name: 'VistaCombate',
      component: VistaCombate
    }
  ]
})
