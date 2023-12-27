<template>
  <nuxt-link v-if="link" :to="link.to" :target="target">
    {{ label }}<small v-if="caption" class="caption">{{ caption }}</small>
  </nuxt-link>
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

  let string = '';
  const labels = [];

  if (props.link?.sitename) labels.push(props.link?.sitename);
  if (props.link?.label) labels.push(props.link.label);

  string = labels.join(' - ');

  if (!string) string = props.link.to;

  return string;
});
const caption = computed(() => link.value?.caption || undefined);
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
});
const isExternal = computed(() => link.value?.to.match(/^http/));
const target = computed(() => isExternal.value ? '_blank' : '_self');

</script>
<style lang="scss" scoped>
.icon {
  margin-right: 15px;
}

a {
  text-decoration: none;
  color: $color-yellow;

  &:hover {
    color: $color-red;
  }
}

.caption {
  font-family: $font-normal;
  font-size: 12px;
}
</style>