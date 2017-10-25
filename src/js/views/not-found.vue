<template>
<div class="l-content">
  <div class="l-content-inner">
    <div class="page">
      <h1>Page Not Found</h1>

      <hr>

      <div class="l-columns">
        <ul class="links">
          <li><router-link to="/">Top</router-link></li>
          <li><a href="https://soundcloud.com/arrepentimiento" target="_blank">Soundcloud</a></li>
          <li><a href="https://arrepentimiento.bandcamp.com/" target="_blank">Bandcamp</a></li>
        </ul>
        <ul class="links">
          <li><a href="https://itunes.apple.com/jp/artist/arrepentimiento/id1296962169" target="_blank">iTunes</a></li>
          <li><a href="https://open.spotify.com/artist/7v2cd2Ai9FvjIAxVkbcIiL" target="_blank">Spotify</a></li>
          <li><a href="https://twitter.com/timient0" target="_blank">Twitter</a></li>
          <li><a href="https://www.facebook.com/arrepentimiento.music/" target="_blank">Facebook</a></li>
        </ul>
      </div>
    </div>

  </div>
</div>
</template>

<style scoped>
</style>

<script>
export default {
  data: function() {
    return {
      page: 'Page Not Found'
    };
  },
  head: {
    title: {
      inner: 'Page Not Found'
    }
  }
};
</script>