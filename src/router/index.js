import { createRouter, createWebHashHistory } from 'vue-router'
import HomeVanilla from '../views/HomeVanilla.vue'
import HomeTemporal from '../views/HomeTemporal.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeVanilla
  },
  {
    path: '/',
    name: 'pre-home',
    component: HomeTemporal
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
