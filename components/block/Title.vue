<template>
  <h3 class="title">
    <slot />
  </h3>
</template>
<style lang="scss" scoped>
.title {
  font-size: 60px;
  margin: 0 0 80px;
  line-height: 1.4;
  font-family: $font-rich;

  @include sp {
    font-size: 54px;
    line-height: 1.2;
  }
}
</style>