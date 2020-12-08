import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/product",
    name: "productpage",
    component: () => import('../components/productpage.vue')
  },
  {
    path: "/login",
    name: "login",
    component: () => import('../components/User/login.vue')
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import('../components/User/signup.vue')
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import('../components/User/profilepage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
