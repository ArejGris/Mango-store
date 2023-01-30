import { createApp } from 'vue';
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './index.js'
// import NewMeal from './components/Resto/NewMeal.vue';

/* const router=createRouter({
history:createWebHistory(),
routes:[
  {path:'/newmeal',component:NewMeal},]

}) */
const app=createApp(App);

  app.use(vuetify);
app.use(store)
  app.mount('#app')
