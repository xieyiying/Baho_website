<template>
    <div class="news_center">
        <div class="news_centet_content">
            <div class="news_center_container">
                <ul class="first_list">
                    <li
                      v-for="(news, index) in topListNews"
                      :key="index"
                      @click="getNewsDetial(news.id, news.isClick)"
                    >
                        <img :src="news.url" alt="">
                        <div class="shadow" v-if="news.isClick == 1">
                            <p>{{news.title}}</p>
                            <span v-if="language == 'zh'">了解详情&nbsp;>></span>
                            <span v-if="language == 'en'">learn&nbsp;more&nbsp;>></span>
                        </div>
                    </li>
                </ul>
                <div class="news_group"
                  v-for="(newsArr, index) in bottomListNews"
                  :key="index"
                >
                    <template v-if="index % 2 == 0">
                        <ul class="first_group">
                            <li
                              v-for="(news, subIndex) in newsArr"
                              :key="subIndex"
                              @click="getNewsDetial(news.id, news.isClick)"
                            >
                                <img :src="news.url" alt="">
                                <div class="shadow" v-if="news.isClick == 1">
                                    <p>{{news.title}}</p>
                                    <span v-if="language == 'zh'">了解详情&nbsp;>></span>
                                    <span v-if="language == 'en'">learn&nbsp;more&nbsp;>></span>
                                </div>
                            </li>
                        </ul>
                    </template>
                    <template v-else>
                        <ul class="second_group">
                            <li
                              v-for="(news, subIndex) in newsArr"
                              :key="subIndex"
                              @click="getNewsDetial(news.id, news.isClick)"
                            >
                                <img :src="news.url" alt="">
                                <div class="shadow" v-if="news.isClick == 1">
                                    <p>{{news.title}}</p>
                                    <span v-if="language == 'zh'">了解详情&nbsp;>></span>
                                    <span v-if="language == 'en'">learn&nbsp;more&nbsp;>></span>
                                </div>
                            </li>
                        </ul>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { GetNewsCenterData } from '@/utils/https'
    export default {
        name: 'NewsCenter',
        data() {
            return {
                topListNews: [],
                bottomListNews: [],
                language: 'zh'
            }
        },
        methods: {
            // 获取新闻列表
            getNewsData(language) {
                // this.$utils.Get('bhgw/page/bahoweb/news/bahoNews/webListNews', {
                //     languageType: language
                // }, res => {
                //     this.topListNews = res.body.topList
                //     this.bottomListNews = res.body.bottomList
                // })
                GetNewsCenterData({
                    languageType: language
                }, res => {
                    this.topListNews = res.body.topList
                    this.bottomListNews = res.body.bottomList
                })
            },
            // 获取新闻详情，跳转
            getNewsDetial(id, isClick) {
                if(isClick == 1) {
                    this.$router.push({name: 'newsdetial', params: {newsId: id}})
                }
            }
        },
        created() {
            this.language = localStorage.getItem('language') ? localStorage.getItem('language') : 'zh'
            this.getNewsData(this.language)
            this.$Bus.$on('changeLanguage', language => {
                this.language = language
                this.getNewsData(language)
            })
        }
    }
</script>
<style>
    @import '../../assets/less/NewsCenter/NewsCenter.css';
</style>
