<template>
  <ul class="list">
    <li v-for="(post, i) of posts" :key="`post-${i}-${post.id}`">
      <nuxt-link v-if="post.to" :to="post.to">
        <CardPost :post="post" />
      </nuxt-link>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { usePosts } from "~~/composables/data/usePosts";
import { PostCategory } from "~~/types/post";

const props = defineProps<{
  isPickedOnly?: boolean;
  filterCategory?: PostCategory;
  excerptIds?: string[];
}>();

const posts = usePosts().filter(
  (post) =>
    (!props.excerptIds || !props.excerptIds.includes(post.id)) &&
    (!props.isPickedOnly || post.isPicked) &&
    (!props.filterCategory || post.categories.includes(props?.filterCategory))
);
</script>
<style lang="scss" scoped>
.list {
  padding: 0;
  margin: 0 0 30px;

  > li {
    border-bottom: 1px solid $color-gray;
    list-style: none;
    padding: 0;

    > a {
      text-decoration: none;
      display: block;
      color: $color-yellow;
      &:hover {
        color: $color-red;
      }
    }

    &:first-child {
      border-top: 1px solid $color-gray;
    }
  }
}
</style>
