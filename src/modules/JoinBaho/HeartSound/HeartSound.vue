<template>
    <div class="heart_sound">
        <div class="video_box">
            <div class="video_player">
                <embed :src="videoUrl" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" wmode="opaque" width="100%" height="100%" loop="true" autostart="true"  play="true">
            </div>
        </div>
        <div class="bottom_soild">
            <div class="left_soild"></div>
            <div class="right_soild"></div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'HeartSound',
        data() {
            return {
                videoUrl: '',
                language: 'zh'
            }
        },
        methods: {
            getVideoData(language) {
                this.$utils.Get('bhgw/page/bahoweb/video/bahoVideo/webInfoList', {
                    languageType: language
                }, res => {
                    this.videoUrl = res.body.list[0].videoUrl
                })
            }
        },
        created() {
            this.language = localStorage.getItem('language') ? localStorage.getItem('language') : 'zh'
            this.getVideoData(this.language)
            this.$Bus.$on('changeLanguage', language => {
                this.language = language
                this.getVideoData(language)
            })
        }
    }
</script>
<style scoped>
    .heart_sound {
        width: 100%;
    }
    .video_box {
        width: 100%;
        height: 772px;
        background-image: url(http://47.99.165.110:8068/photos/xinsheng.jpg);
        background-repeat: no-repeat;
        padding-top: 60px;
    }
    .video_box .video_player {
        width: 960px;
        height: 609px;
        margin: 0 auto;
        /* background-color: #ccc; */
    }
    .video_box .video_player video {
        width: 100%;
        height: 100%;
    }
</style>
