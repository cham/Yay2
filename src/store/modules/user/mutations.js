/* eslint-disable no-unused-vars */
import * as types from '../../types'

export default {
  [types.USER_LOGIN_FETCHING] (state) {
    state = Object.assign(state, { loginFetching: true, loggedIn: false, username: '', urlname: '', loginError: '' })
  },
  [types.USER_LOGIN_SUCCESS] (state, { username, urlname }) {
    state = Object.assign(state, { loginFetching: false, loggedIn: true, username, urlname })
  },
  [types.USER_LOGIN_ERROR] (state, loginError) {
    state = Object.assign(state, { loginFetching: false, loggedIn: false, loginError })
  }
}
