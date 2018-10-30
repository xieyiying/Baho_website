<template>
    <div class="recruit_info">
        <div class="recruit_info_content">
            <div class="recruit_info_banner" :style="{backgroundImage: 'url(' + path +')'}"></div>
            <div class="recruit_info_detial">
                <div class="detial_box">
                    <h2>{{language == 'zh' ? '人才招聘' : 'Personnel Recruitment'}}</h2>
                    <div class="detial">
                        <ul class="detial_left">
                            <li 
                              :class="{active: index == isActive}"
                              v-for="(recruit, index) in recruitData"
                              :key="index"
                              @click="changeActive(index, recruit.id)"
                            >
                                {{recruit.name}}
                            </li>
                        </ul>
                        <div class="detial_right">
                            <ul class="main_point">
                                <li :class="{zh_li: language == 'zh'}">
                                    {{language == 'zh' ? '招聘人数' : 'Recruiting Numbers'}}：{{number}}
                                </li>
                                <li :class="{zh_li: language == 'zh'}">
                                    {{language == 'zh' ? '工作地点' : 'Working Location'}}：{{workPlace}}
                                </li>
                                <li :class="{zh_li: language == 'zh'}">
                                    {{language == 'zh' ? '学历要求' : 'Educational Requirements'}}：{{education}}
                                </li>
                                <li :class="{zh_li: language == 'zh'}">
                                    {{language == 'zh' ? '职位薪资' : 'Position salary'}}：{{salary}}
                                </li>
                            </ul>
                            <div class="duty_require">
                                <div>
                                    <h3>{{language == 'zh' ? '岗位职责' : 'Responsibilities'}}</h3>
                                    <p v-html="postDuties"></p>
                                </div>
                                <div>
                                    <h3>{{language == 'zh' ? '任职要求' : 'Requirements'}}</h3>
                                    <p v-html="requirements"></p>
                                </div>
                            </div>
                            <div class="contact_info">
                                {{language == 'zh' ? '投递邮箱' : 'Deliver mail'}}：{{email}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom_soild">
            <div class="left_soild"></div>
            <div class="right_soild"></div>
        </div>
    </div>
</template>
<script>
    import { GetRecruitInfoBannerData, GetRecruitInfoList, GetRecruitInfoListDetial } from '@/utils/https'
    export default {
        name: 'RecruitInfo',
        data() {
            return {
                recruitData: [],
                isActive: 0,
                path: '',
                detialId: '',
                number: '',
                workPlace: '',
                education: '',
                salary: '',
                postDuties: '',
                requirements: '',
                email: '',
                language: 'zh'
            }
        },
        methods: {
            changeActive(index, id){
                this.isActive = index
                this.getInfoDetialData(id)
            },
            // 获取banner
            getBannerData(language) {
                GetRecruitInfoBannerData({
                    languageType: language
                }, res => {
                    this.path = res.path
                })
            },
            // 获取招聘职位列表
            getInfoData(language) {
                GetRecruitInfoList({
                    languageType: language
                }, res => {
                    this.recruitData = res.body.list
                    this.detialId = res.body.list[0].id
                    this.getInfoDetialData(this.detialId, language)
                })
            },
            // 获取招聘职位详情
            getInfoDetialData(id, language) {
                GetRecruitInfoListDetial({
                    id: id,
                    languageType: language
                }, res => {
                    this.number = res.body.bahoZhaopin.number
                    this.workPlace = res.body.bahoZhaopin.workPlace
                    this.education = res.body.bahoZhaopin.education
                    this.salary = res.body.bahoZhaopin.salary
                    this.postDuties = res.body.bahoZhaopin.postDuties
                    this.requirements = res.body.bahoZhaopin.requirements
                    this.email = res.body.bahoZhaopin.email
                })
            }
        },
        created() {
            this.language = localStorage.getItem('language') ? localStorage.getItem('language') : 'zh'
            this.getInfoData(this.language)
            this.getBannerData(this.language)
            this.$Bus.$on('changeLanguage', language => {
                this.language = language
                this.getInfoData(language)
                this.getBannerData(language)
            })
        }
    } 
</script>
<style>
    @import '../../../assets/less/JoinBaho/RecruitInfo/RecruitInfo.css';
</style>

