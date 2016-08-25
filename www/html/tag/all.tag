<about>

<div class="page">
<h1>About this Collective</h1>
</div>

</about>
<app>

<div class="l-content">
  <div class="l-content-inner">
    <content></content>
    <foot></foot>
    <iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/190955789&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
  </div>
</div>
<div class="l-skyscraper">
  <div class="brand">
    <div class="brand-name">
      <a href="/"><img src="/img/name.png" alt="Arrepentimiento" title="Arrepentimiento - the Music collective"></a>
    </div>
  </div>
</div>

</app>
<foot>
<nav class="l-footer">
  <ul>
    <li><a href="/">The Top</a></li>
    <li><a href="/about/">About Us (Into this Musical Collective or other)</a></li>
    <li><a href="/members/">Members into the woods</a></li>
    <li><a href="/404/">404 Test</a></li>
  </ul>
</nav>


</foot>
<list>
  <ul class="list">
    <li class="list-item" each='{ items }'>
      <itemTitle content="{ title }" />
      <p class="list-thumbnail"><img src="{ picture }" class="is-circle"></p>
      <p><itemText content="{ message }" /></p>
    </li>
  </ul>

  this.items = opts;

</list>
<members>

<div class="page">
  <h1>Members</h1>
  <p><img src="/img/members/mcatm/001.jpg"></p>
  <h2>Satoshi HAMADA - mcatm</h2>
  <ul>
    <li><a href="https://twitter.com/mcatm/" target="_blank">Twitter</a></li>
  </ul>
</div>

</members>
<notfound>

<h1>File Not Found</h1>

</notfound>
<itemText>
  this.root.innerHTML = opts.content
</itemText>
<itemTitle>
  <h1>{ itemTitle }</h1>

  // console.log(opts.content);
  this.itemTitle = opts.content != 'Arrepentimiento' ? opts.content : null;
</itemTitle>