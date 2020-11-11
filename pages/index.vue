<template>
  <div class="l-main">
    <div class="l-hero">
      <h1 class="title">Arrrepentimiento</h1>
    </div>
    <ul class="list">
      <li
        v-for="(post, i) of posts"
        :key="i"
      >
        <h3>
          <nuxt-link :to="{ name: 'post-id', params: { id: post.sys.id } }">{{ post.fields.title }}</nuxt-link>
          <!-- <small v-if="post.fields.subtitle">{{ post.fields.subtitle }}</small> -->
        </h3>
        <!-- <p class="img img-right img-small" v-if="post.fields.media"><img :src=post.fields.media.fields.file.url></p>
        <span v-html="renderText(post.fields.body)" v-if="typeof post.fields.body === 'object'"></span> -->
        <!-- <span v-html="post.fields.body" v-if="typeof post.fields.body === 'string'"></span> -->
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { createClient } from '~/plugins/contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Document } from '@contentful/rich-text-types'

interface Entry {}

interface Response {
  items: Array<Entry>
}

const contentful = createClient()

export default {
  async asyncData() {
    
    const res: Response = await contentful
      .getEntries({
        limit: 200,
        content_type: 'post',
        order: '-sys.createdAt'
      });

    return {
      posts: res.items.map( item => {
        // if( item.fields.media ) {
        //   contentful.getAsset(item.fields.media.sys.id)
        //     .then( asset => item.image = asset.fields )
        //     .catch(console.error)
        // }
        return item
      })
    }
  },
  data() {
    return {
      posts: []
    }
  },
  methods: {
    renderText(contents: Document) {
      return documentToHtmlString(contents);
    }
  }
}
</script>

<style lang="scss" scoped>

.title {
  margin: 160px 0 300px;
  font-size: 64px;
  text-align: left;
  font-family: $font-rich;
  // text-align: justify;
  // text-justify: auto;
  @include sp {
    margin: 80px 0 30px;
    font-size: 30px;
  }
}

p {
  margin-bottom: 20px;
}

img {
  max-width: 30%;
}

ul {
  padding: 0;
  > li {
    list-style: none;
    padding: 12px 0;
    border-top: 1px solid #666;
    h3 {
      font-size: 40px;
      line-height: 1.4;
      font-family: $font-rich;
      > a {
        text-decoration: none;
        &:hover {
          color: $color-yellow;
        }
      }
      @include sp {
        font-size: 32px;
        line-height: 1.3;
      }
    }
    p {
      margin-bottom: 0;
    }
    @include sp {
      padding: 8px 0;
    }
  }
}
</style>
