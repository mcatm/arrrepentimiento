<template>
  <BlockMain>
    <OrganismHeading />
    <OrganismNoteDetail :note="note" />
    <!-- <OrganismWorkList :excerpt-ids="[route.params.id as string]" /> -->
  </BlockMain>
</template>
<script lang="ts" setup>
import { useNote } from '~~/composables/data/useNote';
import { useHtmlHeader } from '~~/composables/utils/useHtmlHeader';

const route = useRoute();

const note = computed(() => {
  const note = useNote(route.params.id as string);
  if (!note) {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
  }

  useHtmlHeader({
    title: note.title,
  });

  return note;
});

</script>
