<template>
    <div>
        <NavSubMenuBar class="d-lg-block d-xl-block d-md-block d-none"></NavSubMenuBar>
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
import NavSubMenuBar from '@/components/Menu/NavSubMenuBar/NavSubMenuBar.vue'
import HeroHome from '@/components/HeroHome/HeroHome.vue'
import EpisodeCard from '@/components/EpisodeCard/EpisodeCard.vue'
import EpisodeModel from '../models/EpisodeModel'

@Component({
  components: {
    NavSubMenuBar,
    HeroHome,
    EpisodeCard
  }
})
export default class ShowDetail extends Vue {
        show: any;
        episodes: EpisodeModel[];

        get episodesCount (): number {
          return this.episodes.length
        }

        constructor () {
          super()
          this.show = {
              author: 'Anais Fleming', 
              title: 'My Life is a Journey - Love and Piece',
              slug:'my_life_is_a_journey', 
              poster:'/assets/movies/movie-02.png'
            }

          this.episodes = [
            new EpisodeModel(this.show.Author, 'Space - A final frontier', 1, this.show.Slug,
              '/assets/episodes/episode-01.png', 20, this.show.Id),
            new EpisodeModel(this.show.Author, 'Where All Started', 2, this.show.Slug,
              '/assets/episodes/episode-02.png', 0, this.show.Id),
            new EpisodeModel(this.show.Author, 'Alpha Centauri', 3, this.show.Slug,
              '/assets/episodes/episode-03.png', 0, this.show.Id),
            new EpisodeModel(this.show.Author, 'Saturn - A ring of stone', 4, this.show.Slug,
              '/assets/episodes/episode-04.png', 0, this.show.Id)
          ]
        }
}
</script>

<style>

</style>
