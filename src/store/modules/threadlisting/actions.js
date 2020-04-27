import * as types from '../../types'
import * as threadsApi from '@/api/threads'

export const fetchThreadListing = ({ commit }) => {
  commit(types.THREADS_LISTING_FETCHING)
  return threadsApi.fetchThreadListing()
    .then(body => commit(types.THREADS_LISTING_FETCH_SUCCESS, body))
    .catch(e => commit(types.THREADS_LISTING_FETCH_ERROR, e.message))
}
