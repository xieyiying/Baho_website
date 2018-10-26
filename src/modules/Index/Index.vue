<template>
    <div class="Index_page">
        <div class="index_container">
            <!-- 轮播图 -->
            <v_banner :bannerImage=bannerImage></v_banner>
            <!-- 新闻 -->
            <div class="index_news">
                <div class="news_content">
                    <i></i>
                    <ul id="con1" ref="con1" :class="{anim:animate==true}">
                        <li v-for="(news, index) in newsData" :key="index">
                            <a class="news_link" @click="seeNewsDetial(news.id, 3)">
                                {{news.title}}<span>{{news.updateDate}}</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="about_baho">
                    <a class="about_baho_text" @click="changeActive(5)">
                        {{language == 'zh' ? '联系我们' : 'Contact Us'}}
                    </a>
                    |
                    <router-link to="/" class="about_baho_text">
                        {{language == 'zh' ? '关注贝豪' : 'Follow  Us'}}
                        <span class="code_content"></span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import v_banner from '@/components/Banner/Banner.vue'
    import { GetIndexNewsData, GetIndexBannerData } from '@/utils/https'
    export default {
        name: 'home',
        components: {
            v_banner
        },
        data() {
            return {
                bannerImage: [],
                animate:false,
                //消息列表对应的数组
                newsData:[],
                timer: null,
                language: 'zh'
            }
        },
        methods: {
            scroll(){
                let con1 = this.$refs.con1;
                con1.style.marginTop='-65px';
                this.animate=!this.animate;
                var that = this;
                setTimeout(function(){
                    that.newsData.push(that.newsData[0]);
                    that.newsData.shift();
                    con1.style.marginTop='0px';
                    that.animate=!that.animate;
                }, 1500)
            },
            // 获取轮播图数据
            getBannerData(language) {
                // this.$utils.Get('bhgw/page/bahoweb/roll/bahoRollPic/getRollByType', {
                //     type: 0,
                //     languageType: language
                // }, res => {
                //     this.bannerImage = res
                // })
                GetIndexBannerData({
                    type: 0,
                    languageType: language
                }, res => {
                    this.bannerImage = res
                })
            },
            // 获取新闻数据
            getNewsData(language) {
                // this.$utils.Get('bhgw/page/bahoweb/news/bahoNews/listNews', {
                //     languageType: language
                // }, res => {
                //     this.newsData = res.body.list
                // })
                GetIndexNewsData({
                    languageType: language
                }, res => {
                    this.newsData = res.body.list
                })
            },
            changeActive(isActive) {
                this.$router.push({path: '/ContactUs'})
                this.$Bus.$emit('newActive', isActive)
            },
            // 查看新闻详情
            seeNewsDetial(id, isActive) {
                this.$router.push({name: 'newsdetial', params: {newsId: id}})
                this.$Bus.$emit('newActive', isActive)
            }
        },
        created(){
            this.timer = setInterval(this.scroll, 4000)
            this.language = localStorage.getItem('language') ? localStorage.getItem('language') : 'zh'
            this.getBannerData(this.language)
            this.getNewsData(this.language)
            this.$Bus.$on('changeLanguage', language => {
                this.language = language
                this.getBannerData(language)
                this.getNewsData(language)
            })
        },
        destroyed() {
            clearInterval(this.timer)
        }
    }
</script>
<style>
    @import '../../assets/less/Index/Index.css';
</style>


