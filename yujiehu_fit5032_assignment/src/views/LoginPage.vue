<template>
    <div class="container mt-5">
        <h1 class="text-center">User Information Form</h1>
        <form @submit.prevent="handleLogin">
            <div class="row mb-3">
                <div class="col-sm-6 mx-auto">
                <label for="username" class="form-label text-start">Username</label>
                <input
                    type="email"
                    class="form-control"
                    id="username"
                    v-model="formData.username"
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
                    v-model="formData.password"
                />
                </div>
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-primary me-2">Login</button>
                <button type="button" class="btn btn-secondary" @click="clearForm">Clear</button>
            </div>
        </form>
        <div class="row text-center mt-4">
        <p class="fw-bold">Don't have an account?</p>
        <router-link to="/register" class="nav-link fw-bold text-danger" active-class="active">Register</router-link>
        </div>
    </div>
</template>


<script>
import { ref } from 'vue'

const formData = ref({
username: '',
password: '',
})
  
//   const submittedCards = ref([])
  
/*   const submitForm = () => {
validatePassword(true)
validateUser(true)
if (
    !errors.value.username &&
    !errors.value.password &&
) {
    submittedCards.value.push({ ...formData.value })
    clearForm()
}
} */

/* const clearForm = () => {
formData.value = {
    username: '',
    password: '',
}
}

const errors = ref({
username: null,
password: null,
}) */
  
  

/*   const validateConfirmPassword = (blur) => {
if (formData.value.password !== formData.value.confirmPassword) {
    if (blur) errors.value.confirmPassword = 'Passwords do not match.'
} else {
    errors.value.confirmPassword = null
}
} */




/* const validateUser = (blur) => {
// Check if the username already exists in the submittedCards array
const isDuplicate = submittedCards.value.some((card) => card.username === formData.value.username)

if (isDuplicate) {
    errors.value.username = 'This username has already been submitted'
} else {
    errors.value.username = null
}
} */


import { mapActions } from 'vuex'

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    ...mapActions(['login']),
    handleLogin() {
      const user = { username: this.username, password: this.password };
      this.login(user);
      this.$router.push({ name: 'Home' }); // Redirect to Home after login
    }
  },
};

</script>

<style scoped>
.card {
border: 1px solid #ccc;
border-radius: 10px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.card-header {
background-color: #275fda;
color: white;
padding: 10px;
border-radius: 10px 10px 0 0;
text-align: center;
}
.list-group-item {
padding: 10px;
}
</style>
  