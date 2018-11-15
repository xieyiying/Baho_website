<template>
    <div class="company_history">
        <div class="history_img">
            <img :src="addrMasterMap" alt="">
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
        name: 'history',
        data() {
            return {
                addrMasterMap: '',
                aboutChildType: '',
                language: 'zh'
            }
        },
        methods: {
            getData(language) {
                this.aboutChildType = this.$route.params.type
                GetAboutBahoData({
                    type: this.aboutChildType,
                    languageType: language
                }, res => {
                    this.addrMasterMap = res[0].addrMasterMap
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
    .company_history {
        width: 100%;
    }
    .company_history .history_img {
        width: 100%;
        height: 800px;
    }
    .company_history .history_img img {
        width: 100%;
        height: 100%;
    }
</style>
