<template>
    <div class="about">
        <div class="yd_about_baho clearfix" :style="{backgroundImage: 'url(' + bahoBgImage +')'}">
            <h1 class="h1_style">{{bahoTitle}}</h1>
            <h3 class="h3_style">{{bahoSubTitle}}</h3>
            <ul class="about_tab">
            <li
                v-for="(item, index) in bahoTab"
                :key="index"
                :class="['f_left', {active: tabindex == index}]"
                @click="changeTab(index, item.id)"
            >
                <span>{{item.name}}</span>
            </li>
            </ul>
            <div class="tab_content">
                <img :src="bahoDetialImage" alt>
                <div class="detial_content" v-html="bahoDetialContent"></div>
            </div>
        </div>
    </div>
</template>
<script>
    import { indexInterface } from "@/utils/mHttp.js";
    export default {
        name: 'aboutBaho',
        data() {
            return {
                language: "zh",
                bahoTitle: "", // 关于贝豪标题
                bahoSubTitle: "", // 关于贝豪子标题
                bahoBgImage: "", // 关于贝豪背景图
                tabindex: 0,
                bahoTab: [], // 关于贝豪tab标题
                bahoDetialImage: "",
                bahoDetialContent: "",
            }
        },
        methods: {
            // 获取关于贝豪标题以及导航信息
            getBahoData() {
                indexInterface.getBahoData({
                        languageType: this.language
                }).then(res => {
                    if (res.success) {
                        this.bahoTitle = res.body.title.name;
                        this.bahoSubTitle = res.body.title.chirdenTitle;
                        this.bahoBgImage = res.body.title.picUrl;
                        this.bahoTab = res.body.about;
                        this.getBahoDetial(res.body.about[this.tabindex].id);
                    }
                });
            },
            // 切换关于贝豪tab
            changeTab(index, id) {
                this.tabindex = index;
                this.getBahoDetial(id);
            },
            // 获取关于贝豪详情信息
            getBahoDetial(id) {
                indexInterface.getBahoDetialData({
                    id: id
                }).then(res => {
                    if (res.success) {
                        this.bahoDetialImage = res.body.info.picURL;
                        this.bahoDetialContent = res.body.info.content;
                    }
                });
            },
        },
        created() {
            this.getBahoData()
        }
    }
</script>
<style>
    
</style>
