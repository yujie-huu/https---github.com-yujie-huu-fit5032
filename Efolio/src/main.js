// import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import router from './router'
import { initializeApp } from 'firebase/app'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCegQuA9oNpNNP-iVew7wlbjINGdsszw2E",
    authDomain: "w7-yujie-feabe.firebaseapp.com",
    projectId: "w7-yujie-feabe",
    storageBucket: "w7-yujie-feabe.appspot.com",
    messagingSenderId: "76396260165",
    appId: "1:76396260165:web:f7e221637797a3ed5aac2c"
};


// Initialize Firebase
initializeApp(firebaseConfig);

// Create Vue app instance
const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})

app.use(router)

app.mount('#app')