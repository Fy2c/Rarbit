import { Module, VuexModule, Mutation, Action, getModule } from "vuex-module-decorators";
import store from "@/store";

@Module({
  dynamic: true,
  store: store,
  namespaced: true,
  name: "home"
})

class Home extends VuexModule {

  //#region catrgory
  public selectedCategory: string = "-1";

  @Mutation
  updateSelectedCategory(id: string) {
    this.selectedCategory = id;
  }

  @Action
  selectCategory(id: string) {
    this.updateSelectedCategory(id);
  }
  //#endregion
  
  //#region sorting
  public selectedSorting: number = 0;

  public sorting: any = [
    { name: "Popular", id: 0 },
    { name: "Recently", id: 1 }
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

}

export const HomeModule = getModule(Home);
