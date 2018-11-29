<template>
    <div class="m_banner">
        <van-swipe :autoplay="3000" indicator-color="white" class="banner_box">
            <van-swipe-item v-for="(img, index) in bannerImage" :key="index">
                <img :src="img.address" alt="" style="width: 100%; height: 100%">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
    export default {
        name: 'm_banner',
        props: {
            bannerImage: {
                type: Array,
                default: []
            }
        }
    }
</script>
<style>
    .m_banner {
        width: 100%;
        height: 4.73rem;
    }
    .m_banner .banner_box {
        width: 100%;
        height: 100%;
    }
    .m_banner .banner_box .van-swipe__track {
        height: 4.73rem;
    }
    .m_banner .banner_box .van-swipe__indicators .van-swipe__indicator {
        width: 0.11rem;
        height: 0.11rem;
        background-color: #fff;
    }
    .van-swipe__indicator--active {
        width: 0.29rem!important;
        height: 0.11rem!important;
        border-radius: 0.1rem;
        background-color: #fff;
    }
</style>