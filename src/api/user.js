import * as serverApi from './server'
import * as storageApi from './storage'

export const login = ({ username, password }) => {
  return serverApi.post('/v1/auth/login', { username, password })
  .then(({ token }) => {
    storageApi.set('token', token)
    return loginFromToken()
  })
}

export const loginFromToken = () => serverApi.get('/v1/users/me')

export const logout = () => {
  storageApi.del('token')
  return Promise.resolve()
}
