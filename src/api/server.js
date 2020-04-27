import * as storageApi from './storage'

const apiRoot = process.env.VUE_APP_API_ROOT || 'http://localhost:3030'

const authorizationHeader = () => {
  const token = storageApi.get('token')
  if (token) {
    return {
      'Authorization': `Bearer ${token}`
    }
  }
  return {}
}
const postHeaders = () => {
  return {
    method: 'POST',
    headers: Object.assign({}, { 'Content-Type': 'application/json' }, authorizationHeader())
  }
}
const postMultipartHeaders = () => {
  return {
    method: 'POST',
    headers: Object.assign({}, authorizationHeader())
  }
}
const putHeaders = () => {
  return {
    method: 'PUT',
    headers: Object.assign({}, { 'Content-Type': 'application/json' }, authorizationHeader())
  }
}
const deleteHeaders = () => {
  return {
    method: 'DELETE',
    headers: Object.assign({}, { 'Content-Type': 'application/json' }, authorizationHeader())
  }
}
const patchHeaders = () => {
  return {
    method: 'PATCH',
    headers: Object.assign({}, { 'Content-Type': 'application/json' }, authorizationHeader())
  }
}
const patchMultipartHeaders = () => {
  return {
    method: 'PATCH',
    headers: Object.assign({}, authorizationHeader())
  }
}
const getHeaders = () => {
  return {
    method: 'GET',
    headers: Object.assign({}, authorizationHeader())
  }
}

const generateQueryString = (payload) => {
  if (!payload) {
    return ''
  }
  return Object.keys(payload).reduce((memo, key) => {
    if (payload[key] === undefined) {
      return memo
    }
    if (Array.isArray(payload[key])) {
      return memo + payload[key].reduce((arrMemo, v) => `${arrMemo}${encodeURIComponent(key)}[]=${encodeURIComponent(v)}&`, '')
    }
    return `${memo}${encodeURIComponent(key)}=${encodeURIComponent(payload[key])}&`
  }, '?')
}

const multipartBody = (payload) => {
  const formData = new FormData()
  Object.keys(payload).forEach((key) => {
    formData.append(key, payload[key])
  })
  return formData
}

const parseJson = (response) => {
  if (response.status === 200 || response.status === 201) {
    return response.json()
  }
  if (response.status === 204) {
    return null
  }
  return response.json()
    .then((err) => {
      throw new Error(err.message)
    })
    .catch((e) => {
      throw new Error(e.message)
    })
}

const parseBlob = (response) => {
  return response.blob()
}

export const post = (path, payload) => fetch(`${apiRoot}${path}${generateQueryString()}`, Object.assign({ body: JSON.stringify(payload) }, postHeaders()))
  .then(parseJson)

export const postMultipart = (path, payload) => fetch(`${apiRoot}${path}${generateQueryString()}`, Object.assign({ body: multipartBody(payload) }, postMultipartHeaders()))
  .then(parseJson)

export const get = (path, payload) => fetch(`${apiRoot}${path}${generateQueryString(payload)}`, getHeaders())
  .then(parseJson)

export const getRaw = (path, payload) => fetch(`${apiRoot}${path}${generateQueryString(payload)}`, getHeaders())
  .then(parseBlob)

export const put = (path, payload) => fetch(`${apiRoot}${path}${generateQueryString()}`, Object.assign({ body: JSON.stringify(payload) }, putHeaders()))
  .then(parseJson)

export const patch = (path, payload) => fetch(`${apiRoot}${path}${generateQueryString()}`, Object.assign({ body: JSON.stringify(payload) }, patchHeaders()))
  .then(parseJson)

export const patchMultipart = (path, payload) => fetch(`${apiRoot}${path}${generateQueryString()}`, Object.assign({ body: multipartBody(payload) }, patchMultipartHeaders()))
  .then(parseJson)

export const del = path => fetch(`${apiRoot}${path}${generateQueryString()}`, deleteHeaders())
  .then((response) => {
    if (response.status < 400) {
      return null
    }
    throw new Error(response.status)
  })

export const download = (path, payload) => {
  window.location.href = `${apiRoot}${path}${generateQueryString(payload)}`
}
