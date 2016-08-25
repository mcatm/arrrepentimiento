riot.route.base('/');

riot.route('/', function() {
  // console.log('TOP!');
  // social.trigger('kick')
  var items = [
    {
      title: '30 Degree',
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
    },
    {
      title: '30 Degree',
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
    },
    {
      title: '30 Degree',
      message: "Next sound piece. Piano in Nagano, midnight.<br>https://soundcloud.com/arrepentimiento/30-degree",
      picture: 'https://external.xx.fbcdn.net/safe_image.php?d=AQBiIYGzuM20SC5b&w=130&h=130&url=https%3A%2F%2Fi1.sndcdn.com%2Fartworks-000147091236-1ps8sg-t500x500.jpg&cfs=1'
    }
  ];
  riot.mount('content', 'list', items)
});

riot.route(function(collection) {
  // social.trigger('kick')
  riot.mount('content', collection);
});

/**
 * commonRoute
 */

var commonRoute = riot.route.create()

commonRoute(function() {
  social.trigger('kick')
})

//



// access_tokenの件、解決するまで、ダミーデータを使う
// http://www.bricoleur.co.jp/blog/archives/2693



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

riot.mount('*');
riot.route.start(true);