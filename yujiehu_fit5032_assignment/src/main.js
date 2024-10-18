import router from './router'
import store from './store/store'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'


app.mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANewMa7UTwSWtelUCyfWtUFgHa7LYi6ys",
  authDomain: "ass-9fb61.firebaseapp.com",
  projectId: "ass-9fb61",
  storageBucket: "ass-9fb61.appspot.com",
  messagingSenderId: "381658605466",
  appId: "1:381658605466:web:f83afda72bd23a6f34fc23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

app.use(PrimeVue, { theme: { preset: Aura } })
app.use(store)
app.use(router)

app.mount('#app')