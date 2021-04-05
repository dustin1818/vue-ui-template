import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Symbol from '../views/Symbol.vue'
import Jmaq from '../views/Jmaq/Jmaq.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/symbol',
    name: 'Symbol',
    component: Symbol
  },
  {
    path: '/jmaq',
    name: 'Jmaq',
    component: Jmaq
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
