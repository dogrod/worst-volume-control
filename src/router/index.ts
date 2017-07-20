import Vue from 'vue'
import Router from 'vue-router'

// const Index = () => import('@/views/index/index.vue')
// import Index from '@/views/index/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: r => require.ensure([], () => r(require('@/views/index/index.vue')), 'index')
    }, {
      path: '*',
      redirect: '/'
    }
  ]
})
