const restoreUser = store => new Promise((resolve, reject) => {
  store.dispatch('user/loginFromToken')
    .then(() => {
      if (!store.state.user.loggedIn) {
        return reject(new Error('not logged in'))
      }
      resolve(true)
    })
    .catch(reject)
})

export default (router, store) => router.beforeEach((to, from, next) => {
  if (to.path === '/logout') {
    return store.dispatch('user/logout')
      .then(() => next('/'))
      .catch(() => next('/'))
  }
  restoreUser(store)
    .then(() => next())
    .catch(() => {
      if (to.path === '/') {
        return next()
      }
      return next('/')
    })
})
