<template>
  <div>
    <v-app-bar class="sub-menu" color="#001e1f" dark flat dense fixed>
      <v-btn-toggle
          v-model="sorting"
          dense tile group mandatory
        >
          <v-btn>Trending now</v-btn>
          <v-btn>Popular</v-btn>
          <v-btn>Recently</v-btn>
      </v-btn-toggle>
      <v-btn-toggle
          v-model="filter"
          class="ml-9"
          dense tile group mandatory
        >
          <v-btn>Everything</v-btn>
          <v-btn>News</v-btn>
          <v-btn>Comedy</v-btn>
          <v-btn>Music</v-btn>
          <v-btn>General</v-btn>
          <v-btn>Drama</v-btn>
          <v-btn>Cooking</v-btn>
      </v-btn-toggle>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class HomeMenuBar extends Vue {
  public sorting: any = 0;
  public filter: any = 0;
}
</script>

<style scoped lang="scss" src="./HomeMenuBar.scss"></style>
