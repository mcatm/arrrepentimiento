<template>
  <div v-if="work" class="work">
    <div v-if="work.thumbnail" class="thumbnail"><img :src="thumbnail" /></div>
    <div v-else class="thumbnail noimage" />
    <div class="content">
      <small>{{ work.number }}</small>
      <h3 class="title">{{ work.title }}</h3>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Work } from '~~/types/work';

const props = defineProps<{
  work: Work
}>();

const work = computed(() => props.work || undefined);

const thumbnail = computed(() => {
  return work && work.value.thumbnail ? work.value.thumbnail : '';
});
</script>
<style lang="scss" scoped>
.work {
  display: flex;
  align-items: center;
}

.thumbnail {
  width: 180px;
  min-height: 180px;
  line-height: 1;
  margin-right: 25px;
  flex-shrink: 0;

  >img {
    width: 100%;
    height: auto;
  }

  &.noimage {
    background-color: $color-red;
  }

  @include sp {
    width: 120px;
    min-height: 120px;
  }
}

.content {
  font-family: $font-rich;

  .title {
    font-size: 40px;
    margin: 0;
    line-height: 1.4;

    @include sp {
      font-size: 24px;
      line-height: 1.3;
    }
  }

  >small {
    display: block;
    font-size: 0.8rem;
    line-height: 1.2;
  }
}
</style>
