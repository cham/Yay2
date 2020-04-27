import * as actions from './actions'
import mutations from './mutations'

const state = {
  loggedIn: false,
  username: '',
  loginFetching: false,
  loginError: ''
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
