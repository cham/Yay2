import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/pages/Main'
import Thread from '@/components/threads/Thread'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/thread/:urlname',
      name: 'Thread',
      component: Thread,
      props: true
    }
  ]
})
