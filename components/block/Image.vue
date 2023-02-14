<template>
  <div class="image">
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.image {
  width: 100%;

  :deep(>img) {
    max-width: 100%;
    display: block;
    line-height: 1;
    margin: 0 auto;
  }
}
</style>