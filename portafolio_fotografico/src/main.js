import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase';
import { firebaseConfig } from "./config/FirebaseConfig";

// Initializador de Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
