<template>
    <div class="nav_header">
        <div class="nav clearfix">
            <div class="f_left logo">
                <img src="../../assets/img/mobile/logo.png" alt="">
            </div>
            <div class="nav_ul f_right" @click="showNav">
                <img src="../../assets/img/mobile/logo.png" alt="" class="">
            </div>
        </div>
        <div class="nav_box" v-show="isShowNav">
            <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" active-text-color="#0d386b" unique-opened router text-color="#3c3c3c">
                <template v-for="item in items">
                    <template v-if="item.subs">
                        <el-submenu :index="item.index" :key="item.index">
                            <template slot="title">
                                <span slot="title">{{ item.title }}</span>
                            </template>
                            <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </el-submenu>
                    </template>
                    <template v-else>
                        <el-menu-item :index="item.index" :key="item.index">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </el-menu-item>
                    </template>
                </template>
                <template>
                    <el-submenu key="immediately" index="immediately">
                        <template slot="title">
                            <span slot="title">马上联系</span>
                        </template>
                        <el-menu-item key="hotline" index="hotline">
                            贝豪热线
                        </el-menu-item>
                        <el-menu-item key="email" index="email">
                            贝豪邮箱
                        </el-menu-item>
                        <el-menu-item key="other" index="other">
                            其他联系方式
                        </el-menu-item>
                    </el-submenu>
                </template>
            </el-menu>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'nav_header',
        data() {
            return {
                isShowNav: false,
                clickFlag: true,
                collapse: false,
                items: [
                    {
                        index: '/test#index',
                        title: '首页'
                    },
                    {
                        index: '/test#about',
                        title: '关于贝豪',
                    },
                    {
                        index: '/test#brand',
                        title: '品牌中心',
                        subs: [
                            {
                                index: 'kub',
                                title: '可优比'
                            },
                            {
                                index: 'diai',
                                title: '蒂爱'
                            },
                            {
                                index: 'baho',
                                title: '贝豪优选'
                            },
                            {
                                index: 'mige',
                                title: '米歌'
                            },
                            {
                                index: 'maikeshi',
                                title: '麦可适  '
                            },
                        ]
                    },
                    {
                        index: '/test#news',
                        title: '新闻中心',
                    },
                    {
                        index: '/test#relation',
                        title: '投资者关系',
                    },
                    {
                        index: 'joinBaho',
                        title: '加入贝豪',
                        subs: [
                            {
                                index: 'activity',
                                title: '员工活动'
                            },
                            {
                                index: 'heard',
                                title: '员工心声'
                            },
                            {
                                index: 'recruitInfo',
                                title: '招聘信息'
                            },
                            {
                                index: 'contact',
                                title: '联系我们'
                            },
                        ]
                    },
                ]
            }
        },
        methods: {
            // 是否显示导航
            showNav() {
                if(this.clickFlag) {
                    this.isShowNav = true
                    this.clickFlag = false
                } else {
                    this.isShowNav = false
                    this.clickFlag = true
                }
                
            }
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
