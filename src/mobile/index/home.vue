<template>
    <div class="index" >
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
                <span class="contact_us" @click="contactUs">{{language === 'zh' ? '联系我们' : 'Contact'}}</span>
                |
                <span class="join_us" @click="joinUs">{{language === 'zh' ? '关注贝豪' : 'Focus us'}}</span>
                <img :src="QR_code" alt v-show="isShowCode">
            </div>
        </div>
    </div>
</template>
<script>
    import { indexInterface } from "@/utils/mHttp.js";
    export default {
        name: 'home',
        data() {
            return {
                language: "zh",
                bannerImage: [], // 轮播图
                animate: false, // 新闻切换动画
                newsData: [], // 新闻数据
                QR_code: "", // 二维码图片
                timer: null,
                isShowCode: false, // 是否显示二维码
            }
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
            getBanner() {
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
            // 联系我们
            contactUs() {
                this.$router.push({path: '/join'})
            }
        },
        created() {
            this.timer = setInterval(this.scroll, 4000);
            this.language = localStorage.getItem('language') ? localStorage.getItem('language') : 'zh'
            this.getBanner();
            this.$mBus.$on('changeLanguage', language => {
                this.language = language
                this.getBanner();
            })
        },
        destroyed() {
            clearInterval(this.timer);
        }
    }
</script>