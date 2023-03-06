import { createStore } from 'vuex'

import products from "./products.json"



export default createStore({
  state: {
    products: products  
  },
  getters: {
    firstThreeElements: state => {
      return state.products.slice(0,3);
    },
    nextThreeElements: state => {
      return state.products.slice(4,7);
    }
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
