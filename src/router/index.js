import Vue from 'vue'
import VueRouter from 'vue-router'
import CatalogoHome from '../components/catalogo/CatalogoHome.vue'
import Carrinho from '../components/catalogo/Carrinho.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/catalogo',
      name: 'CatalogoHome',
      component: CatalogoHome
    },
    {
      path: '/carrinho',
      name: 'Carrinho',
      component: Carrinho
    },
  ]
});

export default router
