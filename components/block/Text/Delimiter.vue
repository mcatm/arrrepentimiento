<template>
  <template v-if="isDelimiter">
    <hr />
  </template>
</template>
<script setup lang="ts">
import { TextLineDelimiter } from '~~/types/text';

const props = defineProps<{
  line: TextLineDelimiter;
}>();

const line = computed(() => props.line);

const isDelimiter = computed(() => typeof line.value !== 'string' && line.value.type === 'delimiter');

</script>