import { createStore } from 'vuex'

import products from "./products.json"
import clients from "./clients.json"


export default createStore({
  state: {
    products: products,
    clients: clients,  
  },
  getters: {
    firstThreeElements: state => {
      return state.products.slice(0,3);
    },
    nextThreeElements: state => {
      return state.products.slice(4,7);
    },
    firstThreeClients: state => {
      return state.clients.slice(0,3);
    },
  },
  mutations: {
    setProducts: (state, products) => {
      state.products = products
    }
  },
  actions: {
  },
  modules: {
  }
})
