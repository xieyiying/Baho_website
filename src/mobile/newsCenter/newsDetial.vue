<template>
    <div class="yd_news_detial content_mtop">
        <h1 class="news_title">{{title}}</h1>
        <p class="news_time">{{language == 'zh' ? '发布时间' : 'Release time'}}：<span>{{updateDate}}</span></p>
        <div class="news_content" v-html="content"></div>
        <m_top></m_top>
    </div>
</template>
<script>
    import { getSingleNewsData } from '@/utils/mHttp.js'
    export default {
        name: 'news_detial',
        data() {
            return {
                language: 'zh',
                newsId: '',
                title: '',
                updateDate: '',
                content: ''
            }
        },
        methods: {
            getNewsDetial(id) {
                getSingleNewsData({
                    id: id
                }).then(res => {
                    if(res.success) {
                        this.title = res.body.info.title
                        this.updateDate = res.body.info.updateDate
                        this.content = res.body.info.content
                    }
                    
                })
            }
        },
        created() {
            this.newsId = this.$route.query.newsId
            this.language = localStorage.getItem('language') ? localStorage.getItem('language') : 'zh'
            this.getNewsDetial(this.newsId)
            this.$mBus.$on('changeLanguage', language => {
                this.language = language
                this.$router.push({path: '/news'})
            })
        }
    }
</script>
<style>
    .yd_news_detial {
        width: 100%;
    }
    .yd_news_detial .news_title {
        width: 100%;
        font-size: 0.44rem;
        margin: 0.5rem 0;
        text-align: center;
    }
    .yd_news_detial .news_time {
        font-size: 0.28rem;
        color: #999999;
        text-align: center;
    }
    .yd_news_detial .news_time span {
        color: #3c3c3c;
    }
    .yd_news_detial .news_content {
        padding: 0.5rem 0.3rem;
    }
    .yd_news_detial .news_content p {
        line-height: 0.4rem;
    }
    .yd_news_detial .news_content p span{
        display: inline-block;
        line-height: 0.4rem;
    }
    .yd_news_detial .news_content img {
        width: 100%;
    }
    .yd_news_detial .news_content .ql-align-center {
        text-align: center;
    }
</style>