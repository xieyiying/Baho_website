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
                        <span class="news_title text_over">{{news.mainTitle}}</span><span class="news_date">{{news.update}}</span>
                    </li>
                </ul>
                </div>
                <!-- 联系我们 -->
                <div class="yd_contact f_left">
                <span class="contact_us">联系我们</span>
                |
                <span class="join_us" @click="joinUs">关注贝豪</span>
                <img :src="QR_code" alt v-show="isShowCode">
                </div>
            </div>
        </div>
        <!-- 关于贝豪 -->
        <about-baho id="about"></about-baho>
        <!-- 品牌中心 -->
        <brand-center id="brand"></brand-center>
        <!-- 新闻中心 -->
        <news-center id="news"></news-center>
        <!-- 投资者关系 -->
        <investor-relations id="relation"></investor-relations>
        <!-- 加入贝豪 -->
        <join-baho id="joinBaho"></join-baho>
        <!-- 返回顶部 -->
        <m_top></m_top>
    </div>
</template>
<script>
import { indexInterface } from "@/utils/mHttp.js";
import aboutBaho from './aboutBaho'
import brandCenter from './brandCenter'
import newsCenter from './newsCenter'
import investorRelations from './investorRelations'
import joinBaho from './joinBaho'
export default {
    name: "index",
    components: {
        aboutBaho,
        brandCenter,
        newsCenter,
        investorRelations,
        joinBaho
    },
    data() {
        return {
            language: "zh",
            bannerImage: [], // 轮播图
            animate: false, // 新闻切换动画
            newsData: [], // 新闻数据
            QR_code: "", // 二维码图片
            timer: null,
            isShowCode: false, // 是否显示二维码
        };
    },
    methods: {
        // 新闻滚动
        scroll() {
            let newslist = this.$refs.newslist;
            newslist.style.marginTop = -(60 / 100) + "rem";
            this.animate = !this.animate;
            var that = this;
            setTimeout(function() {
                that.newsData.push(that.newsData[0]);
                that.newsData.shift();
                newslist.style.marginTop = "0rem";
                that.animate = !that.animate;
            }, 1500);
        },
        // 获取首页轮播图
        getIndexBanner() {
            indexInterface.getIndexBanner({
                languageType: this.language
            }).then(res => {
                if (res.success) {
                    this.bannerImage = res.body.pic;
                    this.newsData = res.body.rollNews;
                    this.QR_code = res.body.QR_Code[0].wechatPicUrl;
                }
            });
        },
        // 查看新闻详情
        seeNewsDetial(id) {
            this.$router.push({
                path: "/newsDetial",
                query: {
                newsId: id
                }
            });
        },
        // 显示关注我们的二维码
        joinUs() {
            this.isShowCode = !this.isShowCode;
        },
    },
    created() {
        this.timer = setInterval(this.scroll, 4000);
        this.getIndexBanner();
    },
    destroyed() {
        clearInterval(this.timer);
    }
};
</script>
<style>
@import "../../assets/mless/index/index.css";
@import "../../assets/mless/newsList/newsList.css";
</style>

