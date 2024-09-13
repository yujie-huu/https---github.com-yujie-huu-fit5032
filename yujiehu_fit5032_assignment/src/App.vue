<script setup>

import {RouterView } from 'vue-router'
// import { useRoute } from 'vue-router' 
// import Homepage from './views/HomePage.vue'
import Toast from 'primevue/toast'
// import store from '@/store/store'
import HeaderSection from './components/HeaderSection.vue'


</script>


<template>
  <h1 id="WebTitle">Monash Age Care</h1> 
  <Toast />
  <div>
    <HeaderSection />
  </div>
  
  <RouterView />

</template>

<style scoped>
#WebTitle {
  font-size: 45px;
  font-family: 'Lucida Sans';
  background-color: #656fdfba;
  color: rgb(16, 16, 16);
  padding: 10px;
  border-radius: 10px 10px 0 0;
  text-align: center;
  margin: 20px;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
}
</style>
