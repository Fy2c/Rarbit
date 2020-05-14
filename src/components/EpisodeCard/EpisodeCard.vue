<template>
    <v-card class="movie-poster-card mx-6 mt-5 mb-12" 
            width="300px" color="#212121" style="background:none;"
            v-on:click="select($event)">
        <div style="position: relative;">
            <v-img style="border-radius: 4px;" :src="episode.Thumbnail"></v-img>
            <div class="overlay">
                <span class="ep-text" style="font-size:small;">Episode {{episode.EpisodeNumber}}</span>
            </div>
        </div>
        <div class="my-2 px-2">
            <h4 class="mt-3" style="color:#d2e8ec;">{{episode.Title}}</h4>
            <h5 class="mt-2" style="font-weight:normal;">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</h5>
        </div>
    </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import EpisodeModel from '../../models/EpisodeModel'
import ShowModel from '../../models/ShowModel'

@Component
export default class EpisodeCard extends Vue {

    @Prop({ type: ShowModel, required: true })
    show!: ShowModel

    @Prop({ type: EpisodeModel, required: true })    
    episode!: EpisodeModel;

    constructor()
    {
        super();
    }

    select(event: any){
        event.target.blur();
        this.$router.push('/episode/' + this.show.Slug +'/' + this.episode.EpisodeNumber);
    }
}
</script>

<style scoped lang="scss" src="./EpisodeCard.scss"></style>