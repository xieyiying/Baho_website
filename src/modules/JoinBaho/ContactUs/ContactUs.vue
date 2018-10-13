<template>
    <div class="contact_us">
        <div class="contact_us_contant">
            <!-- 地图 -->
            <div class="map_container">
                <div id="container"></div>
            </div>
            <!-- 联系内容 -->
            <template v-if="language == 'zh'">
                <div class="contact_info">
                    <div class="contact_info_left">
                        <ul class="info_detial">
                            <li>
                                <i class="contact_icon contact_icon_dh"></i>
                                <p class="contact_text">
                                    <span>联系方式：</span>
                                    <span>400-967-8655</span>
                                </p>
                            </li>
                            <li>
                                <i class="contact_icon contact_icon_dz"></i>
                                <p class="contact_text">
                                    <span>公司地址：</span>
                                    <span>杭州市滨江区江陵路88号万轮科技园5号楼</span>
                                </p>
                            </li>
                            <li>
                                <i class="contact_icon contact_icon_yx"></i>
                                <p class="contact_text">
                                    <span>公司邮箱：</span>
                                    <span>bahogroup@baho.cn</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div class="contact_info_right">
                        <ul>
                            <li>
                                <a href="https://weibo.com/bahokids?is_hot=1" target="_blank">
                                    <i></i>
                                    官方微博
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <i></i>
                                    扫码关注
                                    <span class="code"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="contact_info">
                    <div class="contact_info_left">
                        <ul class="info_detial">
                            <li>
                                <i class="contact_icon contact_icon_dh"></i>
                                <p class="contact_text">
                                    <span>Contact Information：</span>
                                    <span>400-967-8655</span>
                                </p>
                            </li>
                            <li>
                                <i class="contact_icon contact_icon_dz"></i>
                                <p class="contact_text">
                                    <span>Company Address：</span>
                                    <span>Building No. 5 Jiangling Road No. 88, Binjiang District,Hangzhou,Zhejiang</span>
                                </p>
                            </li>
                            <li>
                                <i class="contact_icon contact_icon_yx"></i>
                                <p class="contact_text">
                                    <span>Email：</span>
                                    <span>bahogroup@baho.cn</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div class="contact_info_right">
                        <ul>
                            <li>
                                <a href="https://weibo.com/bahokids?is_hot=1" target="_blank">
                                    <i></i>
                                    Weibo
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <i></i>
                                    QR Code
                                    <span class="code"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </template>
        </div>
        <div class="bottom_soild">
            <div class="left_soild"></div>
            <div class="right_soild"></div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'ContactUs',
        data() {
            return {
                language: 'zh',
                addressText: '<div> <p style="font-size:12px">杭州市滨江区江陵路88号万轮科技园5号楼</p></div>'
            }
        },
        methods: {
            handleMap (language, addressText) {
                // 初始化地图对象，加载地图
                var map = new window.AMap.Map('container', {
                    center: [120.21874, 30.17899],
                    resizeEnable: true,
                    zoom: 15,
                    features: ['bg', 'road', 'building', 'point'],
                    lang: language // 可选值：en，zh_en, zh_cn
                })
                window.AMap.plugin('AMap.ToolBar', function () {
                    var toolbar = new window.AMap.ToolBar()
                    map.addControl(toolbar)
                })
                var info = []
                info.push('<h1 style="color:#CC5522;font-size:14px;">杭州贝豪实业有限公司</h1>')
                info.push(addressText)
                var infoWindow = new window.AMap.InfoWindow({ content: info.join('<br/>') })
                infoWindow.open(map, map.getCenter())
            }
        },
        created() {
            
        },
        mounted () {
            this.language = localStorage.getItem('language') ? localStorage.getItem('language') : 'zh'
            this.handleMap('zh_cn', this.addressText)
            this.$Bus.$on('changeLanguage', language => {
                this.language = language
                if(language == 'zh') {
                    this.handleMap('zh_cn', this.addressText)
                } else if(language == 'en') {
                    this.addressText = '<div> <p style="font-size:10px">Building No. 5 Jiangling Road No. 88, Binjiang District,Hangzhou,Zhejiang</p></div>'
                    this.handleMap('en', this.addressText)
                }
            })
        }
    }
</script>
<style scoped>
    @import '../../../assets/less/JoinBaho/ContactUs/ContactUs.css';
</style>
<style>
    #container {
        width: 1150px;
        height: 100%;
        margin: 0 auto;
    }
</style>



