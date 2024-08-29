<template>
  <BlockMain>
    <OrganismHeading />
    <OrganismPostDetail :post="post" />
    <!-- <OrganismWorkList :excerpt-ids="[route.params.id as string]" /> -->
  </BlockMain>
</template>
<script lang="ts" setup>
import { usePost } from "~~/composables/data/usePost";
import { useHtmlHeader } from "~~/composables/utils/useHtmlHeader";

const route = useRoute();

const post = computed(() => {
  const post = usePost(route.params.id as string);
  if (!post) {
    throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
  }

  useHtmlHeader({
    title: post.title,
  });

  return post;
});
</script>
