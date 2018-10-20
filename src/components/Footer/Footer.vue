<template>
    <div class="footer">
        <div class="footer_container">
            <template v-if="language == 'zh'">
                <ul>
                    <li>
                        <a class="footer_icon" @click="changeActive('brand', 2)"></a>
                    </li>
                    <li>
                        <a class="footer_icon" @click="changeActive('news', 3)"></a>
                    </li>
                    <li>
                        <a class="footer_icon" @click="changeActive('offers', 5)"></a>
                    </li>
                </ul>
            </template>
            <template v-else>
                <ul>
                    <li>
                        <a class="footer_icon_en" @click="changeActive('brand', 2)"></a>
                    </li>
                    <li>
                        <a class="footer_icon_en" @click="changeActive('news', 3)"></a>
                    </li>
                    <li>
                        <a class="footer_icon_en" @click="changeActive('offers', 5)"></a>
                    </li>
                </ul>
            </template>
            <div class="footer_text">
                <p>杭州贝豪实业有限公司   版权所有   法律声明   网站支持</p>
                <p>浙ICP备11042402</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Footer',
        data(){
            return {
                language: 'zh'
            }
        },
        methods: {
            changeActive(name, isActive) {
                // if(name == 'brand') {
                //     this.$router.push({name: name, params: {type: 0}});
                // } else {
                //     this.$router.push({name: name});
                // }
                this.$router.push({name: name});
                
                this.$Bus.$emit('newActive', isActive)
            },
        },
        created() {
            this.language = localStorage.getItem('language') ? localStorage.getItem('language') : 'zh'
            this.$Bus.$on('changeLanguage', language => {
                this.language = language
            })
        }
    }
</script>
<style>
    @import '../../assets/less/Footer/Footer.css';
</style>
