<template>
  <div>
    <!-- <HomeMenuBar 
      class="d-lg-block d-xl-block d-md-block d-none"
      @filter-updated="getShowList"
    /> -->
    <div class="d-lg-block d-xl-block d-md-block d-none" style="margin-bottom: 64px;"></div>
    <div style="margin-top: 30px;">
      <v-container fluid=true class="px-11">
        <v-row class="ml-n5">
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

import HomeMenuBar from '@/components/Menu/HomeMenuBar/HomeMenuBar.vue'
import ShowCard from '@/components/ShowCard/ShowCard.vue'
import debounce from 'lodash/debounce';

@Component({
  components: {
    HomeMenuBar,
    ShowCard
  }
})
export default class MyList extends Vue {
  get page(){
    return HomeModule.page;
  }

  get shows() {
    return HomeModule.showsList;
  };

  async created(){
    await HomeModule.getShowList();
  }

}

</script>
