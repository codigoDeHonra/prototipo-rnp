import Vue from 'vue'
import VueRouter from 'vue-router'
import Cubo from '../components/Cubo.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'CatalogoHome',
      component: Cubo
    },
  ]
});

export default router
