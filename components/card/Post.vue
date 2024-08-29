<template>
  <div v-if="post" class="post">
    <div v-if="post.thumbnail" class="thumbnail">
      <div class="image"><img :src="thumbnail" /></div>
    </div>
    <div v-else class="thumbnail"><p class="noimage" /></div>
    <div class="content">
      <h3 class="title">{{ post.title }}</h3>
      <p class="info" v-if="info.length > 0">
        <span v-for="{ value } of info">{{ value }}</span>
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Post } from "~~/types/post";

const props = defineProps<{
  post: Post;
}>();

const post = computed(() => props.post || undefined);

const thumbnail = computed(() => {
  return post && post.value.thumbnail ? post.value.thumbnail : "";
});

const info = computed(() =>
  (post.value?.info || []).filter((i) => !!i?.onList)
);
</script>
<style lang="scss" scoped>
.post {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  gap: 25px;
}

.thumbnail {
  width: 80px;
  // min-height: 180px;
  line-height: 1;
  // margin-right: 25px;
  flex-shrink: 0;
  padding: 20px 0 20px 20px;

  .image {
    width: 80px;
    height: 80px;
    border-radius: 999px;
    overflow: hidden;
    > img {
      width: 80px;
      // height: 120px;
      object-fit: "cover";
    }
  }
  .noimage {
    width: 80px;
    height: 80px;
    background-color: $color-yellow;
    margin: 0;
  }

  @include sp {
    width: 80px;
    min-height: 80px;
  }
}

.content {
  // font-family: $font-rich;
  width: 100%;

  .title {
    font-size: 1.6rem;
    margin: 0;
    line-height: 1.6;

    @include sp {
      font-size: 1.5rem;
      line-height: 1.3;
    }
  }

  .info {
    font-size: 0.8rem;
    margin: 0;

    & > span,
    & > strong {
      margin-right: 10px;
    }
  }

  > small {
    display: block;
    font-size: 0.9rem;
    line-height: 1.2;
  }
}
</style>
