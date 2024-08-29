<template>
  <BlockMain>
    <OrganismHero />
    <BlockLabel>News</BlockLabel>
    <OrganismPostList :isPickedOnly="true" />
    <BlockLabel>Latest Works</BlockLabel>
    <OrganismWorkList :isPickedOnly="true" />
  </BlockMain>
</template>
<script lang="ts" setup>
import { useHtmlHeader } from "~~/composables/utils/useHtmlHeader";

useHtmlHeader();
</script>
