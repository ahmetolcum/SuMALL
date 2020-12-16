import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    props: true,
    name: 'Home',
    component: Home
  },
  {
    path: "/product/:id",
    props: true,
    name: "productpage",
    component: () => import('../components/productpage.vue')
  },
  {
    path: "/login",
    props: true,
    name: "login",
    component: () => import('../components/User/login.vue')
  },
  {
    path: "/signup",
    props: true,
    name: "signup",
    component: () => import('../components/User/signup.vue')
  },
  {
    path: "/profile",
    props: true,
    name: "profile",
    component: () => import('../components/User/profilepage.vue')
  },
  {
    path: "/cart",
    props: true,
    name:"cart",
    component:()=> import('../components/User/cart.vue')
  },
  {
    path: "/payment",
    name:"payment",
    props: true,
    component:()=> import('../components/User/payment.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
