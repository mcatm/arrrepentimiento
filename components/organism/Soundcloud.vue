<template>
  <div class="video">
    <iframe
      width="100%"
      height="450"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      :src="src"
    />
  </div>
</template>
<script setup lang="ts">
import { TextLineSoundcloud } from "~~/types/text";

const props = defineProps<{
  line: TextLineSoundcloud;
}>();

const src = computed(() => props.line.src);
</script>
<style lang="scss" scoped>
.video {
  position: relative;
  display: block;
  width: 100%;
  padding-top: 56.25%;

  > iframe {
    position: absolute;
    top: 0;
    right: 0;
    width: 100% !important;
    height: 100% !important;
  }
}
</style>
