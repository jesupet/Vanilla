import { createRouter, createWebHistory } from 'vue-router'
import HomeVanilla from '../views/HomeVanilla.vue'
import HomeTemporal from '../views/HomeTemporal.vue'
import NosotrosView from '../views/NosotrosView.vue'

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
  {
    path: '/nosotros',
    name: 'nosotros',
    component: NosotrosView,
  },
]

const router = createRouter({
  history: createWebHistory(),
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
