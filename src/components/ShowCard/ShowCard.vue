<template>
    <v-card v-on:click="select($event)"
    class="movie-poster-card mx-6 mb-9 px-2 py-2" width="165px" color="#212121" style="background:none;">
        <div style="position: relative;">
            <v-img class="movie-poster-img" :src="show.Poster"></v-img>
            <div class="overlay">
                <v-icon large class="my-auto mx-auto">$playCircle</v-icon>
            </div>
        </div>
        <div class="mt-2">
            <span style="color:#d2e8ec;"><h6>{{show.Author}}</h6></span>
        </div>
        <div class="mt-2">
            <span><h5>{{show.Title}}</h5></span>
        </div>
    </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import ShowModel from '../../models/ShowModel'

@Component
export default class ShowCard extends Vue {
    @Prop({ type: ShowModel, required: true })
    show!: ShowModel;

    constructor () {
      super()
    }

    select (event: any) {
      event.target.blur()
      this.$router.push('/show/' + this.show.Slug)
    }
}
</script>

<style scoped lang="scss" src="./ShowCard.scss"></style>
