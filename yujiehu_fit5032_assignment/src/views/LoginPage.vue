<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6 col-sm-10 mt-5 pt-2">
        <div>
          <h1 class="text-center">Welcome to the Monash Age Care!</h1>
        </div>
        <div class="mt-5 text-center">
          <p class="fs-3">We offer compassionate care and support services for the elderly, 
            enhancing their quality of life through personalized assistance, social engagement, 
            and a nurturing environment.</p>
        </div>  
      </div>
      <div class="col-md-6 col-sm-10 mt-5 pt-2">
        <h1 class="text-center">Login</h1>
        <form @submit.prevent="handleLogin">
          <div class="row mb-3">
            <div class="col-sm-6 mx-auto">
              <label for="email" class="form-label text-start">UserEamil</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="email"
                required
              />
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-sm-6  mx-auto">
              <label for="password" class="form-label text-start">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="password"
                required
              />
            </div>
          </div>
          <div class="text-center">
              <button type="submit" class="btn btn-primary me-2">Login</button>
          </div>
          <!-- Display error message -->
          <div v-if="errorMessage" class="text-danger text-center mt-3">
            {{ errorMessage }}
          </div>
        </form>
        <div class="row text-center mt-4">
          <p class="fw-bold">Don't have an account?</p>
          <RouterLink to="/register" class="nav-link active fw-bold text-danger">Register</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>



<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
// import { defineEmits } from 'vue'
import { RouterLink } from 'vue-router'
import store from '@/store/store'
import { userAccounts } from '@/store/userAccount'

/**
 * The router instance used for redirecting the user to the home page.
 */
const router = useRouter()

/**
 * Emits an event to the parent component to indicate that the user has been authenticated.
 */
// const emit = defineEmits(['authenticated'])

// Define reactive state for form inputs and error message
const email = ref('')
const password = ref('')
const errorMessage = ref('')


/**
 * Hardcode username and password.
 */
const adminUsername = 'admin@monash'
const adminPassword = 'admin123'

// const commonUsername = 'age@monash'
// const commonPassword = 'password'

/**
 * Handles the form submission.
 * @param {Event} event The form submission event.
 * If the username and password are correct, the user is authenticated and redirected to the home page.
 */
 const handleLogin = () => {
  // find the user account
  const user = userAccounts.find(
    (account) => account.username === email.value
  );

  if (user){
    if (user.username === adminUsername && user.password === adminPassword) {
      console.log('Login successful, admin')
      errorMessage.value = ''  // Clear the error message
      // emit('authenticated', true, email, 'admin')  // Emit the authenticated event
      store.state.isAuthenticated = true
      store.state.user = email
      store.state.usertype = 'admin'
      router.replace('/home') // Navigate to homepage if login succeeded
    } else if (user && user.password === password.value) {
      console.log('Login successful, normal user')
      errorMessage.value = ''  // Clear the error message
      // emit('authenticated', true, email, 'aged user')  // Emit the authenticated event
      store.state.isAuthenticated = true
      store.state.user = email
      store.state.usertype = 'aged user'
      router.replace('/home') // Navigate to homepage if login succeeded
    }
    else {
      console.log('Login failed')
      errorMessage.value = 'Login failed. Please check your email and password and try again.'
    }
  }else {
    console.log('Login failed')
    errorMessage.value = 'Login failed. This email is not registered.'
  }
}

</script>

<style scoped>
</style>
  