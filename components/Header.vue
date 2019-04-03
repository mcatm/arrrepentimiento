<template>
  <header class="l-header">
    <div class="brand">
      <h1 class="brand-name">
        <router-link to="/"><img src="~/assets/img/brand.png" alt="Arrepentimiento" title="Arrepentimiento - the Music collective"></router-link>
      </h1>
    </div>
  </header>
</template>

<style scoped>

.brand {
  /*width: calc(100% - #{$width-gutter});*/
  max-width: 680px;
  background-size: cover;
  padding-top: 60px;
  margin: auto;
}

.brand-name {
  max-width: 480px;
  position: relative;
  width: 100%;
}

.brand-name img {
  width: 100%;
  height: auto;
}

</style>