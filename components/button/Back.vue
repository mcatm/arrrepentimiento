<template>
  <div v-if="$route.path !== '/'" class="wrapper">
    <button @click="back()">Back</button>
  </div>
</template>
<script lang="ts" setup>
const router = useRouter();
const back = () => router.back();
</script>
<style lang="scss" scoped>
.wrapper {
  position: fixed;
  top: 0;
  right: 20px;

  >button {
    padding: 4px 12px;
    font-size: 1rem;
    font-family: $font-rich;
    border-radius: 0;
    border: 0;
    outline: none;
    background-color: $color-gray;

    &:hover {
      cursor: pointer;
      background-color: $color-yellow;
    }
  }
}
</style>