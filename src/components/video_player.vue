<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

import 'video.js/dist/video-js.css';

import _videojs from 'video.js';
const videojs = (window as any).videojs || _videojs;
import 'videojs-flash'; 

@Component({
  name: 'video-player',
})
export default class VideoPlayer extends Vue {

  @Prop({ type: Object, default: () => {}}) private options!: object;

  private mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady() {

    });
  }

  private beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }

  private player: any;
}

</script>

<template>
<div class="module_video_player">
  <video ref="videoPlayer" poster="/assets/thumbnail.png" class="video-js"></video>
</div>
</template>

<style>
.video-js .vjs-big-play-button{
  top: 50%;
  left: 50%;
  margin: -1.5em 0 0 -1.5em;
}

.module_video_player, .video-js, .vjs-tech {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

::selection {
    background-color: transparent !important;
}
</style>