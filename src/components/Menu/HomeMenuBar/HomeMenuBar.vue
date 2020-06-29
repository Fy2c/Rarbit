<template>
  <div>
    <v-app-bar class="sub-menu ml-9" color="#001e1f" dark flat dense fixed>
      <div style="width: 110px; margin-top: 26px;">
        <v-select
          class="sort-dropdown"
          height="32px"
          solo flat dense
          item-color="#1b4546"
          background-color="#1b4546"
          v-model="selectedSort" 
          :append-icon='mdi-plus'
          :items="sortingList" 
          item-value="id" 
          item-text="name" 
          label="sorting"
          :menu-props="dropdownProp">
            <v-icon slot="append" small color="#1b4546">$down</v-icon>
          </v-select>
      </div>
      <v-btn-toggle
          v-model="selectedCatergory"
          class="ml-8"
          dense tile group mandatory
        >
          <v-btn v-for="catergory in catergories" :key="catergory.id" :value="catergory.id">
            {{catergory.name}}
          </v-btn>
      </v-btn-toggle>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Emit } from 'vue-property-decorator';
import { HomeModule } from '@/store/modules/home';
import CategoryApi from '@/api/category';

@Component
export default class HomeMenuBar extends Vue {
  public dropdownProp = { 'content-class' : 'sort-dropdown-menu' };
  public catergories: any = [];
  public sortingList: any = [];
  
  public async created(){
    this.catergories = await CategoryApi.getCategory();
    this.sortingList = await CategoryApi.getSorting();

    const query = { ...this.$route.query };

    this.restoreStoreFromQuery(query);
    this.restoreQueryStringFromStore(query);
    this.filterUpdated();
  }
  
  get selectedCatergory() {
    return HomeModule.selectedCategory;
  }

  set selectedCatergory(id) {
    HomeModule.selectCategory(id);
    this.filterUpdated();
  }

  get selectedSort(): any {
    return HomeModule.selectedSorting;
  }
  
  set selectedSort(id) {
    HomeModule.selectSorting(id);
    this.filterUpdated();
  }

  @Watch('selectedSort')
  onSelectedSortChanged(val: any, oldVal: any) {
    const selected = this.sortingList.find((x: any) => x.id == val);
    const query = { ...this.$route.query };
    query.s = selected.slug;

    this.$router.push({ name: 'Home', query }).catch(() => {});
  }

  @Watch('selectedCatergory')
  onSelectedCatergoryrChanged(val: any, oldVal: any) {
    const selected = this.catergories.find((x: any) => x.id == val);
    const query = { ...this.$route.query };
    query.c = selected.slug;

    this.$router.push({ name: 'Home', query }).catch(() => {});
  }

  private restoreQueryStringFromStore(query: { [x: string]: string|(string|null)[]; }) {
    if(!query.c||!query.s) {
      this.onSelectedCatergoryrChanged(this.selectedCatergory,this.selectedCatergory);
      this.onSelectedSortChanged(this.selectedSort,this.selectedSort);
    }
  }

  private restoreStoreFromQuery(query: { [x: string]: string|(string|null)[]; }) {
    if(!!query.c) {
      const cat=this.catergories.find((x: any) => x.slug==query.c);
      this.selectedCatergory=cat.id;
    }
    
    if(!!query.s) {
      const sort=this.sortingList.find((x: any) => x.slug==query.s);
      this.selectedSort=sort.id;
    }
  }

  @Emit()
  private filterUpdated(){}

}
</script>

<style scoped lang="scss" src="./HomeMenuBar.scss"></style>
