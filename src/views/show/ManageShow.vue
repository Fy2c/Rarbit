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

@Component({
  components: {
    ManageShowsMenuBar,
    ShowCard
  }
})
export default class Home extends Vue {
  shows: any = [];

  constructor () {
    super()
    this.shows = [
      {
        author: 'Anais Fleming', 
        title: 'My Life is a Journey - Love and Piece',
        slug:'my_life_is_a_journey', 
        poster:'/assets/movies/movie-02.png'
      },
      { 
        auth: 'Leandro Beasley', 
        title: 'Soul Food - Eat with your healthy habits',
        slug: 'soul_food', 
        poster: '/assets/movies/movie-03.png'
      },
    ]
  }
}
</script>
