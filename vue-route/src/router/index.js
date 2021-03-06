import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/servicios',
    name: 'servicios',
    component: () => import(/* webpackChunkName: "servicios" */ '../views/Servicios.vue')
  },
  {
    path: '/fotos/:id',
    name: 'fotos',
    component: () => import(/* webpackChunkName: "servicios" */ '../views/Fotos.vue')
  },
  {
  path: '/grid',
  name: 'grid',
  component: () => import(/* webpackChunkName: "servicios" */ '../views/Grid.vue')
  },
  {
  path: '/card',
  name: 'card',
  component: () => import(/* webpackChunkName: "servicios" */ '../views/Card.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import(/* webpackChunkName: "servicios" */ '../views/Form.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
