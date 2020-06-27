<template>
    <form ref="dropzone" class="dropzone custom-dropzone">
        <div :id="id" ref="dropzoneElement" class="vue-dropzone dropzone">
            <div class="dz-default dz-message">
                <div class="upload-icon">
                    <v-icon x-large>$arrowUp</v-icon>
                </div>
                <h3 class="mt-4">Upload a New Poster</h3>
                <h5 class="mt-2" style="font-weight:300;">Click in the button or drag and drop your file here</h5>
                <v-btn tile class="mt-6 btn-attantion" style="color: #fff;">
                    Upload a File
                </v-btn>
            </div>
            <div class="custom-dropzone__clickable-overlay"/>
        </div>
    </form>
</template>

<script lang="ts">
import Dropzone from 'dropzone'
import { DropzoneOptions } from 'dropzone'
import { Component, Prop, Vue } from 'vue-property-decorator'

Dropzone.autoDiscover = false;

@Component
export default class UploadZone extends Vue {

    @Prop({type: Object, required: false})
    public options: any;

    private hasBeenMounted: Boolean = false;
    public dropzone!: Dropzone;

    get dropzoneSettings(): DropzoneOptions{
        let _this = this;
        let defaultValues: any = {
            autoProcessQueue: false,
            resizeQuality: 1,
            resizeWidth: 343,
            resizeHeight: 377,
            thumbnailWidth: 343,
            thumbnailHeight: 377,
            maxThumbnailFilesize: 256,
            maxFiles: 1,
            uploadMultiple: false,
            resizeMethod: 'crop',
        };
        
        Object.keys(_this.options)
              .forEach((key) => {
                    defaultValues[key] = _this.options[key];
              }, _this);
        return defaultValues;
    }

    mounted(){
        if(this.hasBeenMounted) return;

        this.hasBeenMounted = true;
        this.dropzone = new Dropzone(
            this.$refs.dropzoneElement as HTMLElement,
            this.dropzoneSettings
        );
    }

    beforeDestroy() {
        this.dropzone.destroy();
    }
}
</script>

<style scoped>

.upload-icon{
    width: fit-content;
    margin: auto;
}

.custom-dropzone {
    width:100%;
    position:relative;
    display:flex;
    align-items: center;
    justify-content: center;
    background: #58c4c7;
    padding: 20px;
    border-radius: 10px;
}

.custom-dropzone:after {
  content: "";
  display: block;
  padding-bottom: 115%;
}

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

.dz-default {
    cursor: pointer;
    width: 100%;
    text-align: center;
    align-self: center;
    position: relative;
    top: 50%;
    margin-top: -10px;
}


</style>