import { createRouter, createWebHashHistory } from 'vue-router'
import HomeVanilla from '../views/HomeVanilla.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeVanilla
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
