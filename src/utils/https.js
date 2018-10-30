import utils from '@/utils/utils'

// 导航数据
export const GetNavData = (params, callback) => {
  return utils.Get('bhgw/page/bahoweb/menu/bahoMenu/getMenuList', params, callback)
}

/** 首页 */
// 首页新闻滚动数据
export const GetIndexNewsData = (params, callback) => {
  return utils.Get('bhgw/page/bahoweb/news/bahoNews/listNews', params, callback)
}
// 首页轮播图数据
export const GetIndexBannerData = (params, callback) => {
  return utils.Get('bhgw/page/bahoweb/roll/bahoRollPic/getRollByType', params, callback)
}

/** 关于贝豪 */
// 公司简介、公司历史数据、企业价值观、贝豪使命数据
export const GetAboutBahoData = (params, callback) => {
  return utils.Get('bhgw/page/bahoweb/navigat/bahoNavigatAbout/getWebNetAboutInfo', params, callback)
}

/** 品牌中心 */
// 品牌中心数据
export const GetBrandsCenterData = (params, callback) => {
  return utils.Get('bhgw/page/bahoweb/navigat/bahoNavigatBrand/getWebNetBrandInfo', params, callback)
}

/** 新闻中心 */
// 新闻中心数据
export const GetNewsCenterData = (params, callback) => {
  return utils.Get('bhgw/page/bahoweb/news/bahoNews/webListNews', params, callback)
}
// 新闻详情数据
export const GetNewsDetialData = (params, callback) => {
  return utils.Get('bhgw/page/bahoweb/news/bahoNews/getInfo', params, callback)
}

/** 投资者关系 */
export const GetInvestorData = (params, callback) => {
  return utils.Get('bhgw/page/bahoweb/navigat/bahoNavigatInvestor/getWebNetInvestorInfo', params, callback)
}

/** 加入贝豪 */
// 员工活动数据
export const GetActivityData = (params, callback) => {
  return utils.Get('bhgw/page/bahoweb/roll/bahoRollPic/getRollByType', params, callback)
}
// 员工心声数据
export const GetHeartSoundData = (params, callback) => {
  return utils.Get('bhgw/page/bahoweb/video/bahoVideo/webInfoList', params, callback)
}
// 招聘信息数据
// 1. 招聘轮播图
export const GetRecruitInfoBannerData = (params, callback) => {
  return utils.Get('bhgw/page/bahoweb/recruit/bahoZhaopin/getRecruitPhoto', params, callback)
}
// 2.招聘职位列表
export const GetRecruitInfoList = (params, callback) => {
  return utils.Get('bhgw/page/bahoweb/recruit/bahoZhaopin/getRecruitName', params, callback)
}
// 3. 招聘职位详情
export const GetRecruitInfoListDetial = (params, callback) => {
  return utils.Get('bhgw/page/bahoweb/recruit/bahoZhaopin/getRecruitByNameInfo', params, callback)
}
