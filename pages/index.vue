<template>
<div class="l-content">
  <div class="l-content-inner">
    <ul class="list">
      <ListItem
        v-for="(post, i) of posts"
        :key="i"
        :post="post"
      />
    </ul>
  </div>
</div>
</template>

<script>
import ListItem from '~/components/ListItem'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  components: {
    ListItem
  },
  asyncData({ env, params }) {
    return client
      .getEntries({
        limit: 20,
        content_type: 'post',
        order: '-sys.createdAt'
      })
      .then(entries => {
        return {
          posts: entries.items.map( item => {
            if( item.fields.media ) {
              client.getAsset(item.fields.media.sys.id)
                .then( asset => item.image = asset.fields )
                .catch(console.error)
            }
            return item
          })
        }
      })
      .catch(console.error)
  },
  data() {
    return {
      posts: []
    }
  },
  created() {
    console.log(this.posts)
  }
}
</script>
