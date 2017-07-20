const routes = [
  {
    path: '/',
    name: 'Index',
    component: r => require.ensure([], () => r(require('@/views/index/index.vue')), 'index')
  }, {
    path: '*',
    redirect: '/'
  }
]

export default routes
