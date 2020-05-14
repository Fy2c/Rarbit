<template>
  <div>
    <SubMenuBar class="d-lg-block d-xl-block d-md-block d-none"></SubMenuBar>
    <div class="d-lg-block d-xl-block d-md-block d-none" style="margin-bottom: 100px;"></div>
    <div style="margin-top: 60px;">
      <v-container fluid=true class="px-10">
        <v-row class="mt-3 mb-6 ml-1">
          <span style="font-size:middle;color:#707070;">LISTING</span>
        </v-row>
        <v-row class="ml-n5">
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
import { Component, Vue, Prop } from 'vue-property-decorator'
import SubMenuBar from '@/components/Menu/HomeMenuBar/SubMenuBar.vue'
import ShowCard from '@/components/ShowCard/ShowCard.vue'
import ShowModel from '../models/ShowModel'

@Component({components: {
    SubMenuBar,
    ShowCard
  }})
export default class Home extends Vue {

  shows:ShowModel[];

  constructor() {
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