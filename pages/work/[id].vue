<template>
  <BlockMain>
    <OrganismHeading />
    <OrganismWorkDetail :work="work" />
    <OrganismWorkList :excerpt-ids="[route.params.id as string]" />
  </BlockMain>
</template>
<script lang="ts" setup>
import { useWork } from '~~/composables/data/useWork';
import { useHtmlHeader } from '~~/composables/utils/useHtmlHeader';

const route = useRoute();

const work = computed(() => {
  const work = useWork(route.params.id as string);
  if (!work) {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
  }

  useHtmlHeader({
    title: work.title,
  });

  return work;
});

</script>
