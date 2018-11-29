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
  },
  {
    path: '/join',
    name: 'join',
    component: () => import('@/mobile/joinBaho/joinBaho.vue')
  }
]

export default ydRouter
