<template>
    <div class="yd_news_center content_mtop">
        <div class="news_center_banner" :style="{backgroundImage: 'url(' + brandBanner +')'}">
            <h1>新闻中心</h1>
        </div>
        <h3 class="news_sub_title">新闻资讯抢先知晓</h3>
        <div class="news_content">
            <ul class="news_content_top">
                <li class="f_left">
                    <router-link to="">
                        <span class="news_img"></span>
                        <h2 class="top_news_title">喜讯！</h2>
                        <p class="top_news_content text_over">9贝豪获得嘉御基金投资！</p>
                    </router-link>
                </li>
                <li class="f_left">
                    <router-link to="">
                        <span class="news_img"></span>
                        <h2 class="top_news_title">喜讯！</h2>
                        <p class="top_news_content text_over">9贝豪获得嘉御基金投资！</p>
                    </router-link>
                </li>
            </ul>
            <ul class="news_content_bottom">
                <li>
                    <router-link to="">
                        <span class="news_img"></span>
                        <h2 class="top_news_title">喜讯！</h2>
                        <p class="top_news_content text_over">9贝豪获得嘉御基金投资！9贝豪获得嘉御基金投资！9贝豪获得嘉御基金投资！</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <span class="news_img"></span>
                        <h2 class="top_news_title">喜讯！</h2>
                        <p class="top_news_content text_over">9贝豪获得嘉御基金投资！9贝豪获得嘉御基金投资！9贝豪获得嘉御基金投资！</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <span class="news_img"></span>
                        <h2 class="top_news_title">喜讯！</h2>
                        <p class="top_news_content text_over">9贝豪获得嘉御基金投资！9贝豪获得嘉御基金投资！9贝豪获得嘉御基金投资！</p>
                    </router-link>
                </li>
            </ul>
        </div>
        <m_top></m_top>
    </div>
</template>
<script>
    import img from '@/assets/img/mobile/banner.png'
    export default {
        name: 'news',
        data() {
            return {
                brandBanner: img,
            }
        }
    }
</script>
<style>
    @import '../../assets/mless/newsCenter/newsCenter.css';
    @import '../../assets/mless/newsList/newsList.css';
</style>
