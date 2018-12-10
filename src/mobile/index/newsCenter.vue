<template>
    <div class="news_center">
        <div class="news_title" :style="{backgroundImage: 'url(' + newsBgImage +')'}">
            <h1>{{newsTitle}}</h1>
            <h3>{{newsSubTitle}}</h3>
            <router-link to="/news" class="see_all">{{language === 'zh' ? '查看全部' : 'See All'}}&nbsp;>></router-link>
        </div>
        <div class="news_content">
            <ul class="news_content_top">
                <li
                    class="f_left"
                    v-for="(item, index) in topNewsList"
                    :key="index">
                    <router-link :to="{path: '/newsDetial', query: {newsId: item.id}}">
                        <span class="news_img" :style="{backgroundImage: 'url(' + item.name + ')'}"></span>
                        <h2 class="top_news_title">{{item.mainTitle}}</h2>
                        <div class="top_news_content text_over" v-html="item.title"></div>
                    </router-link>
                </li>
            </ul>
            <ul class="news_content_bottom">
                <li v-for="(item, index) in bottomNewsList" :key="index">
                    <router-link :to="{path: '/newsDetial', query: {newsId: item.id}}">
                        <span class="news_img" :style="{backgroundImage: 'url(' + item.name + ')'}"></span>
                        <h2 class="top_news_title">{{item.mainTitle}}</h2>
                        <div class="top_news_content text_over" v-html="item.title"></div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import { indexInterface } from "@/utils/mHttp.js";
    export default {
        name: 'newsCenter',
        data() {
            return {
                language: "zh",
                newsBgImage: "", // 新闻中心背景图
                newsTitle: "", // 新闻标题
                newsSubTitle: "", // 新闻子标题
                topNewsList: [], // 顶部新闻数组
                bottomNewsList: [], // 底部新闻数据
            }
        },
        methods: {
            // 获取新闻数据
            getNewsData() {
                indexInterface.getNewsCenterData({
                    languageType: this.language,
                    num: 'three'
                }).then(res => {
                    console.log(res)
                    if(res.success) {
                        this.newsBgImage = res.body.title.picUrl
                        this.newsTitle = res.body.title.name // 新闻标题
                        this.newsSubTitle = res.body.title.chirdenTitle // 新闻子标题
                        this.topNewsList = res.body.topList // 顶部新闻数组
                        this.bottomNewsList = res.body.list // 底部新闻数据
                    }
                })
            },
        },
        created() {
            this.language = localStorage.getItem('language') ? localStorage.getItem('language') : 'zh'
            this.getNewsData()
            this.$mBus.$on('changeLanguage', language => {
                this.language = language
                this.getNewsData()
            })
        }
    }
</script>