import {
  getRequest,
  httpUrl
} from '@/utils/network'

// 导航条
export const getNavBarData = params => {
  return getRequest(httpUrl + '/bhgw/page/bahoweb/menu/bahoMenu/getMainMenuList', params)
}

// 首页模块接口
export const indexInterface = {
  // 首页轮播图
  getIndexBanner: params => {
    return getRequest(httpUrl + '/bhgw/page/bahoweb/roll/bahoRollPic/webGetHomeRoll', params)
  },
  // 关于贝豪标题及导航
  getBahoData: params => {
    return getRequest(httpUrl + '/bhgw/page/bahoweb/navigat/bahoNavigatAboutPhone/webInfoList', params)
  },
  // 关于贝豪详细信息接口
  getBahoDetialData: params => {
    return getRequest(httpUrl + '/bhgw/page/bahoweb/navigat/bahoNavigatAboutPhone/getInfo', params)
  },
  // 品牌中心接口
  getBrandsCenterData: params => {
    return getRequest(httpUrl + '/bhgw/page/bahoweb/navigat/bahoNavigatBrandPhone/listInfo', params)
  },
  // 新闻中心接口
  getNewsCenterData: params => {
    return getRequest(httpUrl + '/bhgw/page/bahoweb/news/bahoNewsPhone/webInfoList', params)
  },
  // 投资者关系接口
  getRelationData: params => {
    return getRequest(httpUrl + '/bhgw/page/bahoweb/navigat/bahoNavigatInvestorPhone/webInfoList', params)
  },
  // 投资者详情接口
  getRelationDetialData: params => {
    return getRequest(httpUrl + '/bhgw/page/bahoweb/navigat/bahoNavigatInvestorPhone/getInfo', params)
  },
  // 加入贝豪接口
  getJoinBahoData: params => {
    return getRequest(httpUrl + '/bhgw/page/bahoweb/contact/bahoContactPhone/webInfoList', params)
  }
}

// 品牌中心详情接口
export const getBrandDetialData = params => {
  return getRequest(httpUrl + '/bhgw/page/bahoweb/navigat/bahoNavigatBrandPhoneDetails/webInfoList', params)
}

// 所有新闻接口
export const getAllNewsData = params => {
  return getRequest(httpUrl + '/bhgw/page/bahoweb/news/bahoNewsPhone/webInfoList', params)
}

// 获取单条信息接口
export const getSingleNewsData = params => {
  return getRequest(httpUrl + '/bhgw/page/bahoweb/news/bahoNewsPhone/getInfo', params)
}

// 加入贝豪模块接口
export const joinBahoInterface = {
  // 详情页标题
  getDetialTitle: params => {
    return getRequest(httpUrl + '/bhgw/page/bahoweb/contact/bahoContactPhone/webTitleInfoList', params)
  },
  // 员工活动轮播图
  getActivityBanner: params => {
    return getRequest(httpUrl + '/bhgw/page/bahoweb/roll/bahoRollPic/webGetEmployeeRoll', params)
  },
  // 获取视频
  getVideo: params => {
    return getRequest(httpUrl + '/bhgw/page/bahoweb/video/bahoVideo/webInfoList', params)
  },
  // 招聘信息
  getRecruitInfoData: params => {
    return getRequest(httpUrl + '/bhgw/page/bahoweb/recruit/bahoZhaopin/getRecruitInfo', params)
  },
  // 招聘信息详情
  getRecruitInfoDetial: params => {
    return getRequest(httpUrl + '/bhgw/page/bahoweb/recruit/bahoZhaopin/getRecruitByNameInfo', params)
  },
  // 联系我们
  getContactUsData: params => {
    return getRequest(httpUrl + '/bhgw/page/bahoweb/contact/bahoContactPhone/webInfoListDetails', params)
  }
}
