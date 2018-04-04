import Vue from 'vue'
import Router from 'vue-router'
import JobBoardIndex from '@/views/JobBoardIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'JobBoardIndex',
      component: JobBoardIndex
    }
  ]
})
