const ydRouter = [ // 移动
  {
    path: '/',
    redirect: {
      name: 'index'
    }
  },
  // 首页
  {
    path: '/index',
    name: 'index',
    component: () => import('@/mobile/index.vue')
  }
]

export default ydRouter
