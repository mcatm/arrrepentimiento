<template>
  <article>
    <h3 class="title">
      {{ post.fields.title }}
      <small v-if="post.fields.subtitle">{{ post.fields.subtitle }}</small>
    </h3>
    <p class="img img-right img-small" v-if="post.fields.media"><img :src=post.fields.media.fields.file.url></p>
    <div v-html="renderText(post.fields.body)" v-if="typeof post.fields.body === 'object'" class="l-article"></div>
    <!-- <span v-html="post.fields.body" v-if="typeof post.fields.body === 'string'"></span> -->
  </article>
</template>
<script lang="ts">
import { Document } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
export default {
  props: {
    post: Object,
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
  font-size: 40px;
  font-family: $font-rich;
  text-align: left;
  line-height: 1.4;
  margin: 0;
  padding: 0 0 40px;
  // text-align: justify;
  // text-justify: auto;
  > small {
    display: block;
    font-size: .72em;
  }
  @include sp {
    line-height: 1.3;
  }
}

.img {
  margin: 0 0 20px;
  padding: 0;
  img {
    max-width: 45%;
  }
}

</style>
