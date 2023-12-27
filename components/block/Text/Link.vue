<template>
  <template v-if="isLink">
    <p><a :href="line.src" :target="target">{{ label }}</a></p>
  </template>
</template>
<script setup lang="ts">
import { TextLineLink } from '~~/types/text';

const props = defineProps<{
  line: TextLineLink;
}>();

const line = computed(() => props.line);
const label = computed(() => line.value.label || line.value.src);
const target = computed(() => line.value.target || '_blank');

const isLink = computed(() => typeof line.value !== 'string' && line.value.type === 'link');
</script>