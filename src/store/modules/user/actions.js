import * as types from '../../types'
import * as userApi from '@/api/user'

export const login = ({ commit }, { username, password }) => {
  commit(types.USER_LOGIN_FETCHING)
  return userApi.login({ username, password })
    .then(body => commit(types.USER_LOGIN_SUCCESS, body))
    .catch(e => commit(types.USER_LOGIN_ERROR, e.message))
}

export const loginFromToken = ({ commit }) => {
  return userApi.loginFromToken()
    .then(({ username, urlname }) => commit(types.USER_LOGIN_SUCCESS, { username, urlname }))
}

export const logout = () => userApi.logout()
