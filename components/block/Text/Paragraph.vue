<template>
  <template v-if="isParagraph">
    <p v-if="tag === 'p'" v-html="value" />
    <h2 v-if="tag === 'h2'" v-html="value" />
    <h4 v-if="tag === 'h4'" v-html="value" />
  </template>
</template>
<script setup lang="ts">
import { TextLineParagraph } from '~~/types/text';

const props = defineProps<{
  line: TextLineParagraph;
}>();

const line = computed(() => props.line);

const isParagraph = computed(() => line.value && (typeof line.value === 'string' || ['paragraph', 'heading', 'subheading'].includes(line.value.type)));

const tag = computed(() => {
  if (typeof line.value === 'string') return 'p';
  if (line.value.type === 'heading') return 'h2';
  if (line.value.type === 'subheading') return 'h4';
  return 'p';
});
const value = computed(() => {
  return typeof line.value === 'string' ? line.value : line.value.value;
});
</script>