<template>
  <div class="main">
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.main {
  margin: 0 auto;
  width: 80%;
  padding: 0;
  // padding: 0 $width-gutter;
  max-width: $width-main-l;

  @include sp {
    width: 90%;
    // padding: 0 ($width-gutter / 2);
  }
}
</style>