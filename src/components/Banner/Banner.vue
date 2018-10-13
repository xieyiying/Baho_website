<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(img, index) in bannerImage" :key="index">
                <img :src="img.address" alt="" style="width: 100%; height: 100%;">
            </div>
        </div>
        <!-- 分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 导航按钮 -->
        <div class="banner_change_button">
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
        
    </div>
</template>
<script>
    import Swiper from 'swiper'
    export default {
        name: 'banner',
        props: {
            bannerImage: Array
        },
        methods: {
            initBanner() {
                var mySwiper = new Swiper('.swiper-container', {
                    speed: 1500,
                    autoplay: {
                        delay: 1500,
                        disableOnInteraction: false,
                        stopOnLastSlide: false,
                    },
                    // loop: true,
                    effect: 'fade', // 切换效果
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    observer:true,
                    observeParents:true
                })
            }
        },
        mounted() {
            this.$nextTick(this.initBanner())
            this.$Bus.$on('changeLanguage', language => {
                this.$nextTick(this.initBanner())
            })
        },
    }
</script>
<style>
    @import 'swiper/dist/css/swiper.min.css';
    .swiper-container {
        width: 100%;
        height: 800px;
    }
    .swiper-container .banner_change_button {
        display: none;
    }
    .swiper-container:hover .banner_change_button{
        display: block;
    }
    .swiper-container .swiper-pagination {
        width: 100%;
        height: 30px;
        justify-content: center;
    }
    .swiper-container .swiper-pagination .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #ffffff;
        display: inline-block;
        margin-left: 15px;
        cursor: pointer;
    }
    .swiper-container .swiper-pagination .swiper-pagination-bullet-active {
        background: #2e2e57;
    }
    .swiper-container .swiper-button-prev, .swiper-container .swiper-button-next{
        width: 50px;
        height: 50px;
        background-image: url(../../../static/img/prev.png);
        background-size: cover;
        margin-left: 100px;
        outline: none;
    }
    .swiper-container .swiper-button-prev:hover {
        background-image: url(../../../static/img/prev_on.png);
    }
    .swiper-container .swiper-button-next {
        background-image: url(../../../static/img/next.png);
        margin-right: 100px;
        margin-left: 0;
    }
    .swiper-container .swiper-button-next:hover {
        background-image: url(../../../static/img/next_on.png);
    }
</style>

