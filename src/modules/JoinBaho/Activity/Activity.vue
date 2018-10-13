<template>
    <div class="activity" style="width: 100%;">
        <div class="activity_container" style="width: 100%;">
            <!-- 轮播图 -->
            <v_banner :bannerImage=bannerImage></v_banner>
        </div>
        <div class="bottom_soild">
            <div class="left_soild"></div>
            <div class="right_soild"></div>
        </div>
    </div>
</template>
<script>
    import v_banner from '../../../components/Banner/Banner.vue'
    export default {
        name: 'activity',
        components: {
            v_banner
        },
        data() {
            return {
                bannerImage: [],
                language: 'zh'
            }
        },
        methods: {
            getActivityBanner(language) {
                this.$utils.Get('bhgw/page/bahoweb/roll/bahoRollPic/getRollByType', {
                    type: 1,
                    languageType: language
                }, res => {
                    this.bannerImage = res
                })
            }
        },
        created() {
            this.language = localStorage.getItem('language') ? localStorage.getItem('language') : 'zh'
            this.getActivityBanner(this.language)
            this.$Bus.$on('changeLanguage', language => {
                this.language = language
                this.getActivityBanner(language)
            })
        }
    }
</script>


