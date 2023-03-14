import { createStore } from 'vuex'

import products from "./products.json"
import clients from "./clients.json"
import logos from "./logos.json"


export default createStore({
  state: {
    products: products,
    clients: clients,
    items: logos,
    groups: [],
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
    carouselItems: state => {
      // En este ejemplo, mostraremos 3 items por slide
      const itemsPerSlide = 4;
      const slideGroups = [];
      for (let i = 0; i < state.items.length; i += itemsPerSlide) {
        slideGroups.push(state.items.slice(i, i + itemsPerSlide));
      }
      return slideGroups;
    },
  },
  mutations: {
    setProducts: (state, products) => {
      state.products = products
    },
  },
  actions: {
  },
  modules: {
  }
})
