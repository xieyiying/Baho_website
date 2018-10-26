<template>
    <div class="social_duty">
        <div class="social_duty_content" :style="{backgroundImage: 'url(' + investorPhotoOne +')'}">
            <div class="text">
                <div class="anim_box" :style="{top: `${textTop}px`}" v-html="investorContent"></div>
            </div>
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
        name: 'SocialDuty',
        data() {
            return {
                textTop: 300,
                investorType: '',
                investorPhotoOne: '',
                investorContent: '',
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
                //     this.investorContent = res[0].investorContent
                // })
                GetInvestorData({
                    type: this.investorType,
                    languageType: language
                }, res => {
                    this.investorPhotoOne = res[0].investorPhotoOne
                    this.investorContent = res[0].investorContent
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
        },
        mounted() {
            this.textTop = 0;
        }
    }
</script>
<style>
    @import '../../../assets/less/InvestorRelation/SocialDuty/SocialDuty.css';
</style>

