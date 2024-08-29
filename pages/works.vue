<template>
  <BlockMain>
    <OrganismHeading />
    <BlockTitle>Works</BlockTitle>
    <OrganismWorkList />
  </BlockMain>
</template>
<script lang="ts" setup>
import { useHtmlHeader } from "~~/composables/utils/useHtmlHeader";

useHtmlHeader({
  title: "Works",
});
</script>
