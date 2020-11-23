import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import {text1,text2} from './plugins/text'

Vue.use(Vuex)

const textPlugin = text1()

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user
  },
  getters,
  plugins:[textPlugin,text2]
})

export default store
