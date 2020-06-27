import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import catergories from "@/api/categories";

@Module({
  preserveState: true,
  name: "catergory",
})

export default class Catergory extends VuexModule {
  public catergories: any[] = [];
  
  get cacheMiss() {
    return this.catergories.length <= 0;
  }

  @Mutation
  updateCatergories(c: []) {
    this.catergories = [{id: '-1', name: 'Everything', slug: 'everything'}].concat(c);
  ;}

  @Action
  async getCatergories() {
    var result = (await catergories.getList()).docs.map(x => {
      var d = x.data();
      return { id: x.id, name: d.name, slug: d.slug };
    });

    this.context.commit('updateCatergories', result);
  }

  getCatergoryById(id: string){
    return this.catergories.find(x => x.id == id);
  }
}

