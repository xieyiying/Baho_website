<template>
    <div class="news_detial">
        <div class="news_detial_content">
            <h2 class="title">{{newsTitle}}</h2>
            <p class="new_date">{{language == 'zh' ? '发布时间' : 'Release time'}}：<span>{{newsDate}}</span></p>
            <div class="new_content">
                <div class="ql-editor" v-html="newsContent"></div>
            </div>
        </div>
    </div>
</template>
<script>
    import { GetNewsDetialData } from '@/utils/https'
    export default {
        name: 'NewsDetial',
        data() {
            return {
                newsId: '',
                newsTitle: '',
                newsDate: '',
                newsContent: '',
                language: 'zh'
            }
        },
        methods: {
            getNewsDetial(id, language) {
                GetNewsDetialData({
                    id: id,
                    languageType: language
                }, res => {
                    this.newsTitle = res.body.bahoNews.title
                    this.newsDate = res.body.bahoNews.updateDate
                    this.newsContent = res.body.bahoNews.content
                })
            }
        },
        created() {
            this.language = localStorage.getItem('language') ? localStorage.getItem('language') : 'zh'
            this.newsId = this.$route.params.newsId
            this.getNewsDetial(this.newsId, this.language)
            this.$Bus.$on('changeLanguage', language => {
                this.language = language
                this.$router.push({name: 'news'})
                // this.getNewsDetial(this.newsId, language)
            })
        }
    }
</script>
<style>
    .news_detial {
        width: 100%;
        min-width: 1200px;
    }
    .news_detial_content {
        width: 1130px;
        height: auto;
        margin: 0 auto;
        padding-top: 40px;
        text-align: center;
    }
    .news_detial_content .title {
        font-size: 18px;
        color: #535353;
        font-weight: 800;
    }
    .news_detial_content .new_date {
        font-size: 12px;
        color: #999;
        margin-top: 10px;
        margin-bottom: 40px;
        text-align: center;
    }
    .news_detial_content .new_date span {
        color: #333;
    }
</style>
<style>
    .news_detial_content .new_content {
        width: 820px;
        margin: 0 auto;
        text-align: left;
    }

    .news_detial_content .new_content p {
        line-height: 25px;
    }
    .news_detial_content .new_content img{
        max-width: 100%;
    }
    .news_detial_content .new_content .ql-align-center {
        text-align: center;
    }
</style>


