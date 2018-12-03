<template>
    <div class="nav_header">
        <div class="nav clearfix">
            <div class="f_left logo">
                <img src="../../assets/img/mobile/logo.png" alt="">
            </div>
            <div :class="['nav_ul', 'f_right', {anim: isShowNav === true}]" @click="showNav"></div>
        </div>
        <div class="nav_box" v-show="isShowNav">
            <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" unique-opened router text-color="#3c3c3c">
                <template v-for="(item, index) in items">
                    <template v-if="item.subs">
                        <el-submenu :index="item.index" :key="item.hash">
                            <template slot="title">
                                <span slot="title">{{ item.title }}</span>
                            </template>
                            <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index" @click="changHash(subItem.hash, index)" :class="{active: isActive == index}">
                                {{ subItem.title }}
                            </el-menu-item>
                        </el-submenu>
                    </template>
                    <template v-else>
                        <el-menu-item :index="item.index" :key="item.hash" @click="changHash(item.hash, index)" :class="{active: isActive == index}">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </el-menu-item>
                    </template>
                </template>
                <template>
                    <el-submenu key="immediately" index="/index">
                        <template slot="title">
                            <span slot="title">马上联系</span>
                        </template>
                        <el-menu-item key="hotline" index="/index">
                            <span class="f_left">贝豪热线</span>
                            <span class="f_right">
                                <a href="tel:0579-00000000">0579-00000000</a>
                            </span>
                        </el-menu-item>
                        <el-menu-item key="email" index="/index">
                            <span class="f_left">贝豪邮箱</span>
                            <span class="f_right">0579-00000000</span>
                        </el-menu-item>
                        <el-menu-item key="other" index="/index">
                            <span class="f_left">其他联系方式</span>
                            <span class="f_right contact_icon">
                                <a href="javascript:;" class="wx_icon" @click="showWXcode">
                                    <img v-show="isShowCode" src="../../assets/img/mobile/code.jpg">
                                </a>
                                <a href="javascript:;" class="wb_icon"></a>
                            </span>
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template>
                    <el-menu-item index="/index" key="language">
                        <span slot="title" class="f_left">语言</span>
                        <span slot="title" class="f_right">
                            <i style="font-style: normal;color: #3c3c3c;">中</i>
                            /
                            <i style="font-style: normal;color: #3c3c3c;">EN</i>
                        </span>
                    </el-menu-item>
                </template>
            </el-menu>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'm_header', 
        data() {
            return {
                isShowNav: false, // 是否显示导航
                isShowCode: false, // 是否显示微信二维码
                collapse: false,
                isActive: 0,
                items: [
                    {
                        index: '/index/#index',
                        title: '首页',
                        hash: '#index'
                    },
                    {
                        index: '/index/#about',
                        title: '关于贝豪',
                        hash: '#about'
                    },
                    {
                        index: '/index/#brand',
                        title: '品牌中心',
                        hash: '#brand'
                    },
                    {
                        index: '/index/#news',
                        title: '新闻中心',
                        hash: '#news'
                    },
                    {
                        index: '/index/#relation',
                        title: '投资者关系',
                        hash: '#relation'
                    },
                    {
                        index: '/index/#joinBaho',
                        title: '加入贝豪',
                        hash: '#joinBaho'
                    },
                ]
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
                let pageId = id.substring(id.indexOf('#'))
                let hashId = document.querySelector(pageId)
                let y = hashId.offsetTop
                while(hashId = hashId.offsetParent) {
                    y += hashId.offsetTop
                }
                y -= 65
                window.scrollTo(0, y)
                this.isShowNav = false
            },
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
