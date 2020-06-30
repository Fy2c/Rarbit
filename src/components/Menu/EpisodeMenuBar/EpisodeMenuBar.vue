<template>
  <div>
    <v-app-bar class="sub-menu" color="transparent" dark flat dense fixed>

      <v-btn style="color: #fff;" v-on:click="back($event)">
        <v-icon small left style="color: #58c4c7;">$arrowAltCircleLeft</v-icon>
        Go Back
      </v-btn>

      <v-btn class="ml-4" style="color: #fff;" v-on:click="createEpisode($event)">
        Add Episode
      </v-btn>

      <v-spacer />

      <v-btn style="color: #fff;">
        Share This Show
        <v-icon small right style="color: #58c4c7;">$shareAlt</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class EpisodeMenuBar extends Vue {
  back ($event: any) {
    this.$router.go(-1)
  }

  createEpisode($event: any) {
    this.$router.push({ path: "/edit-episode" });
  }
}
</script>

<style scoped lang="scss" src="./EpisodeMenuBar.scss"></style>
