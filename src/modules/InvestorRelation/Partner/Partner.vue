<template>
    <div class="partner">
        <div class="partner_content">
            <ul class="partner_content_container">
                <li :style="{backgroundImage: 'url(' + investorPhotoOne + ')'}"></li>
                <li :style="{backgroundImage: 'url(' + investorPhotoTwo + ')'}"></li>
                <li :style="{backgroundImage: 'url(' + investorPhotoThree + ')'}"></li>
            </ul>
        </div>
        <div class="bottom_soild">
            <div class="left_soild"></div>
            <div class="right_soild"></div>
        </div>
    </div>
</template>
<script>
    import { GetInvestorData } from '@/utils/https'
    export default {
        name: 'Partner',
        data() {
            return {
                investorType: '',
                investorPhotoOne: '',
                investorPhotoTwo: '',
                investorPhotoThree: '',
                language: 'zh'
            }
        },
        methods: {
            getData(language) {
                this.investorType = this.$route.params.type
                // this.$utils.Get('bhgw/page/bahoweb/navigat/bahoNavigatInvestor/getWebNetInvestorInfo', {
                //     type: this.investorType,
                //     languageType: language
                // }, res => {
                //     this.investorPhotoOne = res[0].investorPhotoOne
                //     this.investorPhotoTwo = res[0].investorPhotoTwo
                //     this.investorPhotoThree = res[0].investorPhotoThree
                // })
                GetInvestorData({
                    type: this.investorType,
                    languageType: language
                }, res => {
                    this.investorPhotoOne = res[0].investorPhotoOne
                    this.investorPhotoTwo = res[0].investorPhotoTwo
                    this.investorPhotoThree = res[0].investorPhotoThree
                })
            }
        },
        created() {
            this.language = localStorage.getItem('language') ? localStorage.getItem('language') : 'zh'
            this.getData(this.language)
            this.$Bus.$on('changeLanguage', language => {
                this.language = language
                this.getData(language)
            })
        }
    }
</script>
<style>
    @import '../../../assets/less/InvestorRelation/Partner/Partner.css';
</style>

