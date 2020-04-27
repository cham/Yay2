import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import users from './modules/users'
import threadlisting from './modules/threadlisting'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    users,
    threadlisting
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
