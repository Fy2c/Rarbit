import { Module, VuexModule, Mutation, Action, getModule } from "vuex-module-decorators";
import ShowApi from '@/api/shows';
import store from "@/store";

@Module({
  dynamic: true,
  store: store,
  namespaced: true,
  name: "home"
})

class Home extends VuexModule {

  //#region catrgory
  public catergories: any = [
    { id: 0, name: "Everything", slug: "everything" },
    { id: 1, name: "Documentary", slug: "documentary" },
    { id: 2, name: "Comedy", slug: "comedy" },
    { id: 3, name: "News", slug: "news" },
    { id: 4, name: "Music", slug: "music" },
    { id: 5, name: "Drama", slug: "drama" },
    { id: 6, name: "Cooking", slug: "cooking" },
    { id: 7, name: "History", slug: "history" }

  ]

  public selectedCategory: number = 0;

  @Mutation
  updateSelectedCategory(id: number) {
    this.selectedCategory = id;
  }

  @Action
  selectCategory(id: number) {
    this.updateSelectedCategory(id);
  }
  //#endregion
  
  //#region sorting
  public selectedSorting: number = 0;

  public sorting: any = [
    { id: 0, name: "Popular", slug: "popular" },
    { id: 1, name: "Recently", slug: "recently" }
  ];

  @Mutation
  updateSelectedSort(id: number) {
    this.selectedSorting = id;
  }
  @Action
  selectSorting(id: number) {
    this.updateSelectedSort(id);
  }
  //#endregion

  //#region shows
  public showsList = [];
  
  @Mutation
  updateShowList(list: any) {
    console.log(list);
    this.showsList = list;
  }
  
  @Action
  getShowList() {
    let list = ShowApi.getShowList(
      this.selectCategory, 
      this.selectSorting,
      { limit: 20, page: 0 }
    );
      
    this.updateShowList(list);
  }
  //#endregion
}

export const HomeModule = getModule(Home);
