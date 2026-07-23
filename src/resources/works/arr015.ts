import dayjs from 'dayjs';
import thumbnail from '~/assets/images/works/arr015/thumb.jpg';
import { workLink } from '~/lib/links';
import type { Work } from '~/types/work';

const id = 'in-delirium';

export const arr015: Work = {
  id,
  number: 'arr015',
  title: 'In Delirium',
  type: 'album',
  formats: ['cassette', 'streaming'],
  status: 'released',
  to: workLink(id),
  thumbnail,
  description: [
    {
      type: 'heading',
      value:
        'Breaking away from and returning to the framework of indie folk in this final of the "Home Recording Trilogy"',
    },
    'The world is crumbling. Yet, even as it is corroded by noise and collage, the melody continues to ring out. As acoustic instruments and electronics collide, the soundscape morphs into unpredictable forms. It is a space both pastoral and bizarre—where gravity and absurdity coexist, and venom and humor blur into one.<br />In this final installment of the "Home Recording Trilogy," Arrrepentimiento continues their challenge, repeatedly breaking away from and returning to the framework of indie folk in an attempt to drag the listener into uncharted territory.<br />A world gone astray; sounds in constant flux. Amidst this vortex, a sheer will continues to sing. And within that contradiction, a new beauty arises.',
    {
      type: 'heading',
      value: 'インディフォークからの逸脱と回帰を繰り返す「宅録三部作」最終作',
    },
    '世界は壊れていく。ノイズとコラージュに蝕まれながら、それでもメロディは響き続ける。生楽器とエレクトロニクスが衝突すると、予測不可能な形へ変形していく音場。牧歌的でありながら珍妙、深刻さと不条理が同居する空間で、毒とユーモアが混濁している。「宅録三部作」の最終作となる本作でも、Arrrepentimientoは引き続き、インディフォークの枠組からの逸脱と回帰を繰り返しながら、聴き手を未知の領域へ引きずり込まんと挑戦を続ける。迷走する世界、揺らぎ続ける音。その渦中で、意志が歌い続ける。その矛盾の中に、新しい美が立ち上がるのだ。',
  ],
  isPicked: true,
  // isDrafted: true,
  releasedAt: dayjs('2026-10-23'),
  releaseDateFormat: 'YYYY-MM',
  // length: '13:00',
  tracks: [
    'In Delirium',
    'Permanent Vacation',
    'Dance, Signe, Dance',
    '5th Stigma Problem',
    'Moonlight',
    'Twice in the Morning',
    'Porcile',
    'Fear of Vulnerability',
    'Maelström',
    'Life as Crackling Firewood',
    'Storm in My Hat',
    'Extreme Beams Again',
  ],
  videos: [
    // {
    //   title: 'Maelström',
    //   id: '638hw8jwe5E',
    // },
    // {
    //   title: 'Permanent Vacation In The Hole',
    //   id: 'LRDvt_Lshvw',
    // },
  ],
  stores: [
    // {
    //   label: 'Reconquista',
    //   caption: '（On Sale）',
    //   type: 'store',
    //   to: 'https://www.reconquista.biz/SHOP/arr07_12.html',
    //   // notAvailable: true,
    // },
    // {
    //   label: 'Reconquista',
    //   type: 'store',
    //   to: 'https://www.reconquista.biz/SHOP/arr012.html',
    //   notAvailable: true,
    // },
    // {
    //   label: 'Marking Records',
    //   caption: '（松本）',
    //   type: 'store',
    //   to: 'https://shop.markingrecords.com/items/75654328',
    //   notAvailable: true,
    // },
    // {
    //   type: 'bandcamp',
    //   to: 'https://arrrepentimiento.bandcamp.com/album/hesitation-in-syllables',
    //   notAvailable: false,
    // },
  ],
  streamings: [
    // {
    //   type: 'bandcamp',
    //   to: 'https://arrrepentimiento.bandcamp.com/album/hesitation-in-syllables',
    // },
    // {
    //   type: 'spotify',
    //   to: 'https://open.spotify.com/album/3tE4LTivzwRPlmPZuawQPc',
    // },
    // {
    //   type: 'itunes',
    //   to: 'https://music.apple.com/jp/album/hesitation-in-syllables/1697496742?at=1l3vpUI&ct=LFV_c5df2cc4de343cf24186d5927dd12be1&itsct=catchall_p2&itscg=30440&ls=1',
    // },
    // {
    //   type: 'other',
    //   to: 'https://artists.landr.com/055120855146',
    // },
  ],
  articles: [
    // {
    //   type: 'other',
    //   to: '/note/production-note-for-hesitation-in-syllables',
    //   label: 'プロダクションノート',
    // },
    // {
    //   type: 'other',
    //   to: 'http://musicmagazine.jp/mm/mm202309.html',
    //   label: 'ミュージック・マガジン2023年9月号',
    // },
    // {
    //   type: 'other',
    //   to: 'http://musicmagazine.jp/mm/mm202308.html',
    //   label: 'ミュージック・マガジン2023年8月号',
    // },
    // {
    //   type: 'other',
    //   to: 'https://inmemoryofjohnpeel.com/2023/08/12/in-memory-of-john-peel-show-230811-podcast-playlist/',
    //   sitename: 'In Memory of John Peel',
    //   label: 'Episode 908: What’s the next big thing?',
    // },
    // {
    //   type: 'other',
    //   to: 'https://inmemoryofjohnpeel.com/2023/07/08/in-memory-of-john-peel-show-230707-podcast-playlist/',
    //   sitename: 'In Memory of John Peel',
    //   label: 'Episode 902: That’s not the way to handle an LP!',
    // },
    // {
    //   type: 'other',
    //   to: 'https://kpiss.fm/episode/clean-nice-quiet-07-29-2023/',
    //   sitename: 'CLEAN NICE QUIET',
    //   caption: '(07.29.2023)',
    // },
    // {
    //   type: 'other',
    //   to: 'https://kpiss.fm/episode/clean-nice-quiet-09-23-2023/',
    //   sitename: 'CLEAN NICE QUIET',
    //   caption: '(09.23.2023)',
    // },
  ],
};
