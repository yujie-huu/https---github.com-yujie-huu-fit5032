import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'


const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/login',
    name: 'Login Page',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'Register Page',
    component: RegisterPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (!store.state.isAuthenticated && to.name !== 'Login') {
    return { name: 'Login' };
  } else {
    next();
  }
});



export default router

