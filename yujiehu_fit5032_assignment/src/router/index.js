import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/HomePage.vue'
import Loginpage from '@/views/LoginPage.vue'
import Registerpage from '@/views/RegisterPage.vue'
import store from '@/store/store'

const routes = [
  {
    path: '/',
    name: 'Home page',
    component: Homepage
  },
  {
    path: '/login',
    name: 'Login Page',
    component: Loginpage
  },
  {
    path: '/register',
    name: 'Register Page',
    component: Registerpage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (!store.state.isAuthenticated && to.name !== 'Login') {
    return { name: 'Login Page' };
  } else {
    next();
  }
});



export default router

