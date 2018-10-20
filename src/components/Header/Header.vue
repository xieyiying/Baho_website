<template>
    <div class="header_container">
        <div class="header_content">
            <!-- logo -->
            <router-link class="header_logo" to='/'>
                <img src="../../../static/img/logo.png" alt="">
            </router-link>
            <!-- 导航 -->
            <ul class="header_nav">
                <li
                  :class="['nav_list', {'active': index == isActive}]"
                  v-for="(nav, index) in navData"
                  :key="index"
                  @click.stop="changeNavSelect(index, nav.url)"
                >
                    <router-link :to="{name: nav.url, params: {type: 0}}" class="nav_link">
                        {{nav.name}}
                    </router-link>
                    <ul class="child_nav" v-if="'children' in nav && nav.children.length > 0">
                        <li v-for="(navChild, indexChild) in nav.children" :key="indexChild">
                            <router-link :to="{name: navChild.url, params: {type: indexChild}}" class="child_nav_link">{{navChild.name}}</router-link>
                        </li>
                    </ul>
                </li>
            </ul>
            <!-- 中/英 切换 -->
            <div class="change_lang">
                <a @click="changeLanguage('zh')" :class="{'active': lang == 0}">中</a>
                <span>/</span>
                <a @click="changeLanguage('en')" :class="{'active': lang == 1}">EN</a>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        name: "Header",
        data() {
            return {
                // 导航条数据
                navData: [],
                // 导航条选中显示
                isActive: 0,
                footerActive: 0,
                language: 'zh',
                lang: 0
            };
        },
        methods: {
            // 切换导航高亮显示
            changeNavSelect: function(index, url) {
                this.isActive = index;
                localStorage.setItem('active', this.isActive)
            },
            // 获取导航数据
            getNavData(language) {
                this.$utils.Get('bhgw/page/bahoweb/menu/bahoMenu/getMenuList', {
                    languageType: language
                }, res => {
                    this.navData = res
                })
            },
            // 中英文切换
            changeLanguage(language) {
                if(language == 'zh') {
                    this.lang = 0
                } else {
                    this.lang = 1
                }
                localStorage.setItem('lang', this.lang)
                this.language = language
                this.getNavData(language)
                localStorage.setItem('language', language)
                this.$Bus.$emit('changeLanguage', language)
            }
        },
        created() {
            this.$Bus.$on('newActive', target => {
                this.footerActive = target
                if(this.footerActive != null) {
                    this.isActive = this.footerActive
                    localStorage.setItem('active', this.isActive)
                }
            })
            this.isActive = localStorage.getItem('active') ? localStorage.getItem('active') : 0
            this.lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 0
            this.language = localStorage.getItem('language') ? localStorage.getItem('language') : 'zh'
            this.getNavData(this.language)
        },
    };
</script>
<style>
    @import "../../assets/less/Header/Header.css";
</style>
