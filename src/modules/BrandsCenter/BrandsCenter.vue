<template>
    <div class="brands_center">
        <div class="brands_center_container">
            <h1>{{brandTitle}}</h1>
            <p v-html="brandContent"></p>
        </div>
        <div class="brands_logo" :style="{backgroundImage: 'url(' + brandBgImg +')'}">
            <ul class="brands_center_container">
                <li v-for="(img, index) in brandLogo" :key="index">
                    <router-link :to="{name: img.name}" class="brands_logo_img" :style="{backgroundImage: 'url(' + img.img +')'}"></router-link>
                </li>
            </ul>
        </div>
        <div class="bottom_soild">
            <div class="left_soild"></div>
            <div class="right_soild"></div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'BrandsCenter',
        data() {
            return {
                brandLogo: [],
                brandTitle: '',
                brandContent: '',
                brandBgImg: '',
                language: 'zh'
            }
        },
        methods: {
            getBahoData() {
                this.$utils.Get('bhgw/page/bahoweb/navigat/bahoNavigatBrand/getWebNetBrandInfo', {
                    type: 4,
                    languageType: this.language
                }, res => {
                    this.brandLogo.push(
                        {name: 'kub', img: res[0].brandLogo},
                        {name: 'diai', img: res[0].brandLogo1},
                        {name: 'beihao', img: res[0].brandLogo2},
                        {name: 'mige', img: res[0].brandLogo3},
                        {name: 'maikeshi', img: res[0].brandLogo4},
                        
                    )
                    this.brandTitle = res[0].brandTitle
                    this.brandContent = res[0].brandContent
                    this.brandBgImg = res[0].brandBackground
                })
            }
        },
        created() {
            this.language = localStorage.getItem('language') ? localStorage.getItem('language') : 'zh'
            this.getBahoData()
            this.$Bus.$on('changeLanguage', language => {
                this.language = language
                this.brandLogo = []
                this.getBahoData()
            })
        }
    }
</script>
<style>
    @import '../../assets/less/BrandsCenter/BrandsCenter.css';
</style>
