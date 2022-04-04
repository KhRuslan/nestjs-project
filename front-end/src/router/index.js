import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Smth from '../views/Smth.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/smth',
    name: 'Smth',
    component: Smth
  },

]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router