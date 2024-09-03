<script setup>

import {RouterView } from 'vue-router'
// import { useRoute } from 'vue-router' 
// import Homepage from './views/HomePage.vue'
import Toast from 'primevue/toast'
import Loginpage from './views/LoginPage.vue'
import store from '@/store/store'

/**
 * The current authentication status of the user.
 * Resets to false at the start (every time page is reloaded)
 */
// const isAuthenticated = ref(false)

/**
 * This function is called when the user logs in or logs out (via the LoginView component using an emit).
 * @param value
 */
const handleAuthentication = (authenticate, username, usertype) => {
  store.state.isAuthenticated = authenticate
  store.state.user = username
  store.state.usertype = usertype
}

//  const route = useRoute()

</script>


<template>
  <h1 id="WebTitle">Monash Age Care</h1> 
  <Toast />
  <div v-if="store.state.isAuthenticated == true"> 
    <div class="container">
      <div class="row">
        <div class="col-9 main-content">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
  <!-- If user is not authenticated, then we force them to see the LoginView -->
  <div v-else>
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-10 text-center">
        <Loginpage @authenticated="handleAuthentication" />
      </div>
    </div>
  </div>
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
