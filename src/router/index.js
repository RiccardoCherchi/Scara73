import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Highlights from '../views/Highlights.vue'
import Overview from '../views/Overview.vue'
import Info from '../views/Info.vue';

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
  },
  {
    path: '/scheda-tecnica',
    name: 'Info',
    component: Info,
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
