<template>
    <div class="container pt-6">

        <div class="row" style="justify-content: center!important;">
            <div class="col-lg-2 col-md-2 col-sm-2 d-lg-block d-xl-block d-sm-block d-none">
                <v-img style="border-radius: 8px;" src="/assets/movies/movie-02.png" alt=""></v-img>
            </div>
            <div class=" mr-9 ml-5 d-lg-block d-xl-block d-md-block d-none"></div>
            <div class="col-12 col-md-5 col-sm-8">
                <ul>
                    <li><h5 class="author">Maddox Hebert</h5></li>
                    <li><span class="cat-tag">Documentary</span></li>
                </ul>
                <div style="padding-top: 10px;">
                    <span style="width:275px;display:block;word-wrap:break-word;color:#58c4c7;"><h2>Through the space and universe</h2></span>
                    <span class="mt-2" style="width:450px;display: block;word-wrap:break-word;">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam aperiam.</span>
                    <div style="padding-top: 20px;">
                    <ul>
                        <li>
                            <v-btn tile class="btn-attantion">
                                <v-icon small>$plus</v-icon>
                                Add to list
                            </v-btn>
                        </li>
                        <li class="ml-6">
                            <v-btn tile class="btn-tips">
                                Donation
                            </v-btn>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

    @Component
export default class HomeHero extends Vue {

}
</script>

<style scoped lang="scss" src="./HeroHome.scss"></style>
