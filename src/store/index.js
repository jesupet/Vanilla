import { createStore } from 'vuex'

import products from "./products.json"
import clients from "./clients.json"

export default createStore({
  state: {
    products: products,
    clients: clients,
    groups: [],
    logos: [],
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
    logoGroups(state) {
      // Divide los logos en grupos de 4 para el carrusel
      const groups = [];
      const groupSize = window.innerWidth <= 768 ? 1 : 4;

      for (let i = 0; i < state.logos.length; i += groupSize) {
        groups.push(state.logos.slice(i, i + groupSize));
      }
      return groups;
    },
  },
  actions: {
    fetchLogos({ commit }) {
      // Aquí puedes realizar una llamada API o cargar los logos de alguna otra fuente
      const logos = [
        { url: require('@/assets/clients_logos/maxam.jpg'), alt: "Logo Maxam"},
        { url: require('@/assets/clients_logos/slang.jpg'), alt: "Logo Slang"},
        { url: require('@/assets/clients_logos/optimmet.jpg'), alt: "Logo Optimmet"},
        { url: require('@/assets/clients_logos/equans.jpg'), alt: "Logo Equans"},
        { url: require('@/assets/clients_logos/lahiguera.jpg'), alt: "Logo La Higuera"},
        { url: require('@/assets/clients_logos/schneider.jpg'), alt: "Logo Schneider"},
        { url: require('@/assets/clients_logos/ppr.jpg'), alt: "Logo PPR"},
        { url: require('@/assets/clients_logos/ruta12.jpg'), alt: "Logo Ruta 12"},
        { url: require('@/assets/clients_logos/breaktime.jpg'), alt: "Logo Breaktime"},
        {  url: require('@/assets/clients_logos/hakansson.jpg'), alt: "Logo Hakansson"},
        {  url: require('@/assets/clients_logos/zuniga.jpg'), alt: "Logo Zuñiga"},
        // Agrega más logos según sea necesario
      ];

      commit("setLogos", logos);
    },
  },
  mutations: {
    setProducts: (state, products) => {
      state.products = products
    },
    setLogos(state, logos) {
      state.logos = logos;
      console.log(state.logos)
    },
  },
  modules: {
  }
})
