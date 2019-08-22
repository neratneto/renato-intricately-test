import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedTab: 'COMPANY DATA'
  },
  mutations: {
    CHANGE_TAB (state, tab) {
      state.selectedTab = tab
    }
  },
  actions: {
    changeTab({ commit }, tab) {
      commit('CHANGE_TAB', tab)
    }
  }
})
