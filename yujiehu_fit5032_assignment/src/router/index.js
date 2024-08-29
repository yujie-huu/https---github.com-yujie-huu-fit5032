import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/HomeView.vue'
import Rating from '../views/Rating.vue'

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/rating',
    name: 'Rating',
    component: Rating
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
