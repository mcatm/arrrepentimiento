<template>
  <a v-if="link" :href="link.to" target="_blank">
    <component v-if="icon" :is="icon" /> {{ label }}<small v-if="caption" class="caption">{{ caption }}</small>
  </a>
</template>
<script lang="ts" setup>
import { Link } from '~~/types/link';
import IconBandcamp from "~~/components/icon/Bandcamp.vue";
import IconSpotify from "~~/components/icon/Spotify.vue";
import IconITunes from "~~/components/icon/iTunes.vue";
import IconStore from '~~/components/icon/Store.vue';
import IconExternalLink from '~~/components/icon/ExternalLink.vue';

const props = defineProps<{
  link: Link;
}>();

const link = computed(() => props.link || undefined);
const label = computed(() => {
  if (!props.link) return '';
  if (props.link?.label) return props.link.label;
  switch (props.link?.type) {
    case 'bandcamp':
      return 'Bandcamp';
    case 'spotify':
      return 'Spotify';
    case 'itunes':
      return 'Apple Music';
    case 'other':
    default:
      return 'Other Platform';
  }
});
const caption = computed(() => props.link?.caption || undefined);
const icon = computed(() => {
  if (!props.link || !props.link?.type) return undefined;
  switch (props.link?.type) {
    case 'bandcamp':
      return IconBandcamp;
    case 'spotify':
      return IconSpotify;
    case 'itunes':
      return IconITunes;
    case 'store':
      return IconStore;
  }
  return IconExternalLink;
})

</script>
<style lang="scss" scoped>
.icon {
  margin-right: 15px;
}

a {
  text-decoration: none;
  color: $color-yellow;
}

.caption {
  font-family: $font-normal;
  font-size: 12px;
}
</style>