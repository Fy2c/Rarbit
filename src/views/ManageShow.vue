<template>
  <div>
    <ManageShowsMenuBar></ManageShowsMenuBar>
    <div class="d-lg-block d-xl-block d-md-block d-none" style="margin-bottom: 100px;"></div>
    <div style="height:1000px;margin-top: 60px;">

      <v-container fluid=true class="px-10">
        <v-row class="ml-n5 mt-7">
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
import ShowCard from '@/components/ShowCard/ShowCard.vue'
import ManageShowsMenuBar from '@/components/Menu/ManageShowsMenuBar/ManageShowsMenuBar.vue'

import ShowModel from '../models/ShowModel'

@Component({
  components: {
    ManageShowsMenuBar,
    ShowCard
  }
})
export default class Home extends Vue {
  shows: ShowModel[];

  constructor () {
    super()
    this.shows = [
      new ShowModel('Anais Fleming', 'My Life is a Journey - Love and Piece',
        'my_life_is_a_journey', '/assets/movies/movie-02.png'),
      new ShowModel('Leandro Beasley', 'Soul Food - Eat with your healthy habits',
        'soul_food', '/assets/movies/movie-03.png')

    ]
  }
}
</script>
