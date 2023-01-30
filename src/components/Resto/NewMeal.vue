
    <template>
      <v-app>
        <v-row cols="2" class="d-flex flex-row justify-center me-4 pa-0"  no-gutters="true">
          <v-col cols="12">
            <v-banner>
              <v-banner-actions class="ma-2">
                <v-btn color="pink-lighten">menu</v-btn>
                <v-btn color="pink-lighten">detials</v-btn>
              </v-banner-actions>
            </v-banner>
          </v-col>
          <v-col class="d-flex flex-grow-1 justify-center "  cols="8" >
             <v-card
    class="mx-auto my-0 pa-3 " width="380" border="12" border-color="pink"
  >
    <v-img
    cover
      height="250"
      class="rounded-pill mx-auto pa-4 "
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-item>
      <v-card-title class="text-h6 text-center pa-1 font-weight-bold text-pink" border="12">{{data.title}}</v-card-title>

      <v-divider class="mx-4 mb-1"></v-divider>
      <v-card-subtitle>
        <span class="me-1">new meal</span>

        <v-icon
          color="error"
          icon="mdi-fire-circle"
          size="small"
        ></v-icon>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :model-value="data.stars"
          color="pink"
          density="compact"
          half-increments
          readonly
          size="small"
        ></v-rating>

        <div class="text-grey ms-4">
          {{ data.stars }}
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1 text-pink-darken">
        total price: ${{totlalPrice}}
      </div>

      <div>{{ numberOfAdditions }}</div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-title class="text-subtitle-2 text-pink "> your additions</v-card-title>

    <div class="px-4">
      <v-chip-group v-model="selection">
        <v-chip v-for="add in selectedAdditions"
        :key="add"
        >{{ add }}</v-chip>

      </v-chip-group>
    </div>

    <v-card-actions class="justify-center">
      <v-btn
       class="bg-pink-darken-2 "
        variant="filled"
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>

          </v-col>
          <v-col class="flex-shrink-1 pa-4 " >
            <v-card>
            <v-banner>
            <div class="text-h5  text-center font-weight-bold border rounder-pill bg-pink-lighten-2" variant="outline" >All Additions</div>
            </v-banner>
            <v-list>
              <v-list-item v-for= "(add,i) in data.additions" :key="i">
                <v-list-item-title class="text-button font-weight-bold text-pink">{{ add }}</v-list-item-title>
                <template v-slot:prepend>
                  <v-btn @click="addMe(add)" color="pink" rounded="circle">add</v-btn>
                </template>
              </v-list-item>
            </v-list>
           </v-card>
           
          </v-col>
        </v-row>
      </v-app>
  

</template>
<script>
export default{
    data: () => ({
      loading: false,
      selection: 1,
      selectedAdditions:[],
      totlalPrice:0
    }),
    computed:{
      data(){
        return this.$store.getters.activeMeal
      }

    },
    created(){
      this.totlalPrice=Number(this.price)

    },

    methods: {
      reserve () {
        const newPlat={
          id:this.id,
          title:this.title,
          price:this.price,
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

      }
    },
}
</script>