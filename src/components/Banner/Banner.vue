<template>
    <div class="swiper-container" :style="{'height': boxHeight + 'px'}" id="banner_box">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(img, index) in bannerImage" :key="index">
                <img :src="img.address" alt="" style="width:100%;height:100%;vertical-align: middle;" class="banner_img">
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
import Swiper from "swiper";
export default {
  name: "banner",
  props: {
    bannerImage: Array
  },
  data() {
      return {
          boxHeight: 800,
          boxWidth: document.body.clientWidth
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
        prevButton: ".swiper-button-prev",
        nextButton: ".swiper-button-next",
        observer: true,
        observeParents: true
      });
    },
    initData() {
        this.initBanner()
        // 获取所有的img标签
        let imgParent = document.getElementById('banner_box')
        // 获取父元素宽高
        let wid = this.getWidHei(imgParent, "width")
        this.boxHeight = 800 * wid / 1903
    },
    // 考虑 IE 的兼容性
    getStyle(el) {
      if (window.getComputedStyle) {
        return window.getComputedStyle(el, null);
      } else {
        return el.currentStyle;
      }
    },
    // 通过当前元素获取宽高
    getWidHei(el, name) {
      let val = name === "width" ? el.offsetWidth : el.offsetHeight,
        which = name === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
      // display is none
      if (val === 0) {
        return 0;
      }
      let style = this.getStyle(el);
      // 左右或上下两边的都减去
      for (let i = 0, a; (a = which[i++]); ) {
        val -= parseFloat(style["border" + a + "Width"]) || 0;
        val -= parseFloat(style["padding" + a]) || 0;
      }
      return val;
    },
    
  },
  mounted() {
    this.$nextTick(this.initData());
    this.$Bus.$on("changeLanguage", language => {
      this.$nextTick(this.initData());
    });
  }
};
</script>
<style>
@import "swiper/dist/css/swiper.min.css";
.swiper-container {
  width: 100%;
  min-width: 1200px;
  height: 800px;
  z-index: 1;
}
.swiper-container .swiper-wrapper .swiper-slide {
    text-align: center
}
.swiper-container .banner_change_button {
  display: none;
}
.swiper-container:hover .banner_change_button {
  display: block;
}
.swiper-container .swiper-pagination {
  width: 100%;
  height: 30px;
  justify-content: center;
  z-index: 3;
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
.swiper-container .swiper-button-prev,
.swiper-container .swiper-button-next {
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

