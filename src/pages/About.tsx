import { Link } from 'react-router-dom';
import about from '~/assets/images/about.png';
import collage from '~/assets/images/collages/002.jpg';
import collective from '~/assets/images/collective/001.jpg';
import { BlockHero, BlockImage, BlockMain } from '~/components/block';
import { Container } from '~/components/Container';
import PageHead from '~/components/PageHead';
import * as s from './about.css';

export default function About() {
  return (
    <Container>
      <PageHead title="About Us" />
      <BlockHero>
        <div className={s.heroContainer}>
          <div className={s.heading}>
            <h1 className={s.brand}>
              <Link to="/">Arrrepentimiento</Link>
            </h1>
            <p className={s.subtitle}>
              <span>アレペンティミエント</span>
            </p>
          </div>
        </div>
        <div className={s.heroImage}>
          <img src={about} alt="Arrrepentimiento" />
        </div>
      </BlockHero>

      <BlockMain>
        <div>
          <div className={s.copy}>
            <p>
              <em>In the burnt red-black sky, the gospel resonates in capital HELVETICA.</em>
              <br />
              焦げた赤黒い空に、大文字のヘルベチカで鳴り響く福音。
            </p>
            <p>
              <em>At the beach where the sadness ended, preparations for a new party begin.</em>
              <br />
              悲しみの終わった浜にて、新しい宴の準備が始まる。
            </p>
            <p>
              <em>
                Buildings of sound constructed in fictitious dimensions are now irradiated to the
                body from completely different angles.
              </em>
              <br />
              架空の次元で構築された音の建造物が、今まさに全く別の角度から肉体に照射された。
            </p>
            <p>
              <em>A melody is born like breathing, and rhythm dies as if to breathe out.</em>
              <br />
              息を吸うようにメロディが生まれ、息を吐くようにリズムが死んでいく。
            </p>
            <p>
              <em>
                Let&apos;s say goodbye to old-fashioned magic. At the entrance of the mellow cavity
                era.
              </em>
              <br />
              古ぼけた魔術にさよならを告げよう。芳醇な空洞時代の入り口にて。
            </p>
          </div>
        </div>

        <div className={`l-columns reverse ${s.columns}`}>
          <div className={s.column}>
            <p className="en">
              <strong>
                We build the modern folk songs by home-recording. The miscellaneous members give
                them special bodies by the experimental methods that ignore any contexts and add
                strange atmosphere. Between confusion and silence.
              </strong>
            </p>
            <p className="ja">
              <small>
                実験音楽とモダンフォークの光輝なる融合。知る人ぞ知るエディットサイケバンドdrawing4-5を母体とするコレクティブ「Arrrepentimiento（アレペンティミエント）」。日本語で「後悔」。雑多なメンバーが入れ替わり立ち替わり参加したり離れたりしながら、コンテキストを無視した演奏と奇怪な音像で、断片的なメロディに実体を与えていく事故音楽。ノイズ〜コラージュといった実験音楽と、リリカルなフォークソングの厳かな融合が、一瞬の儀式のように駆け抜けていきます。
              </small>
            </p>
          </div>
          <div className={s.column}>
            <p className={`img ${s.img}`}>
              <img src={collage} alt="Arrrepentimiento collage" />
            </p>
          </div>
        </div>
      </BlockMain>

      <BlockImage>
        <img src={collective} alt="Arrrepentimiento" />
      </BlockImage>
    </Container>
  );
}
