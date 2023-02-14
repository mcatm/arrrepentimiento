<template>
  <div v-if="track">
    <small>{{ track.number || i + 1 }}</small> {{ track }}
  </div>
</template>
<script lang="ts" setup>
import { Song } from '~~/types/song';

const props = defineProps<{
  track: Song;
  i: number;
}>();

const track = computed(() => props.track || undefined);
const i = computed(() => props.i || 0);

</script>
