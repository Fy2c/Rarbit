<template>
    <div>
        <EpisodeMenuBar class="d-lg-block d-xl-block d-md-block d-none"></EpisodeMenuBar>
        <div class="d-lg-block d-xl-block d-md-block d-none" style="margin-bottom: 100px;"></div>
        <div style="margin-top:60px;">
            <HeroHome></HeroHome>
            <v-container fluid=true class="px-10">
                <v-row class="mt-3 ml-3">
                    <span class="small-title">LISTING</span>
                </v-row>
                <v-row class="mb-4 ml-3">
                    <span style="font-size:small;color:#a5a5a5;">{{episodesCount}} Episodes</span>
                </v-row>
                <v-row>
                    <EpisodeCard
                        v-for="episode in episodes"
                        v-bind:key="episode.Title"
                        :episode="episode"
                        :show="show"></EpisodeCard>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import EpisodeMenuBar from '@/components/Menu/EpisodeMenuBar/EpisodeMenuBar.vue'
import HeroHome from '@/components/HeroHome/HeroHome.vue'
import EpisodeCard from '@/components/EpisodeCard/EpisodeCard.vue'

@Component({
  components: {
    EpisodeMenuBar,
    HeroHome,
    EpisodeCard
  }
})
export default class ShowDetail extends Vue {
        show: any;
        episodes: any;

        get episodesCount (): number {
          return this.episodes.length
        }

        constructor () {
          super();

          this.show = {
              author: 'Anais Fleming', 
              title: 'My Life is a Journey - Love and Piece',
              slug:'my_life_is_a_journey', 
              poster:'/assets/movies/movie-02.png'
            }

          this.episodes = [
            { author: this.show.author, title: 'Space - A final frontier', episodeNumber: 1,slug: this.show.slug,
              thumbnail: '/assets/episodes/episode-01.png', showId: this.show.Id },
            { author: this.show.author, title: 'Where All Started', episodeNumber: 2,slug: this.show.slug,
              thumbnail: '/assets/episodes/episode-02.png', showId: this.show.Id },
            { author: this.show.author, title: 'Alpha Centauri', episodeNumber: 3,slug: this.show.slug,
              thumbnail: '/assets/episodes/episode-03.png', showId: this.show.Id },
            { author: this.show.author, title: 'Saturn - A ring of stone', episodeNumber: 4,slug: this.show.slug,
              thumbnail: '/assets/episodes/episode-04.png', showId: this.show.Id },
          ]
        }

    // readonly Id: Guid
    // readonly EpisodeNumber: number
    // readonly Author: string
    // readonly Thumbnail: string
    // readonly Title: string
    // readonly Slug: string
    // readonly Progress: number
    // readonly ShowGuid: Guid
}
</script>

<style>

</style>
