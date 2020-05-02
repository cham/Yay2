import * as actions from './actions'
import mutations from './mutations'

const state = {
  threadFetching: false,
  threadFetchError: '',
  name: '',
  categories: [],
  numcomments: 0,
  comments: []
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
