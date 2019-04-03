<template>
  <div class="l-footer">
    <div class="l-footer-inner">
      <div class="l-columns">
        <ul class="links">
          <li><router-link to="/">Top</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/inspirations">Inspirations</router-link></li>
          <li><router-link to="/works">Works</router-link></li>
        </ul>
        <ul class="links links-external">
          <li><a href="https://soundcloud.com/arrepentimiento" target="_blank">Soundcloud</a></li>
          <li><a href="https://arrepentimiento.bandcamp.com/" target="_blank">Bandcamp</a></li>
          <li><a href="https://itunes.apple.com/jp/artist/arrepentimiento/id1296962169" target="_blank">iTunes</a></li>
          <li><a href="https://open.spotify.com/artist/7v2cd2Ai9FvjIAxVkbcIiL" target="_blank">Spotify</a></li>
          <li><a href="https://twitter.com/timient0" target="_blank">Twitter</a></li>
          <li><a href="https://www.facebook.com/arrepentimiento.music/" target="_blank">Facebook</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

.l-footer {
  margin-top: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  position: relative;
  z-index: 100;
}

.l-footer-inner {
  max-width: $width-main-s;
  margin: auto;
  padding: 0;
}

</style>