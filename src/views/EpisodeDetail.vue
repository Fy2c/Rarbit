<template>
    <div>
        <NavSubMenuBar class="d-lg-block d-xl-block d-md-block d-none"></NavSubMenuBar>
        <div class="d-lg-block d-xl-block d-md-block d-none" style="margin-bottom: 100px;"></div>
        <div style="margin-top:60px;">
            <div class="container pt-6">
                <div class="col-md-7">
                    <video-player :options="videoOptions"></video-player>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

import VideoPlayer from '@/components/video_player.vue'
import NavSubMenuBar from '@/components/Menu/NavSubMenuBar/NavSubMenuBar.vue'
import EpisodeModel from '../models/EpisodeModel'

    @Component({
      components: {
        NavSubMenuBar,
        VideoPlayer
      }
    })
export default class EpisodeDetail extends Vue {
        show: any;
        episode: EpisodeModel;
        videoOptions = {
          techOrder: ['html5', 'flash'],
          sourceOrder: true,
          flash: {
            hls: { withCredentials: false }
          },
          html5: { hls: { withCredentials: false } },
          sources: [{
            type: 'video/mp4',
            src: 'https://vjs.zencdn.net/v/oceans.mp4'
          }],
          autoplay: false,
          controls: true,
          width: '700',
          height: '394'
        };

        constructor () {
          super()
          this.show = {
              author: 'Anais Fleming', 
              title: 'My Life is a Journey - Love and Piece',
              slug:'my_life_is_a_journey', 
              poster:'/assets/movies/movie-02.png'
            }

          this.episode =
                new EpisodeModel(this.show.Author, 'Space - A final frontier', 1, this.show.Slug,
                  '/assets/episodes/episode-01.png', 20, this.show.Id)
          window.scrollTo(0, 0)
        }
}
</script>

<style>

</style>
