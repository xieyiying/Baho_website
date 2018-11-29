<template>
    <div class="yd_brands_center content_mtop">
        <div class="brand_top_banner" :style="{backgroundImage: 'url(' + brandBanner +')'}">
            <h1>品牌中心</h1>
        </div>
        <div class="brand_describe">
            <h3>贝豪给品牌赋予生命</h3>
            <p>
                在我们看来，每一个品牌都有生命并其独特的价值。孵化、萌芽、成长、成熟...它们经历了如玉石般的打磨与雕琢，凝聚了品牌工匠们的心
            </p>
        </div>
        <ul class="sub_brands">
            <li v-for="(item, index) in subBrandsArr" :key="index">
                <a href="javascript:;" :style="{backgroundImage: 'url(' + subBrandBanner +')'}">
                    <span>了解更多>></span>
                </a>
                <i class="sub_brand_logo" :style="{backgroundImage: 'url(' + item.background +')'}"></i>
                <p class="sub_brand_describe">
                    可优比作为一个全品类孕婴童生态品牌，我们不断加强与妈妈的情感联结，全 方位解决妈妈育儿痛点，并提供高颜值、高品质、高性价比的产
                </p>
            </li>
        </ul>
        <m_top></m_top>
    </div>
</template>
<script>
    import img from '@/assets/img/mobile/banner.png'
    import kublogo from '@/assets/img/mobile/KUB-logo.png'
    import diailogo from '@/assets/img/mobile/diai.png'
    import bahologo from '@/assets/img/mobile/baho_logo.png'
    import migelogo from '@/assets/img/mobile/mige_logo.png'
    import maikeshilogo from '@/assets/img/mobile/maikeshi_logo.png'
    export default {
        name: 'brand',
        data() {
            return {
                brandBanner: img,
                subBrandBanner: img,
                subBrandsArr: [
                    {
                        background: kublogo
                    },
                    {
                        background: diailogo
                    },
                    {
                        background: bahologo
                    },
                    {
                        background: migelogo
                    },
                    {
                        background: maikeshilogo
                    },
                ], // 子品牌
            }
        }
    }
</script>
<style>
    @import '../../assets/mless/brandsCenter/brandsCenter.css'
</style>