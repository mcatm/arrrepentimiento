<template>
  <div class="l-container">
    <BackButton />
    <Nuxt />
    <Footer />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Footer from '~/components/molecules/Footer.vue'
import BackButton from '~/components/atoms/BackButton.vue'
export default Vue.extend({
  components: {
    BackButton,
    Footer,
  },
})
</script>