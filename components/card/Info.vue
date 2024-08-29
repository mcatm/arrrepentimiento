<template>
  <ul class="info" v-if="info.length > 0">
    <li v-for="{ label, value, url, isBold } of info">
      <span class="label">{{ label }}:</span>
      <a :href="url" v-if="url" target="_blank">
        <strong v-if="isBold">{{ value }}</strong>
        <span v-else>{{ value }}</span>
      </a>
      <strong v-else-if="isBold">{{ value }}</strong>
      <span v-else>{{ value }}</span>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { Info } from "~~/types/post";

const props = defineProps<{
  info: Info[];
}>();

const info = computed(() => props.info || []);
</script>
<style lang="scss" scoped>
.info {
  font-size: 1.1rem;
  margin: 0;
  padding: 0;
  margin: 0 0 20px;

  & > li {
    margin-right: 10px;
    list-style: none;
    padding: 0;
    // font-weight: 800;
    > .label {
      font-size: 0.8rem;
      min-width: 30px;
      margin-right: 12px;
      display: inline-block;
      font-weight: 400;
    }
    > strong {
      font-weight: 800;
    }
  }
}
</style>
