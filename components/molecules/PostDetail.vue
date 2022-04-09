<template>
  <article>
    <h3 class="title">
      {{ post.fields.title }}
      <small v-if="post.fields.subtitle">{{ post.fields.subtitle }}</small>
    </h3>
    <p v-if="post.fields.media" class="img img-right img-small">
      <img :src="post.fields.media.fields.file.url" />
    </p>
    <div
      v-if="typeof post.fields.body === 'object'"
      class="l-article"
      v-html="content"
    />
  </article>
</template>
<script lang="ts">
import { buildHTML } from '~/plugins/typography'
export default {
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    content(): string {
      return buildHTML(this.$data.post.fields.body)
    },
  },
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
    font-size: 0.72em;
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
