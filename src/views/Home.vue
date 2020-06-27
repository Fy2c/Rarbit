<template>
  <div>
    <HomeMenuBar class="d-lg-block d-xl-block d-md-block d-none"></HomeMenuBar>
    <div class="d-lg-block d-xl-block d-md-block d-none" style="margin-bottom: 100px;"></div>
    <div style="margin-top: 60px;height: 1000px;">
      <v-container fluid=true class="px-11">
        <v-row class="mt-6 ml-n5">
          <ShowCard
            v-for="item in shows"
            v-bind:key="item.Id"
            :show="item"></ShowCard>
        </v-row>
      </v-container>
    </div>
  </div>

</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import HomeMenuBar from '@/components/Menu/HomeMenuBar/HomeMenuBar.vue'
import HeroHome from '@/components/HeroHome/HeroHome.vue'
import ShowCard from '@/components/ShowCard/ShowCard.vue'
import ShowModel from '../models/ShowModel'

@Component({
  components: {
    HomeMenuBar,
    ShowCard,
    HeroHome
  }
})
export default class Home extends Vue {
  shows: ShowModel[];

  @Watch('$route')
  onRouteChanged(to: any, from: any) {
    const newQuery = to.query;
    const oldQuery = from.query;
  }

  constructor () {
    super();
    
    this.shows = [
      new ShowModel('Anais Fleming', 'My Life is a Journey - Love and Piece',
        'my_life_is_a_journey', '/assets/movies/movie-02.png'),
      new ShowModel('Leandro Beasley', 'Soul Food - Eat with your healthy habits',
        'soul_food', '/assets/movies/movie-03.png'),
      new ShowModel('Adem Croft', 'Gem of California',
        'gem_of_california', '/assets/movies/movie-04.png')

    ]
  }
}

</script>
