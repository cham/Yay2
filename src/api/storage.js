export const set = (key, value) => window.localStorage.setItem(key, value)

export const get = key => window.localStorage.getItem(key)

export const del = key => window.localStorage.removeItem(key)
