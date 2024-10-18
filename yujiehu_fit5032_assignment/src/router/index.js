import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/HomePage.vue'
import Loginpage from '@/views/LoginPage.vue'
import Registerpage from '@/views/RegisterPage.vue'
import store from '@/store/store'
import HealthProvider from '@/views/HealthProvider.vue'
import FirebaseSigninView from '../views/FirebaseSigninView.vue'
import FirebaseRegisterView from '../views/FirebaseRegisterView.vue'

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
    path: '/provider',
    name: 'Health Provider',
    component: HealthProvider
  },
  {
    path: '/FireLogin',
    name: 'FireLogin',
    component: FirebaseSigninView
  },
  {
    path: '/FireRegister',
    name: 'FireRegister',
    component: FirebaseRegisterView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (store.state.isAuthenticated == false && to.name !== 'Login Page' && to.name !== 'Register Page') {
    next ({ name: 'Login Page' });
  } else if (store.state.usertype == 'admin' && to.name == 'Health Provider') { //admin cannot access health provider page
    next ({ name: 'Home page' });
  } else {
    next();
  }
});



export default router

