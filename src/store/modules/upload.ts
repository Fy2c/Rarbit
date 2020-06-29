import { Module, VuexModule, Mutation, Action, getModule } from "vuex-module-decorators";
import store from "@/store";

@Module({
    dynamic: true,
    store: store,
    namespaced: true,
    name: "upload"
})



class Upload extends VuexModule { 

    private defaultValue = {
        title: '',
        description:'',
        category: null,
        file: null
    };

    public formData: any = { ...this.defaultValue };

    @Mutation
    updateFileFormData(file: any){
        this.formData.file = file;
    }

    @Mutation
    updateFormData(formData: any){
        this.formData = formData;
    }

    @Action
    addFileToFormData(file: any) {
        this.updateFileFormData(file);
    }

    @Action
    clearFormData() {
        this.updateFormData({ ...this.defaultValue });
    }
}

export const UploadModule = getModule(Upload);
