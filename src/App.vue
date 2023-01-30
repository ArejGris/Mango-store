<template>
  
    <v-layout>
      <v-app-bar
        color="teal-darken-4" @click="drawer=!drawer"
      >
        <template v-slot:image>
          <v-img
            gradient="to top right, rgb(255, 211, 219), rgb(245, 125, 147)"
          ></v-img>
        </template>

        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Manggo Store</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <v-main style="height: 2500px;"  
        location="right"
        temporary>
         <MakeOrder @detail="selectMealDetail"/>
         <v-spacer>
         </v-spacer>
         <v-divider></v-divider>

      </v-main>
    
    </v-layout>
 
</template>
<script>
import MakeOrder from './components/Resto/MakeOrder.vue';
export default {
    data: () => ({
        drawer: false,
        cols: 0,
        group: null,
        items: [
            {
                title: "main",
                value: "/newmeal",
            },
            {
                title: "all catigory",
                value: "/cattigories",
            },
            {
                title: "all products",
                value: "/thecat",
            },
            {
                title: "products details",
                value: "/newproduct",
            }
        ],
    }),
    watch: {
        group() {
            this.drawer = false;
            this.cols = 4;
        },
    },
    methods:{
      selectMealDetail(id){
        this.$store.dispatch('setActiveMeal',id)
      }
    },
    components: { MakeOrder }
}
</script>
<style>

a{
color:rgb(245, 125, 147)
  
}
</style>
