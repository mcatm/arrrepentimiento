<template>
  <li class="list-item">
    <h3>{{ title }}</h3>
    <span v-html="body"></span>
  </li>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: {}
    },
    title: {
      type: String,
      default: ''
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

.list-border {
  width: 100%;
  height: 40px;
  margin-bottom: 30px;
}

.list-border:before {
  content: '';
  display: block;
  width: 100%;
  max-width: 420px;
  height: 40px;
  /*background: url(~/assets/img/border.png) no-repeat 0 0;*/
  background-size: contain;
}
</style>