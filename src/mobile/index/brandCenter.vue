<template>
    <div class="brand_center" :style="{backgroundImage: 'url(' + brandBgImage +')'}">
        <h1 class="h1_style">{{brandTitle}}</h1>
        <h3 class="h3_style">{{brandSubTitle}}</h3>
        <router-link to="/brand" class="see_all">{{language === 'zh' ? '查看全部' : 'See All'}}&nbsp;>></router-link>
        <p v-html="brandDescribe" class="introText"></p>
        <div class="brands_logo">
            <span
                v-for="(item, index) in subBrandLogo"
                :key="index"
                :style="{backgroundImage: 'url(' + item.picUrl + ')'}"
                @click="seeSubBrandStore(item.url)"
            ></span>
        </div>
    </div>
</template>
<script>
    import { indexInterface } from "@/utils/mHttp.js";
    export default {
        name: 'brandCenter',
        data() {
            return {
                language: "zh",
                brandTitle: "", // 品牌中心标题
                brandSubTitle: "", // 品牌中心子标题
                brandDescribe: "", // 品牌中心文字表述
                brandBgImage: "", // 品牌中心背景图
                subBrandLogo: [], // 品牌中心logo
            }
        },
        methods: {
            // 获取品牌中心数据
            getBrandsCenterData() {
                indexInterface.getBrandsCenterData({
                    languageType: this.language
                }).then(res => {
                    if (res.success) {
                        this.brandTitle = res.body.title.name; // 品牌中心标题
                        this.brandSubTitle = res.body.title.chirdenTitle; // 品牌中心子标题
                        this.brandDescribe = res.body.topList.content; // 品牌中心文字表述
                        this.brandBgImage = res.body.title.picUrl; // 品牌中心背景图
                        this.subBrandLogo = res.body.list; // 品牌中心logo
                    }
                });
            },
            // 跳转品牌商城
            seeSubBrandStore(storeUrl) {
                window.location.href = storeUrl;
            },
        },
        created() {
            this.language = localStorage.getItem('language') ? localStorage.getItem('language') : 'zh'
            this.getBrandsCenterData()
            this.$mBus.$on('changeLanguage', language => {
                this.language = language
                this.getBrandsCenterData()
            })
        }
    }
</script>