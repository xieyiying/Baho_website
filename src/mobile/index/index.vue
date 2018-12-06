<template>
    <div class="mobile content_mtop">
        <!-- 首页 -->
        <home id="home" ref="home"></home>
        <!-- 关于贝豪 -->
        <about-baho id="about" ref="about"></about-baho>
        <!-- 品牌中心 -->
        <brand-center id="brand" ref="brand"></brand-center>
        <!-- 新闻中心 -->
        <news-center id="news" ref="news"></news-center>
        <!-- 投资者关系 -->
        <investor-relations id="responsibility" ref="responsibility"></investor-relations>
        <!-- 加入贝豪 -->
        <join-baho id="join" ref="join"></join-baho>
        <!-- 返回顶部 -->
        <m_top></m_top>
    </div>
</template>
<script>
    import home from './home'
    import aboutBaho from './aboutBaho'
    import brandCenter from './brandCenter'
    import newsCenter from './newsCenter'
    import investorRelations from './investorRelations'
    import joinBaho from './joinBaho'
    export default {
        name: "index",
        components: {
            home,
            aboutBaho,
            brandCenter,
            newsCenter,
            investorRelations,
            joinBaho
        },
        data() {
            return {
                
            };
        },
        methods: {
            
        },
        created() {
            
        },
        mounted() {
            this.$mBus.$on('hashJump', id => {
                let pageId = id.substring(id.indexOf('#'))
                let hashId = document.querySelector(pageId)
                if(hashId) {
                    let y = hashId.offsetTop
                    while(hashId == hashId.offsetParent) {
                        y += hashId.offsetTop
                    }
                    y -= 65
                    window.scrollTo(0, y)
                }
            })
        },
    };
</script>
<style>
    @import "../../assets/mless/index/index.css";
    @import "../../assets/mless/newsList/newsList.css";
</style>

