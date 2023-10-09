<template>
    <div>
        <Slider/>
        <Card/>
        <FeatureResource/>
        <MulitpleSlider/>
        <Footer/>
    </div>
</template>

<script>
import Footer from '~/components/Footer.vue';
import Card from '~/components/Card.vue'
import FeatureResource from '~/components/FeatureResource.vue';
import Slider from '~/components/Slider.vue';
import MulitpleSlider from '~/components/MulitpleSlider.vue';
export default{
    components:{
        Footer,
        Card,
        FeatureResource,
        Slider,
        MulitpleSlider
    }
}
</script>

<style >

</style>