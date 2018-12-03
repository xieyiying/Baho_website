<template>
    <div class="investor_relations">
        <div class="relation_title" :style="{backgroundImage: 'url(' + relationBgImage +')'}">
            <h1 class="h1_style">{{relationTitle}}</h1>
            <h3 class="h3_style">{{relationSubTitle}}</h3>
            <ul class="relation_tab clearfix">
                <li
                    v-for="(tab, index) in relationTabs"
                    :key="index"
                    @click="changeRelationTabs(index, tab.id)"
                    :class="['f_left', {active: relationIndex == index}]"
                >
                    <span>{{tab.name}}</span>
                </li>
            </ul>
        </div>
        <div class="relation_content">
            <img :src="relationDetialImg" alt="">
            <div v-html="relationDetialText"></div>
        </div>
    </div>
</template>
<script>
    import { indexInterface } from "@/utils/mHttp.js";
    export default {
        name: 'investorRelations',
        data() {
            return {
                language: "zh",
                relationBgImage: '', // 投资者关系背景
                relationTitle: '', // 投资者关系标题
                relationSubTitle: '', // 投资者关系子标题
                relationTabs: [], // 投资者关系tab
                relationIndex: 0, // 投资者关系tabIndex
                relationDetialImg: '', // 投资者关系详情图片
                relationDetialText: '', // 投资者关系详情文字
            }
        },
        methods: {
            // 获取投资者关系数据
            getRelationData() {
                indexInterface.getRelationData({
                    languageType: this.language
                }).then(res => {
                    this.relationBgImage = res.body.title.picUrl // 投资者关系背景
                    this.relationTitle = res.body.title.name // 投资者关系标题
                    this.relationSubTitle = res.body.title.chirdenTitle // 投资者关系子标题
                    this.relationTabs = res.body.menu // 投资者关系tab
                    this.getRelationDetial(this.relationTabs[this.relationIndex].id)
                })
            },
            // 获取投资者关系详情
            getRelationDetial(id) {
                indexInterface.getRelationDetialData({
                    id: id
                }).then(res => {
                    if(res.success) {
                        this.relationDetialImg = res.body.info.picURL // 投资者关系详情图片
                        this.relationDetialText = res.body.info.content // 投资者关系详情文字
                    }
                })
            },
            // 切换投资者关系tab
            changeRelationTabs(index, id) {
                this.relationIndex = index;
                this.getRelationDetial(id)
            },
        },
        created() {
            this.getRelationData()
        }
    }
</script>