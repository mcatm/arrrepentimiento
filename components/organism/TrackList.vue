<template>
  <ol v-if="tracks" class="tracks">
    <li v-for="(track, i) of tracks" :key="`track-${i}`">
      <span v-if="typeof track == 'string'"><small>{{ i + 1 }}.</small> {{ track }}</span>
      <CardTrack v-else :track="track" :i="i" />
    </li>
  </ol>
</template>
<script lang="ts" setup>
import { Track } from '~~/types/track';

const props = defineProps<{
  tracks: Track[];
}>();

const tracks = computed(() => props.tracks || undefined);
</script>
<style lang="scss" scoped>
.tracks {
  list-style: none;
  padding: 0;
  border-right: solid 1px $color-yellow;
  border-left: solid 1px $color-yellow;
  border-bottom: solid 1px $color-yellow;

  >li {
    padding: 12px 12px 12px 24px;
    border-top: solid 1px $color-yellow;
    font-size: 20px;

    >small {
      font-size: 0.6em;
    }
  }
}
</style>