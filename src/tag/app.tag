<app>
  <ul>
    <div each='{ items }'>
      <h1><a href="{ permalink }">{ title }</a></h1>
    </div>
  </ul>

  // JS内で要素のデータを定義する
  this.items = [
    {title: 'Annoy-o-Tron', permalink: 'http://www.cinra.net'},
    {title: 'Annoy-o-Tron', permalink: 'http://www.cinra.net'},
  ]

  this.add = function(e) {
    // console.log(this.name.value);
    this.item_list.push( {title: this.name.value, job: this.quote.value, permalink: 'http://www.cinra.net'} );
    this.update();
  }

  this.clear = function(e) {
    this.item_list = [];
    this.update();
  }
</app>