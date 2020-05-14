<template>
  <div>
    <v-app-bar style="margin-top: 64px !important;" color="transparent" dark flat dense fixed>
      
      <v-btn style="color: #fff;" v-on:click="back($event)">
        <v-icon small left style="color: #00d7ee;">$arrowAltCircleLeft</v-icon>
        Go back
      </v-btn>

      <v-spacer />

      <v-btn style="color: #fff;">
        Share this show
        <v-icon small right style="color: #00d7ee;">$shareAlt</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class NavSubMenuBar extends Vue {
  back($event: any){
    this.$router.go(-1);
  }
}
</script>

<style scoped lang="scss" src="./NavSubMenuBar.scss"></style>