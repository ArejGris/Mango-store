<template>
    <v-layout class="mx-3 ">
                <v-navigation-drawer width="300" class="text-center" v-model="show">
        <TheOrder/>
    </v-navigation-drawer>
        
        <v-main >
            <v-row class="mx-auto my-auto ">
                <v-col cols="12" color="deep-purple-accent-3" rounded="0" class="d-flex flex-row bg-pink overflow-auto justify-center" > 
                    
                    <v-btn @click="show=!show" class="text-button" variant="plain">your order</v-btn>
                   
                    <v-tabs v-model="tab"  >
                       
                        <v-tab v-for= "cat in cats" :key="cat" :value="cat.class">
                            {{ cat.title }}
                        </v-tab>
                   
                    </v-tabs>
                </v-col>
            </v-row>
            <v-window v-model="tab" class="mb-7">
            <v-row class="d-flex flex-row mx-auto px-2 justify-center flex-grow ">
                <v-col cols="12" md="3" v-for="(plat,i) in filteredPlat" :key="i" class="mr-auto" >
                    <OneMeal :id="plat.id"
                        :title="plat.title"
                    :price="plat.price"
                    :stars="plat.stars"
                    :additions="plat.additions"
                    @detail="$emit('detail',$event)"
                    />
                </v-col>

            </v-row>
        </v-window>
        <v-divider></v-divider>
        <v-window >
            <v-row class="d-flex flex-row justify-center align-center mx-auto">
          <v-col cols="12">
            <TheOrder @close="show=!show"/>
          </v-col>
        </v-row>
        </v-window>
      
        </v-main>
    </v-layout>
</template>
<script >
import OneMeal from './OneMeal.vue'
import TheOrder from '../TheOrder.vue'
export default{
    emits:['detail'],
    components:{ OneMeal,TheOrder},
    data:()=>({
    selectedCat:'desert',
    activeBadge:false,
    tab:'1',
    filteredPlats:[],
  cats:[
    {
        title:'dessert',
        class:'1'
    },
    {
        title:'main plat',
        class:'2'
    },
    {
        title:'second plat',
        class:'3'
    }

],
show:true
}),
computed:{
    plats(){
        return this.$store.getters.plats
    },
    filteredPlat(){
        return this.plats.filter(p=>p.catId==this.tab)
    }
},
methods:{
    close(){
        this.show=!this.show
    },
    filter(val){
        return this.plats.filter(p=>p.class==val)
    }

},
watch:{
    tab(val){
        this.filteredPlats=this.filter(val)
    }
}
}

</script>