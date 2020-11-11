<template>
  <div class="l-main">
    <PostDetail :post="post" />
  </div>
</template>

<script lang="ts">
import { createClient } from '~/plugins/contentful'
import { Document } from '@contentful/rich-text-types'

import PostDetail from '~/components/molecules/PostDetail'

interface Params {
  id: string,
}

interface Response {}

const contentful = createClient()

export default {
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
}
</script>

<style lang="scss" scoped>
</style>
