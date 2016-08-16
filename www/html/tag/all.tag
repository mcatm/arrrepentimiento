<app>
  <ul>
    <li each='{ items }'>
      <itemTitle content="{ title }" />
      <p><img src="{ picture }"></p>
      <p><itemText content="{ message }" /></p>
    </li>
  </ul>

  var $this = this;

  $this.items = [];

  // access_tokenの件、解決するまで、ダミーデータを使う
  // http://www.bricoleur.co.jp/blog/archives/2693

  $this.items = [
    {
      name: '30 Degree',
      message: "Next sound piece. Piano in Nagano, midnight.<br>https://soundcloud.com/arrepentimiento/30-degree",
      picture: 'https://external.xx.fbcdn.net/safe_image.php?d=AQBiIYGzuM20SC5b&w=130&h=130&url=https%3A%2F%2Fi1.sndcdn.com%2Fartworks-000147091236-1ps8sg-t500x500.jpg&cfs=1'
    },
    {
      message: "I uploaded first two songs. I (we?) started my (our?) music today.<br>https://soundcloud.com/arrepentimiento",
      picture: 'https://external.xx.fbcdn.net/safe_image.php?d=AQCzDdo_Hrb8TGyi&w=130&h=130&url=https%3A%2F%2Fscontent.xx.fbcdn.net%2Fhphotos-xpf1%2Ft31.0-8%2F12628453_511517372362513_997693660619327721_o.jpg&cfs=1'
    },
    {
      message: null,
      story: 'updated your photos',
      picture: 'https://external.xx.fbcdn.net/safe_image.php?d=AQCzDdo_Hrb8TGyi&w=130&h=130&url=https%3A%2F%2Fscontent.xx.fbcdn.net%2Fhphotos-xpf1%2Ft31.0-8%2F12628453_511517372362513_997693660619327721_o.jpg&cfs=1'
    }
  ]

  // $.ajax({
  //   type: 'get',
  //   url: 'https://graph.facebook.com/v2.7/arrepentimiento.music/feed',
  //   dataType: 'json',
  //   data: {
  //     access_token: '{{ access_token }}',
  //     fields: 'message,picture,name'
  //   }
  // }).done(function(m) {
  //   // console.log(m);
  //   $.each(m.data, function() {
  //     // console.log(typeof this.message.nl2br);
  //     $this.items.push({
  //       title: this.name,
  //       message: nl2br(this.message),
  //       picture: this.picture
  //     });
  //   });
  //   // $this.items = m.data;
  //   $this.update();
  // });

  // JS内で要素のデータを定義する
  // this.items = [
  //   {title: 'Annoy-o-Tron', permalink: 'http://www.cinra.net'},
  //   {title: 'Annoy-o-Tron', permalink: 'http://www.cinra.net'},
  // ]
</app>
<itemText>
  this.root.innerHTML = opts.content
</itemText>
<itemTitle>
  <h1>{ itemTitle }</h1>

  console.log(opts.content);
  this.itemTitle = opts.content != 'Arrepentimiento' ? opts.content : null;
</itemTitle>
<test>
  <button onclick="{ clear }">Clear</button>
  <hr>
  <form onsubmit='{ add }'>
    <label>Name</label><br>
    <p><input type="text" name="name"></p>
    <label>Quote</label><br>
    <p><input type="text" name="quote"></p>
    <button>Add</button>
  </form>
  <hr>
  <div each='{ item_list }'>
    <h1><a href="{ permalink }" target="_blank">{ title }</a></h1>
    <p>{ job }</p>
  </div>

  var $this = this,
      res;

  $.ajax({
    url: 'https://job.cinra.net/api/get/?pg=1',
    dataType: 'json'
  }).done(function(m) {
    console.log(m.companies);
    $this.item_list = m.companies;
    $this.update();
  });

  // console.log(this.item_list);

  // this.item_list = res;

  // JS内で要素のデータを定義する
  // this.item_list = [
  //   {name: 'Annoy-o-Tron', quote: 'Hello, Hello, Hello'},
  //   {name: 'Northshire Cleric', quote: 'Is someone injured?'},
  // ]

  this.add = function(e) {
    // console.log(this.name.value);
    this.item_list.push( {title: this.name.value, job: this.quote.value, permalink: 'http://www.cinra.net'} );
    this.update();
  }

  this.clear = function(e) {
    this.item_list = [];
    this.update();
  }
</test>