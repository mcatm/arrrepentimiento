<template>
  <li class="list-item wysiwyg">
    <h3>{{ title }}<small v-if="subtitle">{{ subtitle }}</small></h3>
    <span v-html="renderText(body)" v-if="typeof body === 'object'"></span>
    <span v-html="body" v-if="typeof body === 'string'"></span>
  </li>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export default {
  props: {
    post: {
      type: Object,
      default: {}
    },
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
    }
  },
  methods: {
    renderText: (obj) => {
      return documentToHtmlString(obj)
    }
  }
}
</script>

<style scoped>
.list {
  > li {
    clear: both;
  }
}

.list-item {
  margin-bottom: 30px;

  &:last-child { border: none }

  /*@include wysiwyg;*/
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

.list-item:after {
  content: '';
  display: block;
  width: 100%;
  max-width: 420px;
  height: 40px;
  background: url(~assets/img/border.png) no-repeat 0 0;
  background-size: contain;
}
</style>