import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'
import { firestorePlugin } from 'vuefire'
import router from './routes/index.js'


Vue.config.productionTip = false

var firebaseConfig = {
    apiKey: "AIzaSyBfwIaj6B1dVldyd0sAdfg1XVMyFGg7bDk",
    authDomain: "fabrica-memes-265c1.firebaseapp.com",
    databaseURL: "https://fabrica-memes-265c1.firebaseio.com",
    projectId: "fabrica-memes-265c1",
    storageBucket: "fabrica-memes-265c1.appspot.com",
    messagingSenderId: "705568211382",
    appId: "1:705568211382:web:0202137b1938b4f682c117"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
export const firestore = firebaseApp.firestore();
export const storage = firebase.storage().ref('/images');

Vue.use(firestorePlugin);

new Vue({

  vuetify,
  render: h => h(App),
  router,
  components : {App}
}).$mount('#app')
