<template>
    <div class="mobile content_mtop">
        <!-- 首页 -->
        <div id="index" class="index">
            <!-- 首页轮播图 -->
            <m_banner :bannerImage="bannerImage"></m_banner>
            <!-- 新闻 -->
        </div>
        <div style="background-color: yellow" id="about">关于贝豪</div>
        <div style="background-color: blue" id="brand">品牌中心</div>
        <div style="background-color: green" id="news">新闻中心</div>
        <div style="background-color: black" id="relation">投资者关系</div>
        <div style="background-color: black" id="joinBaho">加入贝豪</div>
    </div>
</template>
<script>
    import m_banner from '@/components/mBanner/mBanner.vue'
    import img from '@/assets/img/mobile/banner.png'
    import img2 from '@/assets/img/mobile/banner3.png'
    import img3 from '@/assets/img/mobile/banner4.png'
    export default {
        name: 'index',
        components: {
            m_banner
        },
        data() {
            return {
                bannerImage: [
                    {
                        address: img,
                    },
                    {
                        address: img2,
                    },
                    {
                        address: img3,
                    },
                ],
                animate: false,
                newsData:[
                    {
                        title: '新闻新闻新闻',
                        updateDate: '2018-11-24'
                    },
                    {
                        title: '新闻新闻新闻222',
                        updateDate: '2018-11-24'
                    },
                    {
                        title: '新闻新闻新闻333',
                        updateDate: '2018-11-24'
                    },
                ],
                timer: null,
                language: 'zh'
            }
        },
        methods: {
            scroll(){
                let con1 = this.$refs.con1;
                con1.style.marginTop='-65px';
                this.animate=!this.animate;
                var that = this;
                setTimeout(function(){
                    that.newsData.push(that.newsData[0]);
                    that.newsData.shift();
                    con1.style.marginTop='0px';
                    that.animate=!that.animate;
                }, 1500)
            },
            // 查看新闻详情
            seeNewsDetial(id) {

            }
        },
        created() {
            // this.timer = setInterval(this.scroll, 4000)
        },
        destroyed() {
            // clearInterval(this.timer)
        }
    }
</script>
<style>
    
</style>

