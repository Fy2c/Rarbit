import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import ManageShow from '../views/ManageShow.vue'
import ShowDetail from '../views/ShowDetail.vue'
import EpisodeDetail from '../views/EpisodeDetail.vue'



Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/manage-shows',
    name: 'Manage shows',
    component: ManageShow
  },
  {
    path: '/show/:id',
    name: 'Show detail',
    component: ShowDetail
  },
  {
    path: '/episode/:show/:id',
    name: 'Show episode',
    component: EpisodeDetail
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
  base: process.env.BASE_URL,
  routes
})

export default router
