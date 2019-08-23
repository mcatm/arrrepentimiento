<template>
  <li class="list-item wysiwyg">
    <h3>{{ title }}</h3>
    <span v-html="renderText(body)"></span>
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