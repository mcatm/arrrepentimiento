<template>
  <ul v-if="isList">
    <li v-for="(value, i) of values" :key="`list-${i}-${value.length}`" v-html="value" />
  </ul>
</template>
<script setup lang="ts">
import { TextLineList } from '~~/types/text';

const props = defineProps<{
  line: TextLineList;
}>();

const line = computed(() => props.line);

const isList = computed(() => typeof line.value !== 'string' && line.value.type === 'list');
const values = computed(() => line.value.values || []);

</script>