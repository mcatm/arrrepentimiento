<template>
  <div class="l-main">
    <header class="heading">
      <p class="brand"><nuxt-link to="/">Arrrepentimiento</nuxt-link></p>
    </header>
    <PostDetail :post="post" />
    <Notification />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { createClient } from '~/plugins/contentful'
import PostDetail from '~/components/molecules/PostDetail.vue'
import Notification from '~/components/molecules/Notification.vue'

type DataType = {
  post: Response
}

interface Params {
  id: string
}

interface Response {
  fields: PostFields
}

interface PostFields {
  title: string
}

const contentful = createClient()

export default Vue.extend({
  components: {
    PostDetail,
    Notification,
  },
  async asyncData({ params }): Promise<DataType> {
    const res: Response = await contentful.getEntry(params.id)

    return {
      post: res,
    }
  },
  data(): DataType {
    return {
      post: {
        fields: {
          title: '',
        },
      },
    }
  },
  head(): any {
    return {
      title: this.post.fields.title,
      meta: [
        // { hid: 'og:title', property: 'og:title', content: this.post.fields.title },
        // { hid: 'twitter:title', name: 'twitter:title', content: this.post.fields.title },
        // { hid: 'description', name: 'description', content: getSummary( this.post.fields.title ) },
        // { hid: 'og:description', property: 'og:description', content: getSummary( this.post.fields.title ) },
        // { hid: 'twitter:description', name: 'twitter:description', content: getSummary( this.post.fields.title ) },
        // { hid: 'og:url', property: 'og:url', content: this.post.sociallink },
        // { hid: 'twitter:url', name: 'twitter:url', content: this.post.sociallink },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.heading {
  font-family: $font-rich;
  font-size: 0.9rem;
  padding: 120px 0 0 0;
  .brand {
    margin: 0;
    a,
    a:visited {
      color: $color-yellow;
      text-decoration: none;
    }
    a:hover {
      color: $color-red;
      text-decoration: underline;
    }
  }
}
</style>
