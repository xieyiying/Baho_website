<template>
    <div class="yd_brands_center content_mtop">
        <div class="brand_top_banner" :style="{backgroundImage: 'url(' + brandBanner +')'}">
            <h1>{{title}}</h1>
        </div>
        <div class="brand_describe">
            <h3>{{subTitle}}</h3>
            <p v-html="content"></p>
        </div>
        <ul class="sub_brands">
            <li v-for="(item, index) in subBrandsArr" :key="index">
                <a :href="item.url" :style="{backgroundImage: 'url(' + item.mainPicUrl +')'}">
                    <span>{{language === 'zh' ? '了解更多' : 'Learn more'}}>></span>
                </a>
                <i class="sub_brand_logo" :style="{backgroundImage: 'url(' + item.logoPicUrl +')'}"></i>
                <p class="sub_brand_describe" v-html="item.content"></p>
            </li>
        </ul>
        <m_top></m_top>
    </div>
</template>
<script>
    import { getBrandDetialData } from '@/utils/mhttp.js'
    export default {
        name: 'brand',
        data() {
            return {
                language: 'zh',
                brandBanner: '',
                title: '',
                subTitle: '',
                content: '',
                subBrandsArr: [], // 子品牌
            }
        },
        methods: {
            getData() {
                getBrandDetialData({
                    languageType: this.language
                }).then(res => {
                    if(res.success) {
                        this.brandBanner = res.body.title.detailPicUrl
                        this.title = res.body.title.name
                        this.subTitle = res.body.title.chirdenTitle
                        this.content = res.body.title.content
                        this.subBrandsArr = res.body.brandDetails // 子品牌
                    }
                })
            }
        },
        created() {
            this.language = localStorage.getItem('language') ? localStorage.getItem('language') : 'zh'
            this.getData()
            this.$mBus.$on('changeLanguage', language => {
                this.language = language
                this.getData()
            })
        }
    }
</script>
<style>
    @import '../../assets/mless/brandsCenter/brandsCenter.css';
</style>