import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/HomePage.vue'
import Loginpage from '@/views/LoginPage.vue'
import Registerpage from '@/views/RegisterPage.vue'
import store from '@/store/store'
import Adminhome from '@/views/AdminHomepage.vue'
import HealthProvider from '@/views/HealthProvider.vue'

const routes = [
  {
    path: '/home',
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
  },
  {
    path: '/admin',
    name: 'Admin Home',
    component: Adminhome
  },
  {
    path: '/provider',
    name: 'Health Provider',
    component: HealthProvider
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (store.state.isAuthenticated == false && to.name !== 'Login Page' && to.name !== 'Register Page') {
    next ({ name: 'Login Page' });
  } else {
    next();
  }
});



export default router

