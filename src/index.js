import {createStore} from 'vuex'
const store=createStore({
    state(){
        return{
            catigories:[
                {
                    id:'1',
                    title:'dessert'
                },
                {
                    id:'2',
                    title:'main plat'
                },
                {
                    id:'1',
                    title:'second plat'
                }
            ],
            plats:[
                {
                    id:1,
                    title:'frise fish',
                    stars:5,
                    catId:'2',
                    price:500,
                    additions:['selt','peppor','spices']
                },
                {
                    id:2,
                    title:'meat steaks',
                    stars:4,
                    catId:'2',
                    price:800,
                    additions:['selt','peppor','spices','spearmint']
                },
                {
                    id:3,
                    title:'salade green',
                    stars:4,
                    catId:'3',
                    price:900,
                    additions:['selt','peppor','lemon']
                },
                {
                    id:4,
                    title:'vegetables',
                    stars:3,
                    catId:'2',
                    price:20,
                    additions:['selt','peppor','spices']
                },
                {
                    id:5,
                    title:'grilled chicken',
                    stars:4,
                    catId:'2',
                    price:290,
                    additions:['selt','peppor','spices']
                },
                {
                    id:6,
                    title:'crispes',
                    stars:4,
                    catId:'3',
                    price:180,
                    additions:['selt','peppor','spices']
                },
                {
                    id:7,
                    title:'green soup',
                    stars:1,
                    catId:'3',
                    price:420,
                    additions:['selt','peppor','spices']
                },
                {
                    id:8,
                    title:'mushroom soup',
                    stars:1,
                    catId:'3',
                    price:600,
                    additions:['selt','peppor','spices']
                }, {
                    id:9,
                    title:'carrot cake',
                    stars:1,
                    catId:'1',
                    price:100,
                    additions:['candles','chocolate','caroot']
                },
                {
                    id:10,
                    title:'strawberry cake',
                    stars:1,
                    catId:'1',
                    price:300,
                    additions:['chocolat','suger','strawberry']
                }
            ]
            ,
            selectedPlat:[],
            totalPrice:0

        }
    },
    getters:{
        cats(state){
            return state.catigories
        },
        plats(state){
           return state.plats
},
        selectedPlat(state){
           return state.selectedPlat
},
totalPrice(state){return state.totalPrice}
    },
    mutations:{
      
        addPlat(state,payload){
            if(!state.selectedPlat.some(p=>p.id===payload.id)){
            state.selectedPlat.push(payload);
            state.totalPrice+=Number(payload.price)

            }
        },
        updatePlat(state,payload){
            const index=state.selectedPlat.findIndex(p=>p.title===payload.title);
            state.selectedPlat[index].additions=payload.additions
        },
        remove(state,payload){
            state.selectedPlat=state.selectedPlat.filter(p=>p.id!==payload.id)
            state.totalPrice-=Number(payload.price)
        }
    },
    actions:{
        addPlat(context,payload){
            context.commit('addPlat',payload)
        },
        updatePlat(context,payload){
            context.commit('updatePlat',payload)

        },
        remove(context,payload){
            context.commit('remove',payload)

        }

    }
})
export default store