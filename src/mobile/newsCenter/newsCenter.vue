<template>
    <div class="yd_news_center content_mtop">
        <div class="news_center_banner" :style="{backgroundImage: 'url(' + newsBanner +')'}">
            <h1>{{newsTitle}}</h1>
        </div>
        <h3 class="news_sub_title">{{newsSubTitle}}</h3>
        <div class="news_content">
            <ul class="news_content_top">
                <li
                  class="f_left"
                  v-for="(news, index) in topNewsList"
                  :key="index"
                >
                    <router-link :to="{path: '/newsDetial', query: {newsId: news.id}}">
                        <span class="news_img" :style="{backgroundImage: 'url(' + news.name + ')'}"></span>
                        <h2 class="top_news_title">{{news.title}}</h2>
                        <p class="top_news_content text_over">{{news.content}}</p>
                    </router-link>
                </li>
            </ul>
            <ul class="news_content_bottom">
                <li v-for="(news, index) in bottomNewsList" :key="index">
                    <router-link :to="{path: '/newsDetial', query: {newsId: news.id}}">
                        <span class="news_img" :style="{backgroundImage: 'url(' + news.name + ')'}"></span>
                        <h2 class="top_news_title">{{news.title}}</h2>
                        <p class="top_news_content text_over">{{news.content}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
        <m_top></m_top>
    </div>
</template>
<script>
    import img from '@/assets/img/mobile/banner.png'
    import { getAllNewsData } from '@/utils/mHttp.js'
    export default {
        name: 'news',
        data() {
            return {
                language: 'zh',
                newsBanner: '',
                newsTitle: '',
                newsSubTitle: '',
                topNewsList: [],
                bottomNewsList: []
            }
        },
        methods: {
            getNewsList() {
                getAllNewsData({
                    languageType: this.language,
                    num: 'all'
                }).then(res => {
                    if(res.success) {
                        this.newsBanner = res.body.title.detailPicUrl
                        this.newsTitle = res.body.title.name
                        this.newsSubTitle = res.body.title.chirdenTitle
                        this.topNewsList = res.body.topList
                        this.bottomNewsList = res.body.list
                    }
                })
            }
        },
        created() {
            this.language = localStorage.getItem('language') ? localStorage.getItem('language') : 'zh'
            this.getNewsList()
            this.$mBus.$on('changeLanguage', language => {
                this.language = language
                this.getNewsList()
            })
            
        }
    }
</script>
<style>
    @import '../../assets/mless/newsCenter/newsCenter.css';
    @import '../../assets/mless/newsList/newsList.css';
</style>
