import * as actions from './actions'
import mutations from './mutations'

const state = {
  loggedIn: false,
  username: '',
  urlname: '',
  loginFetching: false,
  loginError: ''
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
