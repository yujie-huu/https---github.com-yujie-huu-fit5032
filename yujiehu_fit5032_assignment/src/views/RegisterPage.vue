<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 class="text-center">User Information Form</h1>
        <form @submit.prevent="submitForm">
          <div class="row mb-3">
            <div class="col-sm-6">
              <label for="username" class="form-label">Username</label>
              <input
                type="text"
                class="form-control"
                id="username"
                @blur="() => validateUser(true)"
                @input="() => validateUser(false)"
                v-model="formData.username"
              />
              <div v-if="errors.username" class="text-danger">{{ errors.username }}</div>
            </div>
            <div class="col-sm-6">
              <label for="gender" class="form-label">Gender</label>
              <select
                class="form-select"
                id="gender"
                @blur="() => validateGender(true)"
                @input="() => validateGender(false)"
                v-model="formData.gender"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <div v-if="errors.gender" class="text-danger">{{ errors.gender }}</div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-sm-6">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                @blur="() => validatePassword(true)"
                @input="() => validatePassword(false)"
                v-model="formData.password"
              />
              <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
            </div>
            <div class="col-md-6 col-sm-6">
              <label for="confirm-password" class="form-label">Confirm password</label>
              <input
                type="password"
                class="form-control"
                id="confirm-password"
                v-model="formData.confirmPassword"
                @blur="() => validateConfirmPassword(true)"
              />
              <div v-if="errors.confirmPassword" class="text-danger">
                {{ errors.confirmPassword }}
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-sm-6">
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="isAustralian"
                  v-model="formData.isAustralian"
                />
                <label class="form-check-label" for="isAustralian">Australian Resident?</label>
              </div>
            </div>
            <div class="col-sm-6">
              <label for="age" class="form-label">Age</label>
              <input
                type="number"
                class="form-control"
                id="age"
                v-model="formData.age"
              />
              <div v-if="errors.age" class="text-danger">{{ errors.age }}</div>
            </div>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary me-2">Submit</button>
            <button type="button" class="btn btn-secondary" @click="clearForm">Clear</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'


/**
 * The router instance used for redirecting the user to the login page.
 */
const router = useRouter()
  
const formData = ref({
  username: '',
  password: '',
  confirmPassword: '',
  isAustralian: false,
  age: '',
  gender: '',
})

const submittedCards = ref([])

const submitForm = () => {
  validatePassword(true)
  validateConfirmPassword(true)
  validateGender(true)
  validateAge(true)
  validateUser(true)
  if (
    !errors.value.username &&
    !errors.value.password &&
    !errors.value.confirmPassword &&
    !errors.value.gender &&
    !errors.value.age
  ) {
    submittedCards.value.push({ ...formData.value })
    router.push('/login') // Navigate to login page if login succeeded
    clearForm()
  }
}

const clearForm = () => {
  formData.value = {
    username: '',
    password: '',
    confirmPassword: '',
    isAustralian: false,
    age: '',
    gender: ''
  }
}

const errors = ref({
  username: null,
  password: null,
  confirmPassword: null,
  resident: null,
  age: null,
  gender: null
})

const validatePassword = (blur) => {
  const password = formData.value.password
  const minLength = 8
  const hasUppercase = /[A-Z]/.test(password)
  const hasLowercase = /[a-z]/.test(password)
  const hasNumber = /\d/.test(password)
  const hasSpecialChar = /[!@#$%^&*()|<>]/.test(password)

  if (password.length < minLength) {
    if (blur) errors.value.password = `Password must be at least ${minLength} characters long.`
  } else if (!hasUppercase) {
    if (blur) errors.value.password = 'Password must contain at least one uppercase letter.'
  } else if (!hasLowercase) {
    if (blur) errors.value.password = 'Password must contain at least one lowercase letter.'
  } else if (!hasNumber) {
    if (blur) errors.value.password = 'Password must contain at least one number.'
  } else if (!hasSpecialChar) {
    if (blur) errors.value.password = 'Password must contain at least one special character.'
  } else {
    errors.value.password = null
  }
}

/**
 * Confirm password validation function that checks if the password and confirm password fields match.
 * @param blur: boolean - If true, the function will display an error message if the passwords do not match.
 */
const validateConfirmPassword = (blur) => {
  if (formData.value.password !== formData.value.confirmPassword) {
    if (blur) errors.value.confirmPassword = 'Passwords do not match.'
  } else {
    errors.value.confirmPassword = null
  }
}

const validateGender = (blur) => {
  const gender = formData.value.gender
  const selected = /^(female|male|other)$/.test(gender)

  if (!selected) {
    if (blur) errors.value.gender = 'You have to select a gender from the list.'
  } else {
    errors.value.gender = null
  }
}

const validateAge = (blur) => {
  const age = formData.value.age
  if (age < 50) {
    if (blur) errors.value.age = 'This is the age care website serve for elder population age over 50!'
  } else if (age > 200) {
    if (blur) errors.value.age = 'Please enter a reasonable number.'
  } else {
    errors.value.age = null
  }
}

const validateUser = (blur) => {
  // Check if the username already exists in the submittedCards array
  const isDuplicate = submittedCards.value.some((card) => card.username === formData.value.username)
  // Check if the username is in email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const hasValidEmailFormat = emailRegex.test(formData.value.username)
  if (isDuplicate) {
    if (blur) errors.value.username = 'This username has already been submitted'
  } else if (!hasValidEmailFormat) {
    if (blur) errors.value.username = 'Please enter a valid email.'
  } else {
    errors.value.username = null
  }
}
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
  