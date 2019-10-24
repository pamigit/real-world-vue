import Vue from "vue";
import Vuex from "vuex";
import { dataService } from './dataService';

Vue.use(Vuex);

const state = () => ({
  products: [],
  profiles: []
});
const mutations = {
  getProducts(state, products) {
    state.products = products;
  },
  getProfiles(state, profiles) {
    state.profiles = profiles;
  }
};
const actions = {
  async getProductsAction({ commit }) {
    const products = await dataService.getProducts();
    commit('getProducts', products);
  },
  async getProfilesAction({commit}) {
    const profiles = await dataService.getProfiles();
    commit('getProfiles', profiles);
  }
};
const getters = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
