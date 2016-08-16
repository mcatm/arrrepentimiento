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