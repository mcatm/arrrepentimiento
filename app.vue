<template>
  <div class="container">
    <OrganismHeader />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <OrganismFooter />
  </div>
</template>
<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
}
</style>
