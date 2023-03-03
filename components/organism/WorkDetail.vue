<template>
  <div v-if="work" class="work">
    <BlockTitle>{{ work.title }}</BlockTitle>
    <div class="content">
      <div class="side">
        <div v-if="thumbnail" class="thumbnail">
          <img :src="thumbnail" />
        </div>
        <div v-if="work.stores && work.stores.length > 0" class="links">
          <h4 class="label">Stores</h4>
          <ul>
            <li v-for="link of work.stores.filter(store => !store.notAvailable)">
              <CardLinkByType :link="link" />
            </li>
          </ul>
        </div>
        <div v-if="work.streamings && work.streamings.length > 0" class="links">
          <h4 class="label">Streaming</h4>
          <ul>
            <li v-for="link of work.streamings">
              <CardLinkByType :link="link" />
            </li>
          </ul>
        </div>
      </div>
      <div class="stats">
        <p class="number">{{ work.number }}</p>
        <div v-if="description" class="description">
          <p v-for="paragraph, i of description" :key="`${work.id}-description-${i}`">{{ paragraph }}</p>
        </div>
        <OrganismTrackList v-if="work.tracks" :tracks="work.tracks" class="tracks" />
        <dl class="data">
          <template v-if="work?.releasedAt">
            <dt>Released</dt>
            <dd>{{ work.releasedAt.format('YYYY-MM-DD') || 'Not Available' }}</dd>
          </template>
          <template v-if="work.length">
            <dt>Total Length</dt>
            <dd>{{ work.length || 'Not Available' }}</dd>
          </template>
        </dl>
      </div>
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

const description = computed(() => {
  return work && work.value.description ? work.value.description : undefined;
})
</script>
<style lang="scss" scoped>
.work {
  padding-bottom: 80px;
}

.content {
  font-family: $font-rich;
  display: flex;

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

.description {
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
