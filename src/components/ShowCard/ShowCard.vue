<template>
    <v-card 
        class="movie-poster-card mx-5 mb-9 px-2 py-2" 
        width="200px" 
        color="#212121" 
        style="background:none;"
    >
    <div v-on:click="select($event)">
        <div style="position: relative;">
            <v-img class="movie-poster-img" :src="show.poster"></v-img>
            <div class="overlay">
                <v-icon small></v-icon>
                <v-icon large class="my-auto mx-auto">$playCircle</v-icon>
            </div>
        </div>
        <div class="mt-3">
            <span><h4 style="line-height:normal;">{{show.title}}</h4></span>
        </div>
        <div class="mt-1">
            <span style="color:#58c4c7;"><h5 style="font-weight:700;">{{show.author}}</h5></span>
        </div>
    </div>
    <v-card-actions v-if="editable" class="edit-action">
        <v-btn v-on:click="onClickEdit">Edit</v-btn>
        <v-btn>Delete</v-btn>
    </v-card-actions>
    </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class ShowCard extends Vue {
    @Prop({ required: true })
    show!: any;

    @Prop({ required: false })
    editable: any;

    constructor () {
      super()
    }

    select (event: any) {
      event.target.blur();
      this.$router.push('/show/' + this.show.slug);
      
    }

    onClickEdit(){

    }
}
</script>

<style scoped lang="scss" src="./ShowCard.scss"></style>
