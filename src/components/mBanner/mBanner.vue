<template>
    <div class="swiper-container" :style="{'height': boxHeight + 'rem'}" id="banner_box">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(img, index) in bannerImage" :key="index">
                <img :src="img.address" alt="" style="width:100%;height:100%;vertical-align: middle;" class="banner_img">
            </div>
        </div>
        <!-- 分页器 -->
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
import Swiper from "swiper";
export default {
  name: "banner",
  props: {
    bannerImage: Array
  },
  data() {
      return {
          boxHeight: 4.7,
      }
  },
  methods: {
    initBanner() {
      var mySwiper = new Swiper(".swiper-container", {
        speed: 3000,
        autoplay: 1500,
        autoplayStopOnLast: false,
        autoplayDisableOnInteraction: false,
        effect: "fade", // 切换效果
        pagination: ".swiper-pagination",
        paginationClickable: true,
        observer: true,
        observeParents: true
      });
    },
  },
  mounted() {
    this.$nextTick(this.initBanner());
    // this.$Bus.$on("changeLanguage", language => {
    //   this.$nextTick(this.initBanner());
    // });
  }
};
</script>
<style>
@import "swiper/dist/css/swiper.min.css";
.swiper-container {
  width: 100%;
  height: 4.7rem;
  z-index: 1;
}
.swiper-container .swiper-wrapper .swiper-slide {
    text-align: center
}
.swiper-container .swiper-pagination {
  width: 100%;
  height: 30px;
  justify-content: center;
  z-index: 99;
}
.swiper-container .swiper-pagination .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #2c2c2c;
  display: inline-block;
  margin-left: 15px;
  cursor: pointer;
}
.swiper-container .swiper-pagination .swiper-pagination-bullet-active {
  width: 20px;
  height: 10px;
  border-radius: 20px;
  background: #fff;
}
.swiper-container-horizontal>.swiper-pagination-bullets {
    bottom: -5px;
}
</style>

