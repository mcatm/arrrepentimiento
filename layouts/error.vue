<template>
  <div class="l-main">
    <div class="heading">
      <h1 class="code">{{ error.statusCode }}</h1>
      <p>An error occurred.</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    error: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
<style lang="scss" scoped>

.heading {
  padding: 120px 0 80px;

  .code {
    font-family: $font-rich;
    margin: 0;
    padding: 0 0 5px;
    font-size: 5rem;
    line-height: 1;
  }

  p {
    margin: 0;
  }
}

</style>