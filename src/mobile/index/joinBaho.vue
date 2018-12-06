<template>
    <div class="join_baho">
        <div class="join_title" :style="{backgroundImage: 'url(' + joinBgImage +')'}">
            <h1 class="h1_style">{{joinTitle}}</h1>
            <h3 class="h3_style">
            <router-link to="/join">{{joinSubTitle}}&nbsp;>></router-link>
            </h3>
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
            <span class="contact_message">{{language == 'zh' ? '联系方式' : 'Tel'}}：
                <br>
                <a :href="'tel:' + companyPhone">{{companyPhone}}</a>
            </span>
            </li>
            <li class="f_left">
            <span class="contact_icon"></span>
            <span class="contact_message">{{language == 'zh' ? '公司邮箱' : 'Email'}}：
                <br>{{companyEmail}}
            </span>
            </li>
        </ul>
    </div>
</template>
<script>
    import { indexInterface } from "@/utils/mHttp.js";
    export default {
        name: 'joinBaho',
        data() {
            return {
                language: "zh",
                joinBgImage: '', // 加入贝豪背景图
                joinTitle: '', // 加入贝豪标题
                joinSubTitle: '', // 加入贝豪子标题
                companyAddress: '', // 公司地址
                companyPhone: '', // 联系电话
                companyEmail: '', // 公司邮箱
                addressText: "" // 地图文字
            }
        },
        methods: {
            // 获取加入贝豪数据
            getBahoData() {
                indexInterface.getJoinBahoData({
                    languageType: this.language
                }).then(res => {
                    if(res.success) {
                        this.joinBgImage = res.body.title.picUrl // 加入贝豪背景图
                        this.joinTitle = res.body.title.name // 加入贝豪标题
                        this.joinSubTitle = res.body.title.chirdenTitle // 加入贝豪子标题
                        this.companyAddress = res.body.info[0].address // 公司地址
                        this.companyPhone = res.body.info[0].phone // 联系电话
                        this.companyEmail = res.body.info[0].email // 公司邮箱
                    }
                })
            },
            // 初始化地图
            handleMap(language, addressText) {
                // 初始化地图对象，加载地图
                var map = new window.AMap.Map("container", {
                    center: [120.21874, 30.17899],
                    resizeEnable: true,
                    zoom: 15,
                    features: ["bg", "road", "building", "point"],
                    lang: language // 可选值：en，zh_en, zh_cn
                });
                var info = [];
                info.push(
                    '<h1 style="color:#CC5522;font-size:14px;">杭州贝豪实业有限公司</h1>'
                );
                info.push(addressText);
                var infoWindow = new window.AMap.InfoWindow({
                    content: info.join("<br/>")
                });
                infoWindow.open(map, map.getCenter());
            }
        },
        created() {
            
        },
        mounted() {
            this.language = localStorage.getItem('language') ? localStorage.getItem('language') : 'zh'
            this.getBahoData()
            if(this.language === 'zh') {
                this.addressText = '<div> <p style="font-size:12px">杭州市滨江区江陵路88号万轮科技园5号楼</p></div>';
                this.handleMap("zh_cn", this.addressText);
            } else if(this.language === 'en') {
                this.addressText = '<div> <p style="font-size:10px">Building No. 5 Jiangling Road No. 88, Binjiang District,Hangzhou,Zhejiang</p></div>'
                this.handleMap('en', this.addressText)
            }
            this.$mBus.$on('changeLanguage', language => {
                this.language = language
                this.getBahoData()
                if(this.language === 'zh') {
                    this.addressText = '<div> <p style="font-size:12px">杭州市滨江区江陵路88号万轮科技园5号楼</p></div>';
                    this.handleMap("zh_cn", this.addressText);
                } else if(this.language === 'en') {
                    this.addressText = '<div> <p style="font-size:10px">Building No. 5 Jiangling Road No. 88, Binjiang District,Hangzhou,Zhejiang</p></div>'
                    this.handleMap('en', this.addressText)
                }
            })
        },
    }
</script>