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
        <div style="background-color: green" id="news">新闻中心</div>
        <div style="background-color: black" id="relation">投资者关系</div>
        <div style="background-color: black" id="joinBaho">加入贝豪</div>
    </div>
</template>
<script>
    import m_banner from '@/components/mBanner/mBanner.vue'
    import img from '@/assets/img/mobile/banner.png'
    import img2 from '@/assets/img/mobile/banner3.png'
    import img3 from '@/assets/img/mobile/banner4.png'
    export default {
        name: 'index',
        components: {
            m_banner
        },
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
                ]
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
            // 切换tab
            changeTab(index) {
                this.tabindex = index
            }
        },
        created() {
            this.timer = setInterval(this.scroll, 4000)
        },
        destroyed() {
            clearInterval(this.timer)
        }
    }
</script>
<style>
    @import '../assets/mless/index/index.css';
</style>

