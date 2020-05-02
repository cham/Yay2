/* eslint-disable no-unused-vars */
import * as types from '../../types'

export default {
  [types.THREAD_FETCHING] (state) {
    state = Object.assign(state, { threadFetching: true, threadFetchError: '' })
  },
  [types.THREAD_FETCH_SUCCESS] (state, { name, categories, numcomments, comments }) {
    state = Object.assign(state, { threadFetching: false, name, categories, numcomments, comments })
  },
  [types.THREAD_FETCH_ERROR] (state, threadFetchError) {
    state = Object.assign(state, { threadFetching: false, threadFetchError })
  },
  [types.THREAD_CLEAR_STATE] (state) {
    state = Object.assign(state, { threadFetching: false, threadFetchError: '', name: '', categories: [], numcomments: 0, comments: [] })
  }
}
