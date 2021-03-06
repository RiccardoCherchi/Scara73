import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Highlights from '../views/Highlights.vue'
import Overview from '../views/Overview.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/highlights',
    name: 'Highlights',
    component: Highlights,
  },
  {
    path: "/panoramica",
    name: "Panoramica",
    component: Overview,
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
