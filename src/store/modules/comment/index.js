import * as actions from './actions'
import mutations from './mutations'

const state = {
  createFetching: false,
  createError: ''
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
