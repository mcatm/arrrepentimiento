<template>
  <div class="l-main">
    <PostDetail :post="post" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { createClient } from '~/plugins/contentful'
// import PostDetail from '~/components/molecules/PostDetail'

interface Params {
  id: string,
}

interface Response {}

const contentful = createClient()

export default Vue.extend({
  async asyncData({ params }) {
    
    const res: Response = await contentful
      .getEntry(params.id);

    return {
      post: res
    }
  },
  data() {
    return {
      post: {}
    }
  }
});
</script>

<style lang="scss" scoped>
</style>
