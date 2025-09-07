import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
<<<<<<< HEAD
      path: '/about',
      name: 'about',
      component: AboutView,
=======
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
>>>>>>> 26174fc602cf7216f50d967c424363a67dee8686
    },
  ],
})

export default router
