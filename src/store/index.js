import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import user from './modules/user'
import threadlisting from './modules/threadlisting'
import thread from './modules/thread'
import comment from './modules/comment'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    user,
    threadlisting,
    thread,
    comment
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
