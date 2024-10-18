<template>
    <div class="col-md-8 col-sm-10 text-center mx-auto mt-5">
        <h1>Sign in</h1>
        <p><input type="text" placeholder="Email" v-model="email" /></p>
        <p><input type="password" placeholder="Password" v-model="password" /></p>
        <p>
            <select v-model="role">
                <option value="user">User</option>
                <option value="admin">Admin</option>
            </select>
        </p>
        <p><button @click="signin">Sign in via Firebase</button></p>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue"
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
  import { useRouter } from "vue-router"

  const auth = getAuth()
  
const email = ref("")
  const password = ref("")
  const router = useRouter()
  const role = ref("")
  const adminUsername = 'admin@monash.edu'
  const adminPassword = 'admin123'

  const signin = () => {
    if (role.value === 'admin'){
        if (email.value === adminUsername && password.value === adminPassword) {
            signInWithEmailAndPassword(auth, email.value, password.value)
                .then(() => {
                    console.log("Firebase Signin Successful!")
                    router.push("/")
                    console.log(auth.currentUser) //To check the current User signed in
                })
                .catch((error) => {
                    console.log(error.code)
                })
        } else {
            console.log('incorrect admin acccount and password')
        }
    } else {
        signInWithEmailAndPassword(auth, email.value, password.value)
            .then(() => {
                console.log("Firebase Signin Successful!")
                router.push("/")
                console.log(auth.currentUser) //To check the current User signed in
            })
            .catch((error) => {
                console.log(error.code)
            })
    }
  }
  </script>
  