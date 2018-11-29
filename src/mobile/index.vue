<template>
    <div class="mobile content_mtop">
        <!-- 首页 -->
        <div id="index" class="index">
            <!-- 首页轮播图 -->
            <m_banner :bannerImage="bannerImage"></m_banner>
            <!-- 新闻 -->
            <div class="yindex_content clearfix">
                <!-- 新闻 -->
                <div class="yd_news f_left">
                    <i class="news_laba f_left"></i>
                    <ul ref="newslist" id="con1" :class="['f_left', {anim: animate == true}]">
                        <li v-for="(news, index) in newsData" :key="index" @click="seeNewsDetial(news.id)">
                            <span class="news_title text_over">{{news.title}}</span><span class="news_date">{{news.updateDate}}</span>
                        </li>
                    </ul>
                </div>
                <!-- 联系我们 -->
                <div class="yd_contact f_left">
                    <span class="contact_us">联系我们</span>
                    |
                    <span class="join_us" @click="joinUs">关注贝豪</span>
                    <img src="../assets/img/mobile/code.jpg" alt="" v-show="isShowCode">
                </div>
            </div>
        </div>
        <!-- 关于贝豪 -->
        <div id="about" class="about">
            <div class="yd_about_baho clearfix">
                <h1 class="h1_style">关于贝豪</h1>
                <h3 class="h3_style">以客户为中心：因需而生</h3>
                <ul class="about_tab">
                    <li
                      v-for="(item, index) in bahoTab"
                      :key="index"
                      :class="['f_left', {active: tabindex == index}]"
                      @click="changeTab(index)"
                    >
                        <span>{{item.name}}</span>
                    </li>
                </ul>
                <div class="tab_content">
                    <img src="../assets/img/mobile/banner.png" alt="">
                    <div class="detial_content">
                        <h2>关于贝豪</h2>
                        <p>
                            贝豪，是国内领先的母婴公司，旗下拥有可优比、蒂爱、米 歌、麦可适、贝豪优选等众多知名母婴品牌，核心专注自主 优质母婴产品研发、
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 品牌中心 -->
        <div id="brand" class="brand_center">
            <h1 class="h1_style">品牌中心</h1>
            <h3 class="h3_style">贝豪给品牌赋予生命</h3>
            <router-link to="">查看全部&nbsp;>></router-link>
            <p>
                在我们看来，每一个品牌都有生命并其独特的价值。孵化、 萌芽、成长、成熟……它们经历了如玉石般的打磨与雕琢， 凝聚了品牌工匠们的心血和汗水。
            </p>
            <div class="brands_logo">
                <span class="kub_logo"></span>
                <span class="diai_logo"></span>
                <span class="baho_logo"></span>
                <span class="mige_logo"></span>
                <span class="maikeshi_logo"></span>
            </div>
        </div>
        <!-- 新闻中心 -->
        <div id="news" class="news_center">
            <div class="news_title">
                <h1>新闻中心</h1>
                <h3>新闻资讯抢先知晓</h3>
                <router-link to="">查看全部&nbsp;>></router-link>
            </div>
            <div class="news_content">
                <ul class="news_content_top">
                    <li class="f_left">
                        <router-link to="">
                            <span class="news_img"></span>
                            <h2 class="top_news_title">喜讯！</h2>
                            <p class="top_news_content text_over">9贝豪获得嘉御基金投资！</p>
                        </router-link>
                    </li>
                    <li class="f_left">
                        <router-link to="">
                            <span class="news_img"></span>
                            <h2 class="top_news_title">喜讯！</h2>
                            <p class="top_news_content text_over">9贝豪获得嘉御基金投资！</p>
                        </router-link>
                    </li>
                </ul>
                <ul class="news_content_bottom">
                    <li>
                        <router-link to="">
                            <span class="news_img"></span>
                            <h2 class="top_news_title">喜讯！</h2>
                            <p class="top_news_content text_over">9贝豪获得嘉御基金投资！9贝豪获得嘉御基金投资！9贝豪获得嘉御基金投资！</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="">
                            <span class="news_img"></span>
                            <h2 class="top_news_title">喜讯！</h2>
                            <p class="top_news_content text_over">9贝豪获得嘉御基金投资！9贝豪获得嘉御基金投资！9贝豪获得嘉御基金投资！</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="">
                            <span class="news_img"></span>
                            <h2 class="top_news_title">喜讯！</h2>
                            <p class="top_news_content text_over">9贝豪获得嘉御基金投资！9贝豪获得嘉御基金投资！9贝豪获得嘉御基金投资！</p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 投资者关系 -->
        <div id="relation" class="investor_relations">
            <div class="relation_title">
                <h1 class="h1_style">投资者关系</h1>
                <h3 class="h3_style">责任与合作</h3>
                <ul class="relation_tab clearfix">
                    <li
                      v-for="(tab, index) in relationTabs"
                      :key="index"
                      @click="changeRelationTabs(index)"
                      :class="['f_left', {active: relationIndex == index}]"
                    >
                        <span>{{tab.name}}</span>
                    </li>
                </ul>
            </div>
            <div class="relation_content">
                <img src="../assets/img/mobile/banner.png" alt="">
                <ul>
                    <li>这是一个伟大的事业！</li>
                    <li>为了成长中的下一代，更为祖国的未来。</li>
                    <li>聚焦于为顾客创造美好的育儿体验，</li>
                    <li>使之成为全球知名的母婴企业。</li>
                </ul>
            </div>
        </div>
        <!-- 加入贝豪 -->
        <div id="joinBaho" class="join_baho">
            <div class="join_title">
                <h1 class="h1_style">加入贝豪</h1>
                <h3 class="h3_style"><router-link to="">联系我们&nbsp;>></router-link></h3>
                <span class="map_icon"></span>
                <p class="address_title">公司地址：</p>
                <p class="address_detial">杭州市滨江区江陵路88号万轮科技园5号楼</p>
            </div>
            <div class="map_container">
                <div id="container"></div>
            </div>
            <ul class="join_baho_contact">
                <li class="f_left">
                    <span class="contact_icon"></span>
                    <span class="contact_message">
                        联系方式：<br>
                        <a href="400-967-8655">400-967-8655</a>
                    </span>
                </li>
                <li class="f_left">
                    <span class="contact_icon"></span>
                    <span class="contact_message">
                        公司邮箱：<br>
                        bahogroup@baho.cn 
                    </span>
                </li>
            </ul>
        </div>
        <m_top></m_top>
    </div>
</template>
<script>
    import img from '@/assets/img/mobile/banner.png'
    import img2 from '@/assets/img/mobile/banner3.png'
    import img3 from '@/assets/img/mobile/banner4.png'
    export default {
        name: 'index',
        data() {
            return {
                bannerImage: [
                    {
                        address: img,
                    },
                    {
                        address: img2,
                    },
                    {
                        address: img3,
                    },
                ], // 轮播图
                animate: false, // 新闻切换动画
                newsData:[
                    {
                        id: 1,
                        title: '新闻新闻新闻55555',
                        updateDate: '2018-11-24'
                    },
                    {
                        id: 2,
                        title: '你好新闻新闻222',
                        updateDate: '2018-11-24'
                    },
                    {
                        id: 3,
                        title: '来啦新闻新闻333',
                        updateDate: '2018-11-24'
                    },
                ], // 新闻数据
                timer: null,
                language: 'zh',
                isShowCode: false, // 是否显示二维码
                tabindex: 0,
                bahoTab:[
                    {name: '公司简介'},
                    {name: '公司历史'},
                    {name: '企业价值观'},
                    {name: '贝豪使命'},
                ],
                relationTabs: [
                    {name: '社会责任'},
                    {name: '合作伙伴'}
                ],
                relationIndex: 0, // 投资者关系tab
                addressText: '', // 地图文字
                isScrollToTop: false, // 是否回到顶部
            }
        },
        methods: {
            // 新闻滚动
            scroll(){
                let newslist = this.$refs.newslist;
                newslist.style.marginTop= -(60/100) + 'rem';
                this.animate=!this.animate;
                var that = this;
                setTimeout(function(){
                    that.newsData.push(that.newsData[0]);
                    that.newsData.shift();
                    newslist.style.marginTop='0rem';
                    that.animate=!that.animate;
                }, 1500)
            },
            // 查看新闻详情
            seeNewsDetial(id) {

            },
            // 显示关注我们的二维码
            joinUs() {
                this.isShowCode = !this.isShowCode
            },
            // 切换关于贝豪tab
            changeTab(index) {
                this.tabindex = index
            },
            // 切换投资者关系tab
            changeRelationTabs(index) {
                this.relationIndex = index
            },
            // 初始化地图
            handleMap (language, addressText) {
                // 初始化地图对象，加载地图
                var map = new window.AMap.Map('container', {
                    center: [120.21874, 30.17899],
                    resizeEnable: true,
                    zoom: 15,
                    features: ['bg', 'road', 'building', 'point'],
                    lang: language // 可选值：en，zh_en, zh_cn
                })
                var info = []
                info.push('<h1 style="color:#CC5522;font-size:14px;">杭州贝豪实业有限公司</h1>')
                info.push(addressText)
                var infoWindow = new window.AMap.InfoWindow({ content: info.join('<br/>') })
                infoWindow.open(map, map.getCenter())
            }
        },
        created() {
            this.timer = setInterval(this.scroll, 4000)
        },
        mounted() {
            this.addressText = '<div> <p style="font-size:12px">杭州市滨江区江陵路88号万轮科技园5号楼</p></div>'
            this.handleMap('zh_cn', this.addressText)
        },
        destroyed() {
            clearInterval(this.timer)
        }
    }
</script>
<style>
    @import '../assets/mless/index/index.css';
</style>

