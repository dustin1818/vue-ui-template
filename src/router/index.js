import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Wireframe from '../views/Wireframe-One.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/wireframe',
    name: 'Wireframe',
    component: Wireframe
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
