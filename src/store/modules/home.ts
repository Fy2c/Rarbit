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
        this.showsList = list;
    }
  
    @Action
    getShowList() {
        const category = this.selectedCategory;
        const sorting = this.selectedSorting;
        const pagenation = { limit: 20, page: 0 };

        let list = ShowApi.getShowList(category, sorting, pagenation);
        this.updateShowList(list);
    }
    //#endregion
}

export const HomeModule = getModule(Home);
