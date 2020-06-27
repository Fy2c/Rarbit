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
          v-model="filter"
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
import { Component, Vue, Watch } from 'vue-property-decorator';
import { HomeModule } from '@/store/modules/home';
import Catergory from '../../../store/modules/catergory';
import { getModule } from 'vuex-module-decorators';

@Component
export default class HomeMenuBar extends Vue {
  public dropdownProp = { 'content-class' : 'sort-dropdown-menu' };
  private catergoryStore: any;

  public created(){
    this.catergoryStore = getModule(Catergory, this.$store);
    const query = { ...this.$route.query };

    if(!!query.categoryFilter){
      const cat = this.catergories.find((x: any) => x.name == query.categoryFilter);
      this.filter = cat.id
    }

    if(!!query.mainFilter){
      const sort = this.sortingList.find((x: any) => x.name == query.mainFilter);
      this.selectedSort = sort.id;
    }
  }
  
  get catergories() {
    const store = this.catergoryStore;
    if(store.cacheMiss){
      store.getCatergories();
    }

    return store.catergories;
  }
  
  get filter(){
    return HomeModule.selectedCategory;
  }

  set filter(id) {
    HomeModule.selectCategory(id);
  }

  get sortingList () {
    return HomeModule.sorting;
  }

  get selectedSort() {
    return HomeModule.selectedSorting;
  }
  
  set selectedSort(id){
    HomeModule.selectSorting(id);
  }

  @Watch('selectedSort')
  onSelectedSortChanged(val: string, oldVal: string) {
    const selected = this.sortingList.find((x: any) => x.id == val);
    const query = { ...this.$route.query };
    query.mainFilter = selected.name;

    this.$router.push({ name: 'Home', query }).catch(() => {});
  }

  @Watch('filter')
  onSelectedFilterChanged(val: string, oldVal: string) {
    const selected = this.catergories.find((x: any) => x.id == val);
    const query = { ...this.$route.query };
    query.categoryFilter = selected.name;

    this.$router.push({ name: 'Home', query }).catch(() => {});
  }
}
</script>

<style scoped lang="scss" src="./HomeMenuBar.scss"></style>
