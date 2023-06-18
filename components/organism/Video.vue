<template>
  <div class="video">
    <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${video.id}`" :title="video.title || `video`"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen />
  </div>
</template>
<script setup lang="ts">
import { Video } from '~~/types/video';

const props = defineProps<{
  video: Video
}>();

const video = computed(() => props.video);

</script>
<style lang="scss" scoped>
.video {
  position: relative;
  display: block;
  width: 100%;
  padding-top: 56.25%;

  >iframe {
    position: absolute;
    top: 0;
    right: 0;
    width: 100% !important;
    height: 100% !important;
  }
}
</style>