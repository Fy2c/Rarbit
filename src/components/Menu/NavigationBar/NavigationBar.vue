<template>
  <div style="position:fixed; width:100%;z-index:100">
    <v-toolbar style="background:#001e1f !important;" dark flat class="px-1">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../../../assets/logo.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink hidden-sm-and-down"
          contain
          src="../../../assets/text.png"
          width="60"
        />
      </div>

      <v-toolbar-items flat class="ml-5">
        <v-btn
          v-for="item in nav"
          :key="item.text"
          :to="item.route"
          text
          depressed
          small
          :exact="item.exact"
          exact-active-class="nav-active"
        >{{ item.text }}</v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>
      <v-toolbar-items>
        <span class="my-auto user-text hidden-sm-and-down">Leandro Beasley</span>
        <v-img
          alt="Uesr image"
          class="shrink user-image ml-4 my-auto"
          contain
          src="../../../assets/user-image.png"
          width="35"
          height="35"
        />
      </v-toolbar-items>

    </v-toolbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class NavigationBar extends Vue {

  public nav: Array<any> = [
    {
      route: '/',
      text: 'Home',
      exact: true
    },
    {
      route: '/my-list',
      text: 'My List',
      exact: true
    },
    {
      route: '/manage-shows',
      text: 'Upload',
      exact: true
    }
  ];
}
</script>

<style scoped lang="scss" src="./NavigationBar.scss"></style>