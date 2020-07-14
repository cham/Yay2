import * as types from '../../types'
import * as commentApi from '@/api/comment'

export const postComment = ({ commit }, { urlname, content }) => {
  commit(types.COMMENT_CREATE_FETCHING)
  return commentApi.postComment({ urlname, content })
    .then(body => commit(types.COMMENT_CREATE_SUCCESS, body))
    .catch(e => commit(types.COMMENT_CREATE_ERROR, e.message))
}
