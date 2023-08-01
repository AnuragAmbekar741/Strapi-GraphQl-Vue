import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Category from '../views/Category.vue'
import ReviewDetails from '../views/ReviewDetails.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/review',
      name: 'review',
      component: ReviewDetails
    },
  ]
})

export default router
