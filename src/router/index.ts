import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import ManageShow from '../views/ManageShow.vue'
import EditShow from '../views/EditShow.vue'
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
    path: '/my-list',
    name: 'My list',
    component: Home
  },
  {
    path: '/manage-shows',
    name: 'Manage shows',
    component: ManageShow
  },
  {
    path: '/edit-show',
    name: 'Edit show',
    component: EditShow
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
