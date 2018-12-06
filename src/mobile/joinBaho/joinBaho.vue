<template>
    <div class="yd_join_baho content_mtop">
        <!-- 顶部banner -->
        <div class="join_banner" :style="{backgroundImage: 'url(' + topBanner + ')'}">
            <h1>{{title}}</h1>
        </div>
        <!-- 员工活动 -->
        <div class="staff_activity join_title">
            <h2>{{staffTitle}}</h2>
            <m_banner :bannerImage="bannerImage" class="staff_banner"></m_banner>
        </div>
        <!-- 宣传视频 -->
        <div class="promotional_video join_title">
            <h2>{{videoTitle}}</h2>
            <div class="video_box">
                <video :src="videoUrl" controls="controls" poster="../../assets/img/mobile/video.jpg"></video>
            </div>
        </div>
        <!-- 招聘信息 -->
        <div class="recruitment_info join_title">
            <h2>{{recruitTitle}}</h2>
            <ul class="recruitment_info_detial">
                <li
                  @click="showRecruitDetial(index, item.id)"
                  v-for="(item, index) in recruitDetial"
                  :key="index"
                >
                    <h3>{{item.name}}</h3>
                    <span>{{language == 'zh' ? '工作地点' : 'Working Location'}}：{{item.workPlace}}</span>
                    <span>{{language == 'zh' ? '学历要求' : 'Educational'}}：{{item.education}}</span>
                    <span>{{language == 'zh' ? '薪资' : 'Salary'}}：{{item.salary}}</span>
                    <span style="margin-right: 0">{{language == 'zh' ? '人数' : 'Recruiting Numbers'}}：{{item.number}}</span>
                    <div class="info_content" v-show="detialIndex === index">
                        <div>
                            <strong>{{language == 'zh' ? '岗位职责' : 'Responsibilities'}}：</strong>
                            <p v-html="responsibility"></p>
                        </div>
                        <div>
                            <strong>{{language == 'zh' ? '任职要求' : 'Requirements'}}：</strong><br>
                            <p v-html="qualification"></p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 联系我们 -->
        <div class="contact_us join_title">
            <h2>{{contactTitle}}</h2>
            <div class="contact_address">
                <span class="map_icon"></span>
                <p class="address_title">{{language == 'zh' ? '公司地址': 'Company Address'}}：</p>
                <p class="address_detial">{{companyAddress}}</p>
            </div>
            <div class="map_container">
                <div id="container"></div>
            </div>
            <ul class="join_baho_contact">
                <li class="f_left">
                    <span class="contact_icon"></span>
                    <span class="contact_message">
                        {{language == 'zh' ? '联系方式' : 'Tel'}}：<br>
                        <a :href="'tel:' + companyPhone">{{companyPhone}}</a>
                    </span>
                </li>
                <li class="f_left">
                    <span class="contact_icon"></span>
                    <span class="contact_message">
                        {{language == 'zh' ? '公司邮箱' : 'Email'}}：<br>
                        {{companyEmail}}
                    </span>
                </li>
            </ul>
        </div>
        <m_top></m_top>
    </div>
</template>
<script>
    import { joinBahoInterface } from '@/utils/mHttp.js'
    export default {
        name: 'join',
        data() {
            return {
                language: 'zh',
                topBanner: '', // 顶部banner
                title: '',
                staffTitle: '', // 员工活动标题
                bannerImage: [], // 员工活动轮播图
                videoTitle: '', // 视频标题
                videoUrl: '', // 视频地址
                recruitTitle: '', // 招聘标题
                recruitDetial: [],
                detialIndex: null,
                clickShowDetial: true, //  是否显示招聘信息详情
                responsibility: '', // 岗位职责
                qualification: '', // 任职条件
                contactTitle: '', // 联系我们标题
                companyAddress: '',
                companyPhone: '',
                companyEmail: '',
            }
        },
        methods: {
            getBahoTitle() {
                joinBahoInterface.getDetialTitle({
                    languageType: this.language
                }).then(res => {
                    if(res.success) {
                        this.topBanner = res.body.title.detailPicUrl // 顶部banner
                        this.title = res.body.title.name
                    }
                })
            },
            // 获取员工活动banner
            getActivityBanner() {
                joinBahoInterface.getActivityBanner({
                    languageType: this.language
                }).then(res => {
                    if(res.success) {
                        this.staffTitle = res.body.title
                        this.bannerImage = res.body.pic
                    }
                })
            },
            // 获取视频
            getVideoData() {
                joinBahoInterface.getVideo({
                    languageType: this.language
                }).then(res => {
                    if(res.success) {
                        this.videoTitle = res.body.title
                        this.videoUrl = res.body.list[0].videoUrl
                    }
                })
            },
            // 获取招聘信息
            getRecruitInfoData() {
                joinBahoInterface.getRecruitInfoData({
                    languageType: this.language
                }).then(res => {
                    if(res.success) {
                        this.recruitTitle = res.body.title
                        this.recruitDetial = res.body.list
                    }
                })
            },
            // 获取招聘信息详情
            getRecruitInfo(id) {
                joinBahoInterface.getRecruitInfoDetial({
                    id: id
                }).then(res => {
                    if(res.success) {
                        this.responsibility = res.body.bahoZhaopin.postDuties // 岗位职责
                        this.qualification = res.body.bahoZhaopin.requirements // 任职条件
                    }
                })
            },
            // 显示招聘信息详情
            showRecruitDetial(index, id) {
                this.detialIndex = index
                this.getRecruitInfo(id)
            },
            // 获取联系我们数据
            getContactData() {
                joinBahoInterface.getContactUsData({
                    languageType: this.language
                }).then(res => {
                    if(res.success) {
                        this.contactTitle = res.body.title
                        this.companyAddress = res.body.info[0].address
                        this.companyPhone = res.body.info[0].phone
                        this.companyEmail = res.body.info[0].email
                    }
                })
            },
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
            executeAll() {
                this.getBahoTitle()
                this.getActivityBanner()
                this.getVideoData()
                this.getRecruitInfoData()
                this.getContactData()
                if(this.language === 'zh') {
                    this.addressText = '<div> <p style="font-size:12px">杭州市滨江区江陵路88号万轮科技园5号楼</p></div>';
                    this.handleMap("zh_cn", this.addressText);
                } else if(this.language === 'en') {
                    this.addressText = '<div> <p style="font-size:10px">Building No. 5 Jiangling Road No. 88, Binjiang District,Hangzhou,Zhejiang</p></div>'
                    this.handleMap('en', this.addressText)
                }
            }
        },
        created() {
            
        },
        mounted() {
            this.language = localStorage.getItem('language') ? localStorage.getItem('language') : 'zh'
            this.executeAll()
            this.$mBus.$on('changeLanguage', language => {
                this.language = language
                this.executeAll()
            })
        },
    }
</script>
<style>
    @import '../../assets/mless/joinBaho/joinBaho.css';
</style>
