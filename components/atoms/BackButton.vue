<template>
  <div v-if="this.$route.path !== '/'" class="container">
    <button @click="back()">Back</button>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    back() {
      this.$router.back()
    },
  },
})
</script>
<style lang="scss" scoped>
.container {
  position: fixed;
  top: 0;
  right: 20px;

  > button {
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