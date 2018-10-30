<template>
    <div class="company_profile">
        <div class="about_content">
            <span class="about_banner" :style="{backgroundImage: 'url(' + addrMasterMap + ')'}"></span>
            <div class="content_container clearfix">
                <div class="content_left clearfix">
                    <div class="title">
                        <span :style="{backgroundImage: 'url(' + addrLogo + ')'}"></span>
                        <span :style="{backgroundImage: 'url(' + addrTitle + ')'}"></span>
                    </div>
                    <div class="text" v-html="content"></div>
                </div>
                <div class="content_right clearfix">
                    <span :style="{backgroundImage: 'url(' + addrSideOne + ')'}"></span>
                    <span :style="{backgroundImage: 'url(' + addrSideTwo + ')'}"></span>
                    <span :style="{backgroundImage: 'url(' + addrSideThree + ')'}"></span>
                </div>
            </div>
        </div>
        <div class="bottom_soild">
            <div class="left_soild"></div>
            <div class="right_soild"></div>
        </div>
    </div>
</template>
<script>
    import { GetAboutBahoData } from '@/utils/https'
    export default {
        name: 'about',
        data() {
            return {
                aboutChildType: 0,
                addrMasterMap: '', // 主图地址
                addrLogo: '', // logo
                addrTitle: '', // 标题图
                addrSideOne: '', // 侧边图1
                addrSideTwo: '', // 侧边图2
                addrSideThree: '',// 侧边图3
                content: '', // 文字解释
                language: 'zh'
            }
        },
        methods: {
            getAboutBahoDate() {
                this.aboutChildType = this.$route.params.type
                GetAboutBahoData({
                    type: this.aboutChildType,
                    languageType: this.language
                }, res => {
                    this.addrMasterMap = res[0].addrMasterMap // 主图地址
                    this.addrLogo = res[0].addrLogo // logo
                    if('addrTitle' in res[0]) {
                        this.addrTitle = res[0].addrTitle // 标题图
                    }
                    this.addrSideOne = res[0].addrSideOne // 侧边图1
                    this.addrSideTwo = res[0].addrSideTwo // 侧边图2
                    this.addrSideThree = res[0].addrSideThree// 侧边图3
                    this.content = res[0].content // 文字解释
                })

            }
        },
        created() {
            this.language = localStorage.getItem('language') ? localStorage.getItem('language') : 'zh'
            this.getAboutBahoDate()
            this.$Bus.$on('changeLanguage', language => {
                this.language = language
                this.getAboutBahoDate()
            })
        },
        watch: {
            '$route': 'getAboutBahoDate'
        },
    }
</script>
<style>
    @import '../../../assets/less/AboutBaho/CompanyProfile/CompanyProfile.css';
</style>

