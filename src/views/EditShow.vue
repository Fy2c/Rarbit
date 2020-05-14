<template>
    <div>
        <NavSubMenuBar class="d-lg-block d-xl-block d-md-block d-none"></NavSubMenuBar>
        <div class="d-lg-block d-xl-block d-md-block d-none" style="margin-bottom: 100px;"></div>
        <div style="margin-top: 60px;">
            <div class="container pt-12">
                <div class="row" style="justify-content: center!important;">
                    <div class="col-lg-2 col-md-2 col-sm-2 d-lg-block d-xl-block d-sm-block d-none">
                        <UploadZone :options="dropzoneOptions"></UploadZone>
                    </div>
                    <div class="col-12 col-md-5 col-sm-8">
                            test
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import NavSubMenuBar from '@/components/Menu/NavSubMenuBar/NavSubMenuBar.vue'
import UploadZone from '@/components/UploadZone.vue'
import ShowModel from '../models/ShowModel'
import VueDropzone from 'dropzone'

    @Component({
      components: {
        NavSubMenuBar,
        UploadZone
      }
    })
    export default class EpisodeDetail extends Vue {
        public dropzoneOptions = {
          url: 'https://httpbin.org/post',
          thumbnailWidth: 150,
          headers: { "My-Awesome-Header": "header value" }
        }
    }
</script>

