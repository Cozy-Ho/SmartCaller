/* eslint-disable eol-last */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      user_text: '"Smart Caller"라고 말해보세요.',
  },
  getters: {},
  mutations: {
      set_default_text(state){
          state.user_text="Smart Caller라고 말해보세요.";
      },
      set_user_text(state, text){
          state.user_text=text;
      }
  },
  actions: {}
})