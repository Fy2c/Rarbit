<template>
  <div>
    <v-app-bar style="background:#001e1f !important;margin-top:64px !important;" dark flat dense fixed>
      
      <v-btn style="color: #fff;" v-on:click="back($event)">
        <!-- <v-icon small left style="color: #00d7ee;">$arrowAltCircleLeft</v-icon> -->
        Create new show
      </v-btn>

      <v-btn class="ml-3" style="color: #fff;" v-on:click="back($event)">
        Delete show
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
export default class ManageShowsMenuBar extends Vue {
  back($event: any){
    this.$router.push({ path: 'create-show' });
  }
}
</script>

<style scoped lang="scss" src="./ManageShowsMenuBar.scss"></style>