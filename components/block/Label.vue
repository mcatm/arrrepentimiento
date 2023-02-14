<template>
  <h3 class="label">
    <slot />
  </h3>
</template>
<style lang="scss" scoped>
.label {
  margin: 0;
  padding: 0 0 10px;
  font-family: $font-rich;
  font-size: 1.1rem;
  color: $color-gray;
}
</style>