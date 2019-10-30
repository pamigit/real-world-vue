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
  },
  updateProfile(state, profile) {
    const index = state.profiles.findIndex(p => p.id == profile.id);
    state.profiles.splice(index, 1, profile);
    state.profiles = [...state.profiles];
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
  },
  async updateProfileAction({ commit }, profile) {
    const updatedProfile = await dataService.updateProfile(profile);
    commit('updateProfile', updatedProfile);
  }
};
const getters = {
    getProfileById: state => id => state.profiles.find(p => p.id == id)
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
