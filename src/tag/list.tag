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