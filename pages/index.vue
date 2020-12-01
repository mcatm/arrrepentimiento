<template>
  <div>
    <div class="l-main">
      <Hero />
      <Notification />
      <h2 class="heading">Something New</h2>
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
      <div class="footer">
        <nuxt-link to="/posts">More</nuxt-link>
      </div>
    </div>
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
        limit: 5,
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

// p {
//   margin-bottom: 20px;
// }

// img {
//   max-width: 30%;
// }

.heading {
  margin: 0;
  padding: 0 0 10px;
  font-family: $font-rich;
  font-size: 1.1rem;
  color: $color-gray;
}

.list {
  padding: 0;
  margin: 0;
  > li {
    list-style: none;
    padding: 0;
    border-bottom: 1px solid $color-gray;
    &:first-child {
      border-top: 1px solid $color-gray;
    }
    h3 {
      font-size: 40px;
      margin: 0;
      line-height: 1.4;
      font-family: $font-rich;
      > a {
        text-decoration: none;
        display: block;
        padding: $width-gutter 0;
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
  }
}

.footer {
  padding: 40px 0 0;
  text-align: left;
  font-family: $font-rich;
  font-size: 1.5rem;
  > a {
    display: inline-block;
    background: $color-red;
    color: $color-black;
    text-decoration: none;
    padding: 11px 76px;
    border: 2px solid $color-red;
    &:hover {
      background-color: transparent;
      border: 2px solid $color-yellow;
      color: $color-yellow;
    }
  }
}
</style>
