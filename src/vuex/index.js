import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = {
  state: {
    selectedTab: 'COMPANY DATA',
    company: {}
  },
  mutations: {
    CHANGE_TAB (state, tab) {
      state.selectedTab = tab
    },
    SET_COMPANY (state, companyData) {
      state.company = companyData
    }
  },
  actions: {
    changeTab({ commit }, tab) {
      commit('CHANGE_TAB', tab)
    },
    getCompanyValues({ commit }, companyName) {
      let companyData = {} // Where an await function to an API would serve best
      if (companyName === 'Microsoft') { // Given values
        companyData = {
          name: 'Microsoft',
          location: 'Redmond, WA USA',
          statement: 'At Microsoft, our mission is to empower every person and every organization on the planet to achieve more. Our mission is grounded in both the world in which we live and the future we strive to create.',
          activities: [{
            time: 8,
            company: 'Cloud Orchestration',
            icon: 'video-platform'
          }, {
            time: 10,
            company: 'Express Scripts',
            icon: 'content-delivery'
          }, {
            time: 12,
            company: 'Kaiser Permanente',
            icon: 'waf-d-dos-security'
          }, {
            time: 14,
            company: 'Molina Healthcare',
            icon: 'traffic-management'
          }, {
            time: 15,
            company: 'Express Scripts',
            icon: 'dns'
          }, {
            time: 16,
            company: 'Kaise Permanente',
            icon: 'performance-monitoring'
          }, {
            time: 17,
            company: 'Molina Heallthcare',
            icon: 'saas'
          }],
          similarCompanies: [{
            icon: 'logo',
            company: 'Amazon Web Services (AWS)'
          }, {
            icon: 'logo-copy',
            company: 'Oracle Corporation'
          }],
          spendHistory: [{
            icon: 'google-cloud',
            company: 'Google Cloud Platform',
            amount: 500000
          }, {
            icon: 'group-copy-2',
            company: 'CenturyLink CDN',
            amount: 300000
          }]
        }
      }
      commit('SET_COMPANY', companyData)
    }
  }
}

export default new Vuex.Store(store)
