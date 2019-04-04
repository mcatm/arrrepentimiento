<template>
<div class="l-content">
  <div class="l-content-inner">
    <ul class="list">
      <ListItem
        v-for="(post, i) of posts"
        :key="i"
        :title="post.fields.title"
        :body="post.fields.body"
      />
      <!-- <li class="list-item">
        <h3>Arrepentimiento: the First Meeting</h3>
        <p>It is a genealogy of Velvet Underground, muddy alternative folk music that takes over the spirituality of Child of Microtones and Sound@One. Arrepentimiento is a new group of types that make it progressive. On this day, which will be the first performance, we will create some nursery that can be seen with extremely awakened eyes in the final session.</p>
        <p class="ja">Velvet Undergroundの支流に位置し、Child of MicrotonesやSound@Oneの精神性をズブズブに引き継ぐオルタナティブ・フォーク・ミュージックの泥濘。その漸進性を以って祝祭と為すタイプのグループ＝Arrepentimientoが秘かに誕生しました。初のパフォーマンスとなるこの日は、会場の数カ所で行われるゲリラ〜突発的なセッションを録音、それらの記録を再生しながら行う最終セッションにて「新しい都市」の誕生に周回遅れのJohn Cage的な彩りを添えます。各々楽器を持参の上、突発的な参加も歓迎。</p>
        <dl>
          <dt>日時</dt>
          <dd>2017年11月12日[日] 17:30〜18:00<br><small>（イベント自体は11月11日（土）からスタート。11日にもセッションあり）</small></dd>
          <dt>会場</dt>
          <dd>デジタルハリウッド大学 <br class="sp">八王子制作スタジオ<br><small>（旧三本松小学校）</small><br>
          1F給食室</dd>
          <dt>料金</dt>
          <dd>無料</dd>
        </dl>
        <ul class="links">
          <li><a href="http://newtown.site/" target="_blank">New Town</a></li>
          <li><a href="https://www.google.com/maps/place/%E3%80%92192-0354+%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AB%E7%8E%8B%E5%AD%90%E5%B8%82%E6%9D%BE%E3%81%8C%E8%B0%B7%EF%BC%91/@35.630406,139.42166,16z/data=!4m5!3m4!1s0x6018e33740708b01:0x99efbf91e239ae5f!8m2!3d35.6298348!4d139.4214843?hl=ja" target="_blank">Map</a></li>
        </ul>
      </li>
      <li class="list-item" id="release-tha02">
        <h4>THa #1</h4>
        <p class="img img-right"><img src="~/assets/img/releases/arr-002/news.png"></p>
        <p>In the "NEW TOWN" event above, CD-R will be distributed! Limited to 50 copies. Forgive me if it's out of stock because I give it quite comfortably!</p>
        <p class="ja">上記「NEW TOWN」イベント内で、CD-Rを配布します！限定50枚。割と気楽にあげちゃいますので、無くなったらご容赦を！</p>
        <ol class="songs">
          <li>The Depth of Meanings</li>
          <li>Night Life At Tel Aviv</li>
          <li>Cassandra</li>
        </ol>
      </li>
      <li class="list-border"></li>
      <li class="list-item" id="release-tha02">
        <h3>The Depth of Meanings<small>意味の深度</small></h3>
        <p class="img img-right"><img src="~/assets/img/releases/arr-001/large.jpg"></p>
        <p>We announced the song "The Depth of Meanings" on Bandcamp. As my practice of Home Taping, I mixed a collage of plucked guitars while shaking by a hammock at home, studies with synths patched at my own PC, cut and paste as a result of hitting a drum that can not beat tightly, and a wacky vocal mix It is. It's also delivered on Apple Music or Spotify</p>
        <p class="ja"><strong>「意味の深度」</strong>という楽曲を<a href="http://arrepentimiento.bandcamp.com/album/the-depth-of-meanings" target="_blank">Bandcamp</a>で発表しました。僕なりのHome Tapingの実践として、自宅でハンモックに揺られながら爪弾いたギターのコラージュ、PCでパッチングしたシンセによる習作、叩けないドラムをどつんどつんと叩いた結果の切り貼り、つたないボーカルなどがミックスされています。<a href="https://itunes.apple.com/jp/album/the-depth-of-meanings-single/id1296961757" target="_blank">Apple Music</a>や<a href="https://open.spotify.com/album/1DAopqWeJHZFPIqQl8f6X7" target="_blank">Spotify</a>でも配信中</p>
        <ul class="links">
          <li><a href="http://arrepentimiento.bandcamp.com/album/the-depth-of-meanings" target="_blank">Bandcamp</a></li>
          <li><a href="https://itunes.apple.com/jp/album/the-depth-of-meanings-single/id1296961757" target="_blank">Apple Music</a></li>
          <li><a href="https://open.spotify.com/album/1DAopqWeJHZFPIqQl8f6X7" target="_blank">Spotify</a></li>
        </ul>
      </li>
      <li class="list-item">
        <figure class="quote quote-weird">
          <blockquote>
            <p>大音声<small>（だいおんじょう）</small>が構内を満たす。見えないスピーカーが降りてきて、ビラや広告のポスターがべたべた貼られた四方の壁にぶつかり、さらに増幅され、跳ねかえり、大きくなって、すこしずつずれたこだまと響きの連鎖で膨れあがり、最初の言葉は失われる――壮大だが、理解不能で、恐るべき、巨大な信託に変わってしまうのだ。</p>
          </blockquote>
          <footer>ロブ＝グリエ『消しゴム』</footer>
        </figure>
      </li>
      <li class="list-item">
        <h3>Soundcloud</h3>
        <p>For more than a year ago, I have added home taping records. A playlist of Home Taping by such moment composing is being released to Soundcloud.</p>
        <p class="ja">かれこれ一年以上前から、Home Tapingの記録を付けています。Soundcloudに、そうした瞬間作曲によるHome Tapingのプレイリストを公開中です。よくわかんねえけど、面白いと思うよ</p>
        <iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/190955789&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
      </li>-->
    </ul>
  </div>
</div>
</template>

<script>
import ListItem from '~/components/ListItem'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  components: {
    ListItem
  },
  asyncData({ env, params }) {
    return client
      .getEntries(env.CTF_POST_TYPE_ID)
      .then(entries => {
        return {
          posts: entries.items
        }
      })
      .catch(console.error)
  },
  data() {
    return {
    }
  }
}
</script>
