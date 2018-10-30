<template>
    <div class="heart_sound">
        <div class="video_box">
            <div class="video_player">
                <video src="http://47.99.165.110:80/video/baho_video.mp4" controls="controls" autoplay poster="../../../../static/img/video.jpg"></video>
            </div>
        </div>
        <div class="bottom_soild">
            <div class="left_soild"></div>
            <div class="right_soild"></div>
        </div>
    </div>
</template>
<script>
    import { GetHeartSoundData } from '@/utils/https'
    export default {
        name: 'HeartSound',
        data() {
            return {
                videoUrl: '',
                language: 'zh',
                videoHtml: ''
            }
        },
        methods: {
            // getVideoData(language) {
            //     GetHeartSoundData({
            //         languageType: language
            //     }, res => {
            //         this.videoUrl = res.body.list[0].videoUrl
            //         this.videoHtml = `<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"       codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" height="609" width="960">
            //                             <param name="quality" value="high">
            //                             <param name="movie" value="${this.videoUrl}">
            //                             <embed height="609" pluginspage="http://www.macromedia.com/go/getflashplayer" quality="high" src="${this.videoUrl}" type="application/x-shockwave-flash" width="960">
            //                             <!--[if lt IE9]> 
            //                                 <span>该浏览器不支持该标签，请使用IE11或谷歌等高版本浏览器</span>
            //                             <![endif]-->
            //                         </object>`
                    
            //     })
            // }
        },
        created() {
            this.language = localStorage.getItem('language') ? localStorage.getItem('language') : 'zh'
            // this.getVideoData(this.language)
            this.$Bus.$on('changeLanguage', language => {
                this.language = language
                // this.getVideoData(language)
            })
        }
    }
</script>
<style>
    .heart_sound {
        width: 100%;
    }
    .video_box {
        width: 100%;
        height: 772px;
        background-image: url(http://47.99.165.110:80/photos/xinsheng.jpg);
        background-repeat: no-repeat;
        padding-top: 60px;
    }
    .video_box .video_player {
        width: 960px;
        height: 609px;
        margin: 0 auto;
        position: relative;
        z-index: 1;
    }
    .video_box .video_player video {
        width: 100%;
        height: 100%;
    }
</style>
