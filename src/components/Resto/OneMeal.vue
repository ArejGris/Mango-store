<template>
     <v-card
    class="mx-auto my-0  pt-4 ps-2 " width="240"  style="border-radius: 20%;"
  >
    
  <v-card-item>
   
     <v-card-title class="text-h6 text-center pa-0 font-weight-bold text-pink" >
      
       <v-avatar class="my-auto mr-2">
        <v-img
        cover
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>
       </v-avatar>
       {{title}}</v-card-title>

     
    </v-card-item>

    <v-card-subtitle class="text-center text-subtitle-1 text-pink-darken">
        total price: ${{totlalPrice}}
      </v-card-subtitle>
    <v-card-text>
      <v-row
        class="mx-0 justify-center"
      >
        <v-rating
          :model-value="stars"
          color="pink"
          density="compact"
          half-increments
          readonly
          size="small"
        ></v-rating>

        <div class="text-grey ms-4">
          {{ stars }}
        </div>
      </v-row>
      <v-row>number of additions</v-row>
    </v-card-text>

    <v-divider class="mx-0 mb-1"></v-divider>
   
    <v-card-title class="text-subtitle-2 text-pink "> your additions</v-card-title>
     <v-card-subtitle>
      
      <v-chip v-for="(add,i) in selectedAdditions" :key="i" class="overflow-auto"> {{ add }}</v-chip>
      
            
     </v-card-subtitle>
    <v-card-actions class="justify-center">
      <v-btn
       class="bg-pink-darken-2 "
        variant="filled"
        rounded="pill"
        @click="reserve"
      >
        Reserve
      </v-btn>
      <v-btn
       class="bg-pink-darken-2 "
        variant="filled"
        rounded="pill"
        @click="details"
      >
        Details
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>
           
  <v-card
    class="mx-auto"
    max-width="300"
    z-index="1"
  >
    <v-list >
        <v-list-item v-for="(item,i) in additions" :key="i" fluid>
                <v-list-item-avatar>
                <v-icon>mdi-home</v-icon>
        </v-list-item-avatar>
            <template v-slot:append><v-btn @click="addMe(item)">{{ item }}</v-btn></template>
        </v-list-item>
    </v-list>
  </v-card>
            </div>
          </v-expand-transition>
    
  </v-card>
</template>
<script >
export default{
  data(){
    return{
      show:false,
      selectedAdditions:[],
      totlalPrice:0
    }
  },
    props:['id','title','price','cat','additions','stars'],
    created(){
      this.totlalPrice=Number(this.price)

    },
    methods:{
      reserve(){
        const newPlat={
          id:this.id,
          title:this.title,
          price:this.totlalPrice,
          cat:this.cat,
          stars:this.stars,
          additions:this.selectedAdditions
        }
        this.$store.dispatch('addPlat',newPlat)

      },
      addMe(add){
        if(!this.selectedAdditions.includes(add)){
        this.selectedAdditions.push(add);
        this.totlalPrice+=10
        }

      },
      details(){
        this.show=!this.show

      }
    }
}

</script>