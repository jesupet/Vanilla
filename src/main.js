import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'

import { 
  faArrowRight, 
  faHeart, 
  faBookmark, 
  faAnglesDown, 
  faTemperatureHalf, 
  faWind, 
  faArrowRightFromBracket, 
  faTrash, faEye, 
  faCircleQuestion, 
  faPlaneDeparture, 
  faXmark 
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faArrowRight, 
  faHeart, 
  faBookmark, 
  faAnglesDown, 
  faTemperatureHalf, 
  faWind, 
  faArrowRightFromBracket, 
  faTrash, faEye, 
  faCircleQuestion, 
  faPlaneDeparture, 
  faXmark 
)

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

