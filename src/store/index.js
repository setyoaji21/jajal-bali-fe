import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import destination from './modules/destination'
import review from './modules/review'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
    destination,
    review
  }
})

export default store
