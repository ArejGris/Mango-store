<template>
    <div id="bg"  v-if="show"></div>
    <div v-if="show">
<OneMeal/>
    </div>
</template>
<script>
import OneMeal from './components/Resto/OneMeal.vue';
export default{
    props:['show'],
    components:{OneMeal},
   
}
</script>
<style>
#bg{
margin:0;
background-color: gray transparent;
z-index:1
}
</style>