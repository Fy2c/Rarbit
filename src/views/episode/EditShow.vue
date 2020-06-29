<template>
    <div>
        <NavSubMenuBar class="d-lg-block d-xl-block d-md-block d-none"></NavSubMenuBar>
        <div class="d-lg-block d-xl-block d-md-block d-none" style="margin-bottom: 100px;"></div>
        <div style="margin-top: 60px;">
            <div class="container pt-10">
                <div class="row" style="justify-content: center!important;">
                    <div class="col-lg-4 col-md-5" style="padding-left:60px;padding-right:60px;">
                        <UploadZone 
                            :options="dropzoneOptions"
                            @on-added-file="onAddedFile"
                        />
                    </div>
                    <div class="col-lg-6 col-md-7 pl-10">
                        <form class="edit-form">
                            <v-text-field 
                                class="mt-5"
                                v-model="data.title"
                                label="Show Title"
                                placeholder="My awesome episode name"
                                counter=50
                            />
                            <v-textarea 
                                class="mt-4"
                                v-model="data.description"
                                label="Description"
                                placeholder="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis."
                                no-resize
                                rows="4"
                                row-height="2"
                                counter=500
                            />
                            <v-btn 
                                tile 
                                class="mt-8 btn-attantion" 
                                style="color:#fff;float:right;">
                                Create
                            </v-btn>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import NavSubMenuBar from '@/components/Menu/NavSubMenuBar/NavSubMenuBar.vue';
import UploadZone from '@/components/UploadZone.vue';
import CategoryApi from '@/api/category';


@Component({
    components: {
        NavSubMenuBar,
        UploadZone
    }
})

export default class EditEpisode extends Vue {
    public dropdownProp: any = { 'content-class' : 'sort-dropdown-menu' };
    public data: any = {
        title: '',
        description:'',
        category: null
    };

    public dropzoneOptions: any = { 
        url: 'http://dummy.url',
        acceptedFiles: 'image/jpg, image/jpeg, image/png',
    };

    public categoryList: any = [];

    public onAddedFile(file: any) {
        console.log(file);
    }
}
</script>

<style scoped>
.btn-attantion{
    color: #fff !important;
    border: 1px solid #1b4546  !important;
    background-color: #1b4546  !important;
    border-radius: 4px;
    font-weight: normal;
}

.btn-tile{
    background-color: transparent !important;
    border-radius: 4px;
}

.v-btn{
    text-transform: none !important;
    font-weight:700;
}

.edit-form .sort-dropdown{
    margin-top:8px !important;
}

</style>
