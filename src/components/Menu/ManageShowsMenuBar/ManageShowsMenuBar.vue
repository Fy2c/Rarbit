<template>
  <div>
    <v-app-bar class="sub-menu" color="#001e1f" dark flat dense fixed>
      <v-btn style="color: #fff;" v-on:click="back($event)">
        <!-- <v-icon small left style="color: #00d7ee;">$arrowAltCircleLeft</v-icon> -->
        Create New Show
      </v-btn>
      
      <v-spacer />

      <v-btn style="color: #fff;">
        Share This Show
        <v-icon small right style="color: #00d7ee;">$shareAlt</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ManageShowsMenuBar extends Vue {
  back($event: any) {
    this.$router.push({ path: "edit-show" });
  }
}
</script>

<style scoped lang="scss" src="./ManageShowsMenuBar.scss"></style>
