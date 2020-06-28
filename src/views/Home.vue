<template>
  <div>
    <HomeMenuBar 
      class="d-lg-block d-xl-block d-md-block d-none"
      @filter-updated="onFilterUpdated"
    />
    <div class="d-lg-block d-xl-block d-md-block d-none" style="margin-bottom: 100px;"></div>
    <div style="margin-top: 60px;height: 1000px;">
      <v-container fluid=true class="px-11">
        <v-row class="mt-6 ml-n5">
          <ShowCard
            v-for="item in shows"
            v-bind:key="item.Id"
            :show="item" />
        </v-row>
      </v-container>
    </div>
  </div>

</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { HomeModule } from '@/store/modules/home';

import ShowApi from '@/api/shows';
import HomeMenuBar from '@/components/Menu/HomeMenuBar/HomeMenuBar.vue'
import HeroHome from '@/components/HeroHome/HeroHome.vue'
import ShowCard from '@/components/ShowCard/ShowCard.vue'
import debounce from 'lodash/debounce';


@Component({
  components: {
    HomeMenuBar,
    ShowCard,
    HeroHome
  }
})
export default class Home extends Vue {
  get shows() {
    return HomeModule.showsList;
  };

  private listQuery = {
    page: 1,
    limit: 20
  }

  public created(){
  }

  public onFilterUpdated() {
    this.getShowList();
  }

  private getShowList = debounce(HomeModule.getShowList, 500)

    // private async getList() {
    //   const data = await ShowApi.getShowList(this.listQuery);
    //   console.log(data);
    //   // this.list = data.items
    //   // this.total = data.total
    //   // Just to simulate the time of the request
    //   // setTimeout(() => {
    //   //   this.listLoading = false
    //   // }, 0.5 * 1000);
    // }

  constructor () {
    super();
    
    
  }

}

</script>
