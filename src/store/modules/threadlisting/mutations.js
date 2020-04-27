/* eslint-disable no-unused-vars */
import * as types from '../../types'

export default {
  [types.THREADS_LISTING_FETCHING] (state) {
    state = Object.assign(state, { listingFetching: true, threads: [], listingFetchError: '' })
  },
  [types.THREADS_LISTING_FETCH_SUCCESS] (state, { threads }) {
    state = Object.assign(state, { listingFetching: false, threads })
  },
  [types.THREADS_LISTING_FETCH_ERROR] (state, listingFetchError) {
    state = Object.assign(state, { listingFetching: false, listingFetchError: '' })
  }
}
