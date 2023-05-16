<template>
  <template v-for="line of lines">
    <p v-if="isParagraph(line)" v-html="line" />
    <h2 v-if="typeof line !== 'string' && isHeading(line)" v-html="line?.value" />
  </template>
</template>
<script setup lang="ts">
import { TextLine } from '~~/types/text';

const props = defineProps<{
  // id: string;
  lines: TextLine[];
}>();

const lines = computed(() => props.lines || []);
// const id = computed(() => props.id || '');

const isParagraph = (line: TextLine) => typeof line === 'string' || line.type === 'paragraph';
const isHeading = (line: TextLine) => typeof line !== 'string' && (line) && line?.type === 'heading';

const paragraph = (line: TextLine) => {
  if (typeof line === 'string') return `<p>${line}</p>`;

  switch (line.type) {
    case 'heading':
      return `<h2>${line}</h2>`;
    case 'paragraph':
    default:
      return `<p>${line}</p>`;
  }
}

</script>