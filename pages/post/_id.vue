<template>
<div class="l-content">
  <div class="l-content-inner">
    <PostDetail
      :post="post"
    />
  </div>
</div>
</template>

<script>
import PostDetail from '~/components/PostDetail'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  components: {
    PostDetail
  },
  // props: {
  //   post: {
  //     type: Object,
  //     default: () => ({})
  //   }
  // },
  asyncData({ env, params }) {
    return client
      .getEntry(params.id)
      .then(entry => {
        return {
          post: entry
        }
      })
      .catch(console.error)
  },
  data() {
    return {
    }
  }
}
</script>
