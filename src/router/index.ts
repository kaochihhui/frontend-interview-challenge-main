import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AdminPage from '../pages/AdminPage.vue'
import CartPage from '../pages/CartPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/admin',
      component: AdminPage
    },
    {
      path: '/cart',
      component: CartPage
    }
  ]
})

export default router
