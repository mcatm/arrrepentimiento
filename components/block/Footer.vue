<template>
  <div class="footer">
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.footer {
  padding: 120px 0 80px;
  margin: 0 auto;
  width: 80%;
  // padding: 0 $width-gutter;
  max-width: $width-main-l;

  @include sp {
    width: 90%;
    // padding: 0 ($width-gutter / 2);
  }
}
</style>