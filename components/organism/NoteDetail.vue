<template>
  <div v-if="note" class="work">
    <BlockTitle>{{ note.title }}</BlockTitle>
    <div class="content">
      <div v-if="contents" class="article">
        <BlockText :lines="contents" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Article } from '~~/types/article';

const props = defineProps<{
  note: Article
}>();

const note = computed(() => props.note || undefined);

const thumbnail = computed(() => {
  return note && note.value.thumbnail ? note.value.thumbnail : '';
});

const contents = computed(() => {
  return note && note.value.contents ? note.value.contents : undefined;
})
</script>
<style lang="scss" scoped>
.work {
  padding-bottom: 80px;
}

.content {
  font-family: $font-rich;
  display: flex;
  margin-bottom: 25px;

  .side {
    width: 360px;
    margin-right: 25px;
    flex-shrink: 0;

    @include sp {
      width: 100%;
      margin-bottom: 40px;
    }
  }

  .stats {
    width: 100%;

    p {
      margin: 0;
      padding-bottom: 12px;
    }
  }

  >small {
    display: block;
    font-size: 0.8rem;
    line-height: 1.2;
  }

  @include sp {
    flex-direction: column;
  }
}

.thumbnail {
  line-height: 1;
  width: 360px;

  >img {
    width: 100%;
    height: auto;
    // border: 1px solid $color-yellow;
  }

  @include sp {
    width: auto;
    max-width: 100%;
  }
}

.article {
  margin-bottom: 20px;
  font-family: $font-normal;
  font-size: 14px;

  p {
    padding-bottom: 20px;
  }
}

.number {
  margin: 0 0 20px;
}

.tracks {
  margin: 0 0 20px;
}

.links {
  margin: 0;
  padding-top: 20px;

  >.label {
    font-size: 12px;
    line-height: 1;
    margin: 0 0 15px;
    opacity: 0.7;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 18px;

    >li {
      padding-bottom: 10px;
    }
  }
}

.video {
  >ul {
    list-style: none;
    margin: 0 0 15px 0;
    padding: 0;

    >li {
      margin-bottom: 10px;
    }
  }
}

.data {
  font-family: $font-normal;
  font-size: 14px;

  dt {
    float: left;
    clear: left;
    width: 80px;
    padding-right: 12px;
  }

  dd {
    float: left;
  }
}
</style>
