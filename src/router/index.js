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
  routes,
  //PARA QUE EL MENU SCROLLEE HACIA ABAJO
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      // BEFORE:
      // return { selector: to.hash }

      return { el: to.hash }
    }
    return { x: 0, y: 0 };
  },
})

export default router
