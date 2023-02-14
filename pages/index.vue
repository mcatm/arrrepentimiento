<template>
  <div>
    <BlockMain>
      <OrganismHero />
      <!-- <BannerBirthOfSignificance /> -->
      <BlockLabel>Latest Works</BlockLabel>
      <OrganismWorkList :isPickedOnly="true" />
    </BlockMain>
  </div>
</template>
<script lang="ts" setup>
import { useHtmlHeader } from '~~/composables/utils/useHtmlHeader';

useHtmlHeader();

</script>
