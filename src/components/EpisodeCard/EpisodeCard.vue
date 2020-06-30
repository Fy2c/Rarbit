<template>
  <v-card
    class="movie-poster-card mx-6 mt-5 mb-12"
    width="300px"
    color="#212121"
    style="background:none;"
    v-on:click="select($event)"
  >
    <div style="position: relative;">
      <v-img style="border-radius: 8px;" :src="episode.thumbnail"></v-img>
      <div class="overlay">
        <span class="ep-text" style="font-size:small;">Episode {{ episode.episodeNumber }}</span>
      </div>
    </div>
    <div class="my-2 px-2">
      <h4 class="mt-3" style="color:#d2e8ec;">{{ episode.title }}</h4>
      <h5 class="mt-2" style="font-weight:normal;">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum.
      </h5>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class EpisodeCard extends Vue {
  @Prop({ required: true })
  show!: any;

  @Prop({ required: true })
  episode!: any;

  constructor() {
    super();
  }

  select(event: any) {
    event.target.blur();
    this.$router.push(
      "/episode/" + this.show.Slug + "/" + this.episode.EpisodeNumber
    );
  }
}
</script>

<style scoped lang="scss" src="./EpisodeCard.scss"></style>
