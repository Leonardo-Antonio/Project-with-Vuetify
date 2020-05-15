import Vue from 'vue'
import Vuex from 'vuex'

import NoteStore from '../modules/Note_Store'
import ActivityStore from '../modules/Activity_Store'
import MarketStore from '../modules/Market_Store'
import TaskStore from '../modules/Task_Store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    NoteStore,
    ActivityStore,
    MarketStore,
    TaskStore
  }
})
