import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';
import MyList from '@/views/MyList.vue';
import ManageShow from '@/views/show/ManageShow.vue';
import EditShow from '@/views/show/EditShow.vue';
import EditEpisode from '@/views/episode/EditEpisode.vue';
import ShowDetail from '@/views/show/ShowDetail.vue';
import EpisodeDetail from '@/views/episode/EpisodeDetail.vue';

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
    component: MyList
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
    path: '/edit-episode',
    name: 'Edit episode',
    component: EditEpisode
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
