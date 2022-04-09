<template>
  <section class="notification">
    <p class="image">
      <a
        href="https://arrrepentimiento.bandcamp.com/album/birth-of-significance"
        target="_blank"
      >
        <img src="~/assets/images/releases/arr007/tape.png" />
      </a>
    </p>
    <div class="text">
      <h1 class="title">
        <a href="https://artist.landr.com/music/672985604100" target="_blank">
          Birth of Significance
        </a>
        <small>Available Now</small>
      </h1>
      <ul class="links">
        <li>
          <a
            href="https://arrrepentimiento.bandcamp.com/album/birth-of-significance"
            target="_blank"
          >
            Bandcamp
          </a>
        </li>
        <li>
          <a
            href="https://open.spotify.com/album/7F3Vw6iiexO7RuNMvovVGF"
            target="_blank"
          >
            Spotify
          </a>
        </li>
        <li>
          <a
            href="https://music.apple.com/us/album/birth-of-significance-ep/1539766727?uo=4&app=music"
            target="_blank"
          >
            Apple Music
          </a>
        </li>
        <li>
          <a href="https://artist.landr.com/music/672985604100" target="_blank">
            Other Platforms
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
<style lang="scss" scoped>
.notification {
  margin-bottom: 80px;
  border: 3px solid $color-yellow;
  padding: 25px;
  position: relative;
}

.image {
  position: absolute;
  width: 400px;
  top: -60px;
  right: -30px;
  margin: 0;
  a {
    > img {
      max-width: 100%;
    }
  }
  @include sp {
    position: absolute;
    top: -60px;
    right: 0;
    left: 25px;
  }
}

.text {
  @include sp {
    padding-top: 200px;
  }
}

.title {
  margin: 0 0 15px;
  line-height: 1.4;
  font-family: $font-rich;
  a {
    color: $color-yellow;
  }
  > small {
    display: block;
    font-size: 0.6em;
  }
}

.links {
  margin: 0;
  padding: 0;
  > li {
    display: inline-block;
    list-style: none;
    margin-right: 10px;
  }
}
</style>