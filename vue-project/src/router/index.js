import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },  
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
})

export default router
