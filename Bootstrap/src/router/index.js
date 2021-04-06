import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Selecao from '../views/Selecao.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/selecao',
    name: 'Selecao',
    component: Selecao
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
