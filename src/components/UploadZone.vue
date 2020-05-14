<template>
    <div :id="id" ref="dropzoneElement" class="vue-dropzone dropzone">
        <div class="dz-default dz-message">
            <h3>Drop files here to upload</h3>
        </div>
    </div>
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
            thumbnailWidth: 200,
            thumbnailHeight: 200
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
.dropzone {
    width:100%;
    min-height:200px;
    flex: none;
    border: 2px dotted #fff;
    background: transparent;
    padding: 20px;
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