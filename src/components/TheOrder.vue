<template>
    <v-app >
        <v-card class="ma-1 pa-1" width="400">
            
            <v-card-title class="d-flex flex-row justify-space-between">Your Order <v-btn @click="$emit('close')">close</v-btn></v-card-title>
            <v-card-subtitle class="text-amber text-subtitle-1">total order cost $ <span class="text-weight-bold text-amber-darken-1">{{ totalPrice }}</span></v-card-subtitle>
            <v-list max-width="auto">
                <v-list-item v-for = "(plat,i) in plats" :key="i" class="mx-2">
                    <template v-slot:append>
                        <v-avatar>
                        <v-img cover 
                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png">
                    </v-img></v-avatar>
                </template>
                    <v-list-item-title class="text-h6 text-red">{{ plat.title }}</v-list-item-title>
                    <v-list-item-action class="justify-center mx-ato">
                            <v-btn color="pink" size="small" @click="remove(plat)" rounded="pill">remove</v-btn>
                            <v-btn  size="small" rounded="pill" @click="showDetails(i)">details</v-btn>
                    </v-list-item-action>
         <v-spacer></v-spacer>
        
         <v-list-item-subtitle >
           <v-chip v-for="pat in plat.additions" :key="pat">{{ pat }}</v-chip>
            
         </v-list-item-subtitle>
                                   </v-list-item>
                                   
         <v-divider></v-divider>
            </v-list>
           <v-card-actions>
            <v-btn>submit</v-btn><v-btn>check out</v-btn>
           </v-card-actions>
        </v-card>
    </v-app>
</template>
<script>
export default{
    data(){
        return{
            show:[],
            show2:false

        }
    },
    emits:['close'],
computed:{
    plats(){
        return this.$store.getters.selectedPlat
    },
    totalPrice(){
        return this.$store.getters.totalPrice
    }
},
methods:{
    showDetails(i){
this.show.push(i);
this.show2=!this.show2
    },
remove(plat){
    this.$store.dispatch('remove',plat)
}
}
}
</script>