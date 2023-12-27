<template>
  <template v-if="isImage">
    <p><img :src="(line.value)" /></p>
  </template>
</template>
<script setup lang="ts">
import { TextLineImage } from '~~/types/text';

const props = defineProps<{
  line: TextLineImage;
}>();

const line = computed(() => props.line);

const isImage = computed(() => typeof line.value !== 'string' && line.value.type === 'image');

</script>