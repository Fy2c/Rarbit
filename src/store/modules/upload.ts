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

    @Action
    addMockToFormData(){
        this.updateFormData({
            title: 'My Life is a Journey - Love and Piece',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam aperiam.',
            category: 'documentary',
            poster:'/assets/movies/movie-02.png'
          });
    }
}

export const UploadModule = getModule(Upload);
