import { Module, VuexModule, Mutation, Action, getModule } from "vuex-module-decorators";
import store from "@/store";

@Module({
    dynamic: true,
    store: store,
    namespaced: true,
    name: "upload"
})

class Upload extends VuexModule { 
    public fromData: any = {};

    @Mutation
    setImage(id: string) {
    }
}

export const UploadModule = getModule(Upload);