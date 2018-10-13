import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    // 首页
    {
      path: '/',
      name: 'home',
      component: () => import('@/modules/Index/Index.vue')
    },
    // 关于贝豪
    {
      path: '/CompanyProfile/:type',
      name: 'about',
      component: () => import('@/modules/AboutBaho/CompanyProfile/CompanyProfile.vue')
    },
    // 公司简介
    {
      path: '/CompanyProfile/:type',
      name: 'introduction',
      component: () => import('@/modules/AboutBaho/CompanyProfile/CompanyProfile.vue')
    },
    // 公司历史
    {
      path: '/CompanyHistory/:type',
      name: 'history',
      component: () => import('@/modules/AboutBaho/CompanyHistory/CompanyHistory.vue')
    },
    // 企业价值观
    {
      path: '/CompanyProfile/:type',
      name: 'vision',
      component: () => import('@/modules/AboutBaho/CompanyProfile/CompanyProfile.vue')
    },
    // 贝豪使命
    {
      path: '/CompanyProfile/:type',
      name: 'mission',
      component: () => import('@/modules/AboutBaho/CompanyProfile/CompanyProfile.vue')
    },
    // 产业品牌
    {
      path: '/BrandsCenter',
      name: 'brand',
      component: () => import('@/modules/BrandsCenter/BrandsCenter.vue')
    },
    // 可优比
    {
      path: '/kub',
      name: 'kub',
      component: () => import('@/modules/BrandsCenter/SubBrands/kub.vue')
    },
    // 蒂爱
    {
      path: '/diai',
      name: 'diai',
      component: () => import('@/modules/BrandsCenter/SubBrands/diai.vue')
    },
    // 米歌
    {
      path: '/mige',
      name: 'mige',
      component: () => import('@/modules/BrandsCenter/SubBrands/mige.vue')
    },
    // 麦可适
    {
      path: '/maikeshi',
      name: 'maikeshi',
      component: () => import('@/modules/BrandsCenter/SubBrands/maikeshi.vue')
    },
    // 贝豪国际
    {
      path: '/BrandsCenter',
      name: 'beihao',
      component: () => import('@/modules/BrandsCenter/BrandsCenter.vue')
    },
    // 新闻中心
    {
      path: '/NewsCenter',
      name: 'news',
      component: () => import('@/modules/NewsCenter/NewsCenter.vue')
    },
    // 新闻详情页
    {
      path: '/NewsDetial/:newsId',
      name: 'newsdetial',
      component: () => import('@/modules/NewsCenter/NewsDetial/NewsDetial.vue')
    },
    // 社会责任
    {
      path: '/SocialDuty/:type',
      name: 'responsibility',
      component: () => import('@/modules/InvestorRelation/SocialDuty/SocialDuty.vue')
    },
    // 合作伙伴
    {
      path: '/CooperativePartner/:type',
      name: 'partner',
      component: () => import('@/modules/InvestorRelation/Partner/Partner.vue')
    },
    // 加入贝豪
    {
      path: '/Activity',
      name: 'join',
      component: () => import('@/modules/JoinBaho/Activity/Activity.vue')
    },
    // 员工活动
    {
      path: '/Activity',
      name: 'activity',
      component: () => import('@/modules/JoinBaho/Activity/Activity.vue')
    },
    // 员工心声
    {
      path: '/HeartSound',
      name: 'voice',
      component: () => import('@/modules/JoinBaho/HeartSound/HeartSound.vue')
    },
    // 招聘信息
    {
      path: '/RecruitInfo',
      name: 'offers',
      component: () => import('@/modules/JoinBaho/RecruitInfo/RecruitInfo.vue')
    },
    // 联系我们
    {
      path: '/ContactUs',
      name: 'contact',
      component: () => import('@/modules/JoinBaho/ContactUs/ContactUs.vue')
    }
  ]
})
