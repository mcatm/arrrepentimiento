<template>
  <BlockHeading>
    <p class="brand">
      <nuxt-link to="/">Arrrepentimiento</nuxt-link>
    </p>
  </BlockHeading>
</template>
<style lang="scss" scoped>
.brand {
  margin: 0;

  a,
  a:visited {
    color: $color-yellow;
    text-decoration: none;
  }

  a:hover {
    color: $color-red;
    text-decoration: underline;
  }
}
</style>