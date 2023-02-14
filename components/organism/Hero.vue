<template>
  <BlockHero>
    <h1 class="title">Arrrepentimiento</h1>
    <ul class="menu">
      <li v-for="link of links" :key="link.url">
        <a :href="link.url" target="_blank">{{ link.label }}</a>
      </li>
    </ul>
    <BlockImage>
      <img src="~/assets/images/collages/001.jpg" />
    </BlockImage>
  </BlockHero>
</template>
<script lang="ts" setup>
import { externalLinks as links } from '~/resources/links';
</script>
<style lang="scss" scoped>
.title {
  font-size: 64px;
  text-align: left;
  font-family: $font-rich;
  margin: 0;

  @include sp {
    font-size: 32px;
  }
}

.menu {
  padding: 0;
  margin: 0 0 80px;
  font-family: $font-rich;
  display: flex;

  >li {
    list-style: none;
    padding-right: 20px;
    font-size: 1.15rem;
  }

  @include sp {
    flex-direction: column;
  }
}
</style>