const ydRouter = [ // 移动
  {
    path: '/',
    redirect: {
      name: 'index'
    }
  },
  // 首页
  {
    path: '/test',
    name: 'index',
    component: () => import('@/mobile/test.vue')
  }
]

export default ydRouter
