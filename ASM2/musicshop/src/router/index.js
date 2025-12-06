import { createRouter, createWebHistory } from 'vue-router'

// CHÚ Ý: Dùng ../views/ thay vì ../UI/
import HomeView from '../views/HomeView.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cd',
      name: 'cd',
      component: () => import('../views/CDView.vue') // Trỏ về views
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue') // Trỏ về views
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue') // Trỏ về views
    },
    {
      path: '/product/:id',
      name: 'product-detail',
      component: () => import('../views/ProductDetailView.vue') // Trỏ về views
    }
  ]
})

export default router