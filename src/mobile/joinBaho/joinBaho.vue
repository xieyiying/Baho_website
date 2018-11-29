<template>
    <div class="yd_join_baho content_mtop">
        <!-- 顶部banner -->
        <div class="join_banner" :style="{backgroundImage: 'url(' + img + ')'}">
            <h1>加入贝豪</h1>
        </div>
        <!-- 员工活动 -->
        <div class="staff_activity join_title">
            <h2>员工活动</h2>
            <m_banner :bannerImage="bannerImage" class="staff_banner"></m_banner>
        </div>
        <!-- 宣传视频 -->
        <div class="promotional_video join_title">
            <h2>宣传视频</h2>
            <div class="video_box">
                <video src="http://47.99.165.110:80/video/baho_video.mp4" controls="controls" poster="../../assets/img/mobile/video.jpg"></video>
            </div>
        </div>
        <!-- 招聘信息 -->
        <div class="recruitment_info join_title">
            <h2>招聘信息</h2>
            <ul class="recruitment_info_detial">
                <li @click="showRecruitDetial(index)" v-for="(item, index) in recruitDetial" :key="index">
                    <h3>{{item.title}}</h3>
                    <span>工作地点：杭州滨江</span>
                    <span>学历要求：无</span>
                    <span>薪资：面谈</span>
                    <span style="margin-right: 0">人数：5</span>
                    <div class="info_content" v-show="detialIndex === index">
                        <strong>岗位职责：</strong><br>
                        1. 三年以上产品拍摄经验三年以上产品拍摄经验三年以上产品拍摄经验三年以上产品拍摄经验三年以上产品拍摄经验三年以上产品拍摄经验。<br>
                        2. 团队意识强，团队协作能力突出。<br><br>
                        <strong>任职条件：</strong><br>
                        1. 三年以上产品拍摄经验三年以上产品拍摄经验三年以上产品拍摄经验三年以上产品拍摄经验三年以上产品拍摄经验三年以上产品拍摄经验。<br>
                        2. 团队意识强，团队协作能力突出。<br>
                        3. 三年以上产品拍摄经验三年以上产品拍摄经验三年以上产品拍摄经验三年以上产品拍摄经验三年以上产品拍摄经验三年以上产品拍摄经验。<br>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 联系我们 -->
        <div class="contact_us join_title">
            <h2 >联系我们</h2>
            <div class="contact_address">
                <span class="map_icon"></span>
                <p class="address_title">公司地址：</p>
                <p class="address_detial">杭州市滨江区江陵路88号万轮科技园5号楼</p>
            </div>
            <div class="map_container">
                <div id="container"></div>
            </div>
            <ul class="join_baho_contact">
                <li class="f_left">
                    <span class="contact_icon"></span>
                    <span class="contact_message">
                        联系方式：<br>
                        <a href="400-967-8655">400-967-8655</a>
                    </span>
                </li>
                <li class="f_left">
                    <span class="contact_icon"></span>
                    <span class="contact_message">
                        公司邮箱：<br>
                        bahogroup@baho.cn 
                    </span>
                </li>
            </ul>
        </div>
        <m_top></m_top>
    </div>
</template>
<script>
    import joinBanner from '@/assets/img/mobile/banner.png'
    import img from '@/assets/img/mobile/banner.png'
    import img2 from '@/assets/img/mobile/banner3.png'
    import img3 from '@/assets/img/mobile/banner4.png'
    export default {
        name: 'join',
        data() {
            return {
                img: joinBanner, // 顶部banner
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
                ], // 员工活动轮播图
                recruitDetial: [
                    {
                        title: '摄影师'
                    },
                    {
                        title: '视觉设计师'
                    },
                    {
                        title: '天猫运营'
                    },
                ],
                detialIndex: null, //  是否显示招聘信息详情
                clickShowDetial: true
            }
        },
        methods: {
            // 初始化地图
            handleMap (language, addressText) {
                // 初始化地图对象，加载地图
                var map = new window.AMap.Map('container', {
                    center: [120.21874, 30.17899],
                    resizeEnable: true,
                    zoom: 15,
                    features: ['bg', 'road', 'building', 'point'],
                    lang: language // 可选值：en，zh_en, zh_cn
                })
                var info = []
                info.push('<h1 style="color:#CC5522;font-size:14px;">杭州贝豪实业有限公司</h1>')
                info.push(addressText)
                var infoWindow = new window.AMap.InfoWindow({ content: info.join('<br/>') })
                infoWindow.open(map, map.getCenter())
            },
            // 显示招聘信息详情
            showRecruitDetial(index) {
                this.detialIndex = index
            }
        },
        mounted() {
            this.addressText = '<div> <p style="font-size:12px">杭州市滨江区江陵路88号万轮科技园5号楼</p></div>'
            this.handleMap('zh_cn', this.addressText)
        },
    }
</script>
<style>
    @import '../../assets/mless/joinBaho/joinBaho.css';
</style>
