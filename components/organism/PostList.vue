<template>
  <ul class="list">
    <li v-for="(post, i) of posts" :key="i">
      <h3>
        <nuxt-link :to="{ name: 'post-id', params: { id: post.sys.id } }">{{
          post.fields.title
        }}</nuxt-link>
        <!-- <small v-if="post.fields.subtitle">{{ post.fields.subtitle }}</small> -->
      </h3>
      <!-- <p class="img img-right img-small" v-if="post.fields.media"><img :src=post.fields.media.fields.file.url></p>
      <span v-html="renderText(post.fields.body)" v-if="typeof post.fields.body === 'object'"></span> -->
      <!-- <span v-html="post.fields.body" v-if="typeof post.fields.body === 'string'"></span> -->
    </li>
  </ul>
</template>