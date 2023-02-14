<template>
  <ul class="list">
    <li v-for="(work, i) of works" :key="`work-${i}-${work.id}`">
      <nuxt-link v-if="work.to" :to="work.to">
        <CardWork :work="work" />
      </nuxt-link>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { useWorks } from '~~/composables/data/useWorks';

const props = defineProps<{
  isPickedOnly?: boolean;
  excerptIds?: string[];
}>();

const works = useWorks().filter(work => (!props.excerptIds || !props.excerptIds.includes(work.id)) && (!props.isPickedOnly || work.isPicked));
</script>
<style lang="scss" scoped>
.list {
  padding: 0;
  margin: 0 0 30px;

  >li {
    border-bottom: 1px solid $color-gray;
    list-style: none;
    padding: 0;

    >a {
      text-decoration: none;
      display: block;
    }

    &:first-child {
      border-top: 1px solid $color-gray;
    }
  }
}
</style>