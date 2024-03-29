import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/sass/style.css'

import { library } from '@fortawesome/fontawesome-svg-core'

import { 
  faArrowRight, 
  
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faArrowRight, 
  
)

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

