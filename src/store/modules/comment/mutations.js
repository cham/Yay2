/* eslint-disable no-unused-vars */
import * as types from '../../types'

export default {
  [types.COMMENT_CREATE_FETCHING] (state) {
    state = Object.assign(state, { createFetching: true, createError: '' })
  },
  [types.COMMENT_CREATE_SUCCESS] (state) {
    state = Object.assign(state, { createFetching: false })
  },
  [types.COMMENT_CREATE_ERROR] (state, createError) {
    state = Object.assign(state, { createFetching: false, createError })
  }
}
