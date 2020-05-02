import * as types from '../../types'
import * as threadApi from '@/api/thread'

export const fetchThread = ({ commit }, { urlname, page = 1 }) => {
  commit(types.THREAD_FETCHING)
  return threadApi.fetchThread({ urlname, page })
    .then(body => commit(types.THREAD_FETCH_SUCCESS, body))
    .catch(e => commit(types.THREAD_FETCH_ERROR, e.message))
}

export const clearThreadState = ({ commit }) => commit(types.THREAD_CLEAR_STATE)
