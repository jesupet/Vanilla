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
      for (let i = 0; i < state.logos.length; i += 4) {
        groups.push(state.logos.slice(i, i + 4));
      }
      return groups;
    },
  },
  actions: {
    fetchLogos({ commit }) {
      // Aquí puedes realizar una llamada API o cargar los logos de alguna otra fuente
      const logos = [
        { url: require("@/assets/clients_logos/lavandaclean-logo.png"), alt: "Logo 1" },
        { url: require("@/assets/clients_logos/makuwool-logo.png"), alt: "Logo 2" },
        { url: require("@/assets/clients_logos/ripp-logo.png"), alt: "Logo 3" },
        { url: require("@/assets/clients_logos/setup-logo.png"), alt: "Logo 4" },
        { url: require("@/assets/clients_logos/setup-logo.png"), alt: "Logo 4" },
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
    },
  },
  modules: {
  }
})
