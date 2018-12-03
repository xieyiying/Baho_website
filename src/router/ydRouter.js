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
    component: () => import('@/mobile/index/index.vue')
  },
  // 加入贝豪详情页
  {
    path: '/join',
    name: 'join',
    component: () => import('@/mobile/joinBaho/joinBaho.vue')
  },
  // 品牌中心详情页
  {
    path: '/brand',
    name: 'brand',
    component: () => import('@/mobile/brandsCenter/brandsCenter.vue')
  },
  // 新闻中心详情页
  {
    path: '/news',
    name: 'news',
    component: () => import('@/mobile/newsCenter/newsCenter.vue')
  },
  // 单条新闻详情
  {
    path: '/newsDetial',
    name: 'newsDetial',
    component: () => import('@/mobile/newsCenter/newsDetial.vue')
  }
]

export default ydRouter
