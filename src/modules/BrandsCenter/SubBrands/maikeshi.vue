<template>
    <div class="sub_brands" :style="{backgroundImage: 'url(' + brandBackground + ')'}">
        <div class="sub_brands_content">
            <h2>{{brandTitle}}</h2>
            <span :style="{backgroundImage: 'url(' + brandLogo + ')'}"></span>
            <p v-html="brandContent"></p>
            <a :href="url" target="_blank">{{language == 'zh' ? '了解更多' : 'Learn More'}}</a>
        </div>
        <div class="anim_box slideInRight"></div>
        <div class="anim_line slideincrease"></div>
        <div class="mask_layer"></div>
    </div>
</template>
<script>
    export default {
        name: 'maikeshi',
        data() {
            return {
                brandBackground: "",
                brandLogo: "",
                brandTitle: "",
                brandContent: "",
                url: "",
                language: 'zh',
            }
        },
        methods: {
            getSubBrandsData() {
                this.$utils.Get('bhgw/page/bahoweb/navigat/bahoNavigatBrand/getWebNetBrandInfo', {
                    type: 3,
                    languageType: this.language
                }, res => {
                    this.brandBackground = res[0].brandBackground
                    this.brandLogo = res[0].brandLogo
                    this.brandTitle = res[0].brandTitle
                    this.brandContent = res[0].brandContent
                    this.url = res[0].url
                })
            },
        },
        created() {
            this.language = localStorage.getItem('language') ? localStorage.getItem('language') : 'zh'
            this.getSubBrandsData()
            this.$Bus.$on('changeLanguage', language => {
                this.language = language
                this.getSubBrandsData()
            })
        },
    }
</script>
<style>
    @import '../../../assets/less/BrandsCenter/SubBrands/SubBrands.css';
</style>

