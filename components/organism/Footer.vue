﻿<template>
  <BlockFooter>
    <OrganismPostList :isPickedOnly="false" />
    <BannerBirthOfSignificance />
    <div class="container">
      <ul class="column internal">
        <li v-for="link of internalLinks" :key="link.url">
          <nuxt-link :to="link.url">{{ link.label }}</nuxt-link>
        </li>
      </ul>
      <ul class="column external">
        <li v-for="link of externalLinks" :key="link.url">
          <a :href="link.url" target="_blank">{{ link.label }}</a>
        </li>
      </ul>
    </div>
  </BlockFooter>
</template>
<script lang="ts" setup>
import { internalLinks, externalLinks } from "~/resources/links";
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  padding-top: 80px;
}

.column {
  padding: 0 50px 0 0;
  margin: 0;

  > li {
    font-family: $font-rich;
    list-style: none;
  }

  &.internal {
    font-size: 1rem;
  }

  &.external {
    font-size: 0.84rem;

    a,
    a:visited {
      color: $color-blue;
    }

    a:hover {
      color: $color-yellow;
    }
  }

  a.nuxt-link-exact-active {
    color: $color-gray;
    text-decoration: none;
  }
}
</style>
