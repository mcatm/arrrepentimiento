<template>
  <li class="list-item wysiwyg">
    <h3>{{ title }}<small v-if="subtitle">{{ subtitle }}</small></h3>
    <p class="img img-right img-small" v-if="image"><img :src=image.file.url></p>
    <span v-html="renderText(body)" v-if="typeof body === 'object'"></span>
    <span v-html="body" v-if="typeof body === 'string'"></span>
    <!-- <div v-if="image" class="list-image" :style="{ backgroundImage: 'url(' + image.file.url + '?w=200)' }"></div> -->
  </li>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export default {
  props: {
    // post: {
    //   type: Object,
    //   default: {}
    // },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    body: {
      type: Object,
      default: {}
    },
    image: {
      type: Object,
      default: null
    }
  },
  methods: {
    renderText: (obj) => {
      return documentToHtmlString(obj)
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  > li {
    clear: both;
  }
}

.list-item {
  margin-bottom: 30px;

  &:last-child { border: none }

  /*@include wysiwyg;*/
  &:after {
    content: '';
    display: block;
    width: 100%;
    max-width: 420px;
    height: 40px;
    background: url(~assets/img/border.png) no-repeat 0 0;
    background-size: contain;
  }

  .list-image {
    width: 120px;
    height: 120px;
    background-size: cover;
    background-position: 50% 50%;
    position: absolute;
    top: 0;
    right: -60px;
    border-radius: 50%;
  }
}

.list-thumbnail {
  width: 100px;

  img {
    max-width: 100%;
    height: auto;
  }
}

/*.list-border {
  width: 100%;
  height: 40px;
  margin-bottom: 30px;
}*/

</style>