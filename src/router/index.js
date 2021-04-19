import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Video from '../views/Video.vue';
import Highlights from '../views/Highlights.vue';
import Overview from '../views/Overview.vue';
import Info from '../views/Info.vue';
import Gallery from '../views/Gallery.vue';
import Presentation from '../views/Presentation.vue';
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Video',
    component: Video
  },
  {
    path: '/presentazione',
    name: 'presentation',
    component: Presentation
  },
  {
    path: '/home',
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
  },
  {
    path: '/galleria',
    name: 'Galleria',
    component: Gallery,
  },
  {
    path: '/contattaci',
    name: 'Contatti',
    component: Contact,
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
