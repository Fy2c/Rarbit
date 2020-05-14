<template>
  <v-app>
    <NavigationBar></NavigationBar>
    <router-view></router-view>

  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import NavigationBar from '@/components/Menu/NavigationBar/NavigationBar.vue'

export default Vue.extend({
  name: 'App',
  components: {
    NavigationBar
  }

})
</script>

<style>
  .theme--dark.v-application{
    background: #001e1f !important;
  }

  .v-application .black {
    background-color: rgba(0,0,0,0.7) !important;
    border-color: rgba(0,0,0,0.7) !important;
  }

  .v-card{
    border: none;
    box-shadow: none !important;
  }

  .v-ripple__container {
    display:none !important;
  }

  .sub-menu{
    margin-top: 64px !important;
  }

  .small-title{
    font-size:middle;
    color:#707070;
  }

</style>
