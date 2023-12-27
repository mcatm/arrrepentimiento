<template>
  <div v-if="isWork && work" class="work">
    <p class="number">{{ work.number }}</p>
    <div class="title" v-if="work.to"><nuxt-link :to="work.to">{{ work.title }}</nuxt-link></div>
    <div class="title" v-else>{{ work.title }}</div>
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
        <OrganismTrackList v-if="work.tracks" :tracks="work.tracks" class="tracks" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { TextLineWork } from '~~/types/text';
import { useWork } from '~~/composables/data/useWork';

const props = defineProps<{
  line: TextLineWork;
}>();

const line = computed(() => props.line);
const work = useWork(line.value.id);

const isWork = computed(() => typeof line.value !== 'string' && line.value.type === 'work');

const thumbnail = computed(() => {
  return work && work.thumbnail ? work.thumbnail : '';
});

const description = computed(() => {
  return work && work.description ? work.description : undefined;
})
</script>
<style lang="scss" scoped>
.work {
  padding: 30px;
  border: 1px solid $color-yellow;
  line-height: 1.4;
  margin: 0;
  margin-bottom: 40px;

  > .number {
    font-size: 0.8rem;
    margin-bottom: 5px;
    padding: 0;
  }

  .title {
    font-size: 2.4rem;
    font-family: $font-rich;
    margin-bottom: 20px;
  }
}

.content {
  font-family: $font-rich;
  display: flex;
  // margin-bottom: 25px;

  .side {
    width: 280px;
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
  width: 280px;

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
  font-size: 14px !important;
  line-height: 1.6 !important;

  h2 {
    font-size: 1.2rem !important;
  }

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
    padding:0;
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
