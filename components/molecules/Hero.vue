<template>
  <div class="l-hero">
    <h1 class="title">Arrrepentimiento</h1>
    <ul class="menu">
      <li
        v-for="link of links"
        :key="link.url"
      >
        <a :href="link.url" target="_blank">{{ link.label }}</a>
      </li>
    </ul>
    <p class="img">
      <img src="~assets/images/collages/001.jpg" />
    </p>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { externalLinks } from '~/plugins/links';

export default Vue.extend({
  data() {
    return {
      links: externalLinks,
    }
  },
});
</script>
<style lang="scss" scoped>

.title {
  // margin: 160px 0 300px;
  font-size: 64px;
  text-align: left;
  font-family: $font-rich;
  margin: 0;
  @include sp {
    // margin: 80px 0 30px;
    font-size: 32px;
  }
}

.menu {
  padding: 0;
  margin: 0 0 80px;
  font-family: $font-rich;
  display: flex;
  > li {
    list-style: none;
    padding-right: 20px;
    font-size: 1.15rem;
  }
  @include sp {
    flex-direction: column;
  }
}

.img {
  padding: 0;
  margin: 0;
  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
}

</style>