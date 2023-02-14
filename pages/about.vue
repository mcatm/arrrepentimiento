<template>
  <div>
    <BlockMain>
      <BlockHero>
        <div class="heading">
          <h1 class="brand">
            <nuxt-link to="/">Arrrepentimiento</nuxt-link>
          </h1>
          <p class="subtitle">
            <span>アレペンティミエント</span>
          </p>
        </div>
      </BlockHero>
    </BlockMain>

    <BlockImage>
      <img src="~assets/images/collective/001.jpg" />
    </BlockImage>

    <BlockMain>
      <div class="l-hero">
        <div class="copy">
          <p>
            <em>In the burnt red-black sky, the gospel resonates in capital HELVETICA.</em><br />
            焦げた赤黒い空に、大文字のヘルベチカで鳴り響く福音。
          </p>
          <p>
            <em>At the beach where the sadness ended, preparations for a new party begin.</em><br />
            悲しみの終わった浜にて、新しい宴の準備が始まる。
          </p>
          <p>
            <em>Buildings of sound constructed in fictitious dimensions are now irradiated to the body from completely
              different angles.</em><br />
            架空の次元で構築された音の建造物が、今まさに全く別の角度から肉体に照射された。
          </p>
          <p>
            <em>A melody is born like breathing, and rhythm dies as if to breathe
              out.</em><br />
            息を吸うようにメロディが生まれ、息を吐くようにリズムが死んでいく。
          </p>
          <p>
            <em>Let's say goodbye to old-fashioned magic. At the entrance of the mellow cavity era.</em><br />
            古ぼけた魔術にさよならを告げよう。芳醇な空洞時代の入り口にて。
          </p>
        </div>
      </div>

      <div class="l-columns reverse">
        <div class="column">
          <p class="en">
            <strong>
              We build the modern folk songs by home-recording.
              The miscellaneous members give them special bodies by the experimental methods that ignore any contexts
              and add strange atmosphere.
              Between confusion and silence.</strong>
          </p>
          <p class="ja">
            <small>実験音楽とモダンフォークの光輝なる融合。知る人ぞ知るエディットサイケバンドdrawing4-5を母体とするコレクティブ「Arrrepentimiento（アレペンティミエント）」。日本語で「後悔」。雑多なメンバーが入れ替わり立ち替わり参加したり離れたりしながら、コンテキストを無視した演奏と奇怪な音像で、断片的なメロディに実体を与えていく事故音楽。ノイズ〜コラージュといった実験音楽と、リリカルなフォークソングの厳かな融合が、一瞬の儀式のように駆け抜けていきます。</small>
          </p>
        </div>
        <div class="column">
          <p class="img"><img src="~assets/images/collages/002.jpg" /></p>
        </div>
      </div>
    </BlockMain>
  </div>
</template>
<script lang="ts" setup>
import { useHtmlHeader } from '~~/composables/utils/useHtmlHeader';

useHtmlHeader({
  title: 'About Us',
});
</script>
<style lang="scss" scoped>
.heading {
  margin: 0;
  color: $color-yellow;

  .brand {
    font-family: $font-rich;
    font-size: 3.2rem;
    margin: 0;
    line-height: 1;

    a {
      text-decoration: none;
      color: $color-yellow;

      &:hover {
        color: $color-red;
      }
    }
  }

  .subtitle {
    font-family: $font-normal;
    font-size: 0.8rem;
    margin: 0;
  }
}

.l-hero {

  .copy {
    font-size: 0.8rem;

    em {
      // font-family: $font-rich;
      font-size: 1.1rem;
      font-style: normal;
      font-weight: 900;
    }
  }
}

.l-columns {
  padding: 0 0 80px;

  .column {
    width: 50%;
    padding: 0 40px;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }

    @include sp {
      width: 100%;
      padding: 0 0 30px;
    }

    p {
      margin: 0;
      padding: 0 0 20px;

      &.en {
        line-height: 1.8;
        font-size: 1.1em;
        text-align: justify;
      }

      &.ja {
        line-height: 1.6;
      }
    }

    .img {
      >img {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
      }

      @include sp {
        max-height: 300px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}

.heading {
  margin: 0;
  padding: 0 0 10px;
  font-family: $font-rich;
  font-size: 1.1rem;
  color: $color-gray;
}

.list {
  padding: 0;
  margin: 0;

  >li {
    list-style: none;
    padding: 0;
    border-bottom: 1px solid $color-gray;

    &:first-child {
      border-top: 1px solid $color-gray;
    }

    h3 {
      font-size: 40px;
      margin: 0;
      line-height: 1.4;
      font-family: $font-rich;

      >a {
        text-decoration: none;
        display: block;
        padding: $width-gutter 0;

        &:hover {
          color: $color-yellow;
        }
      }

      @include sp {
        font-size: 32px;
        line-height: 1.3;
      }
    }

    p {
      margin-bottom: 0;
    }
  }
}

.footer {
  padding: 40px 0 0;
  text-align: left;
  font-family: $font-rich;
  font-size: 1.5rem;

  >a {
    display: inline-block;
    background: $color-red;
    color: $color-black;
    text-decoration: none;
    padding: 11px 76px;
    border: 2px solid $color-red;

    &:hover {
      background-color: transparent;
      border: 2px solid $color-yellow;
      color: $color-yellow;
    }
  }
}
</style>
