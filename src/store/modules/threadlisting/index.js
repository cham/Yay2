import * as actions from './actions'
import mutations from './mutations'

const state = {
  threads: [],
  listingFetching: false,
  listingFetchError: ''
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
