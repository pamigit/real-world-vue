import Vue from "vue";
import Vuex from "vuex";
import { dataService } from './dataService';

Vue.use(Vuex);

const state = () => ({
  products: [],
});
const mutations = {
  getProducts(state, products) {
    state.products = products;
  },
};
const actions = {
  async getProductsAction({ commit }) {
    const products = await dataService.getProducts();
    commit('getProducts', products);
  },
};
const getters = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
