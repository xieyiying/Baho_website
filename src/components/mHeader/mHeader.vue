<template>
    <div class="nav_header">
        <div class="nav clearfix">
            <div class="f_left logo">
                <img src="../../assets/img/mobile/logo.png" alt="">
            </div>
            <div :class="['nav_ul', 'f_right', {anim: isShowNav === true}]" @click="showNav"></div>
        </div>
        <div class="nav_box" v-show="isShowNav">
            <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" unique-opened  text-color="#3c3c3c">
                <template v-for="(item, index) in items">
                    <template v-if="item.subs">
                        <el-submenu :index="item.index" :key="item.hash" :route="item.index">
                            <template slot="title">
                                <span slot="title">{{ item.title }}</span>
                            </template>
                            <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index" @click="changHash(subItem.hash, index)" :class="{active: isActive == index}">
                                {{ subItem.title }}
                            </el-menu-item>
                        </el-submenu>
                    </template>
                    <template v-else>
                        <el-menu-item :index="item.index" :key="item.hash" :route="item.index" @click="changHash(item.hash, index)" :class="{active: isActive == index}">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </el-menu-item>
                    </template>
                </template>
                <template>
                    <el-submenu index="index" key="immediately">
                        <template slot="title">
                            <span slot="title">{{language === 'zh' ? '马上联系' : 'Contact'}}</span>
                        </template>
                        <el-menu-item key="hotline" index="index">
                            <span class="f_left">{{language === 'zh' ? '贝豪热线' : 'hotline'}}</span>
                            <span class="f_right">
                                <a :href="'tel:' + companyPhone">{{companyPhone}}</a>
                            </span>
                        </el-menu-item>
                        <el-menu-item key="email" index="index">
                            <span class="f_left">{{language === 'zh' ? '贝豪邮箱' : 'Email'}}</span>
                            <span class="f_right">{{companyEmail}}</span>
                        </el-menu-item>
                        <el-menu-item key="other" index="index">
                            <span class="f_left">{{language === 'zh' ? '其他联系方式' : 'other contact'}}</span>
                            <span class="f_right contact_icon">
                                <a href="javascript:;" class="wx_icon" @click="showWXcode">
                                    <img v-show="isShowCode" :src="wxCode">
                                </a>
                                <a href="javascript:;" class="wb_icon" @click.prevent="enterToWeibo()"></a>
                            </span>
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template>
                    <li role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 20px;">
                        <span class="f_left">语言</span>
                        <span class="f_right languageType">
                            <i :class="{active: language === 'zh'}" @click="changeLanguage('zh')">中</i>
                            /
                            <i :class="{active: language === 'en'}" @click="changeLanguage('en')">EN</i>
                        </span>
                    </li>
                </template>
            </el-menu>
        </div>
    </div>
</template>
<script>
    import { getNavBarData } from '@/utils/mHttp.js'
    export default {
        name: 'm_header', 
        data() {
            return {
                language: 'zh',
                isShowNav: false, // 是否显示导航
                isShowCode: false, // 是否显示微信二维码
                collapse: false,
                isActive: 0,
                items: [],
                companyPhone: '',
                companyEmail: '',
                wxCode: '',
                wbUrl: '',
            }
        },
        methods: {
            // 是否显示导航
            showNav() {
                this.isShowNav = !this.isShowNav
            },
            // 是否显示微信二维码
            showWXcode() {
                this.isShowCode = !this.isShowCode
            },
            // hash跳转
            changHash(id, index) {
                this.isActive = index
                // let pageId = id.substring(id.indexOf('#'))
                // let hashId = document.querySelector(pageId)
                // let y = hashId.offsetTop
                // while(hashId == hashId.offsetParent) {
                //     y += hashId.offsetTop
                // }
                // y -= 65
                // window.scrollTo(0, y)
                this.isShowNav = false
                this.$router.push({path: '/index'})
                this.$mBus.$emit('hashJump', id)
            },
            // 获取导航数据
            getData() {
                getNavBarData({
                    languageType: this.language
                }).then(res => {
                    this.items = []
                    res.body.menu.forEach(item => {
                        this.items.push({
                            index: '/index#' + item.url,
                            title: item.name,
                            hash: '#' + item.url
                        })
                    })
                    this.companyPhone = res.body.contact[0].phone
                    this.companyEmail = res.body.contact[0].email
                    this.wxCode = res.body.contact[0].wechatPicUrl
                    this.wbUrl = res.body.contact[0].sinaUrl
                })
            },
            // 切换语言
            changeLanguage(language) {
                this.language = language
                this.$mBus.$emit('changeLanguage', this.language)
                localStorage.setItem('language', this.language)
                this.getData()
                this.isShowNav = false
            },
            enterToWeibo() {
                window.location.href = this.wbUrl
            }
        },
        created() {
            this.language = localStorage.getItem('language') ? localStorage.getItem('language') : 'zh'
            this.getData()
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
    }
</script>
<style>
    @import '../../assets/mless/mHeader/mHeader.css';
</style>
