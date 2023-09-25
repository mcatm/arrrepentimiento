import { Work } from "~~/types/work";
import thumbnail from '~/assets/images/works/arr012/cover.png';
import { useWorkLink } from "~~/composables/utils/useWorkLink";
import dayjs from "dayjs";

const id = 'hesitation-in-syllables';

export const arr012: Work = {
  id,
  number: 'arr012',
  title: 'Hesitation in Syllables',
  type: 'album',
  formats: ['cassette', 'streaming'],
  status: 'pre-release',
  to: useWorkLink(id),
  thumbnail,
  description: [
    {
      type: 'heading',
      value: 'From where tune, Does my mind sway?',
    }, '"Hesitation in Syllables" is the second physical release from the Tokyo-based amorphous collective Arrrepemtimiento. The release centers around several songs compiled from sound pieces that were gathered like inlayed wood after an accidental ritual called "Proibita" at home. It\'s a collection of pop songs that have collided like some kind of accident, where moments the creators themselves couldn\'t comprehend and a language they couldn\'t understand have come together. May this release be a gospel for you, and no one else.',
    {
      type: 'heading',
      value: '何処の調べに、脳を揺らして？',
    },
    '東京の不定形コレクティブArrrepemtimiento（アレペンティミエント）による二作目のフィジカルリリースとなる『Hesitation in Syllables（シラブルに惑う）』。自宅での偶発的な儀式「Proibita（禁止）」を経て、降臨したサウンドピースを寄せ木のように集めて出来た数曲を中心にコンパイルされた本作。制作者たちですら理解不能な瞬間と、制作者たちですら理解不能な言語が、何らかの事故のように衝突した寝間着のポップソングス。本作も、あなた、他ならぬあなたにとっての、福音となりますように。',
  ],
  isPicked: true,
  // isDrafted: true,
  releasedAt: dayjs('2023-06-01'),
  releaseDateFormat: 'YYYY-MM',
  // length: '13:00',
  tracks: [
    'At the Roadside Terrace',
    'Head To The Fire',
    'The Wave',
    'Sort of Tautology',
    'Climb on a Bough',
    'Your Property',
    'Crying Misfits',
  ],
  videos: [
    {
      title: 'The Wave',
      id: '638hw8jwe5E',
    },
    {
      title: 'Your Property',
      id: 'LRDvt_Lshvw',
    }
  ],
  stores: [
    // {
    //   label: 'のら珈琲',
    //   caption: '（秋田）',
    //   type: 'store',
    //   to: 'https://shop.nora-coffee.com/items/37502706',
    //   notAvailable: true,
    // },
    {
      label: 'Reconquista',
      type: 'store',
      to: 'https://www.reconquista.biz/SHOP/arr012.html',
      // notAvailable: true,
    },
    {
      label: 'Marking Records',
      caption: '（松本）',
      type: 'store',
      to: 'https://shop.markingrecords.com/items/75654328',
      // notAvailable: true,
    },
    {
      type: 'bandcamp',
      to: 'https://arrrepentimiento.bandcamp.com/album/hesitation-in-syllables',
      notAvailable: false,
    },
  ],
  streamings: [
    {
      type: 'bandcamp',
      to: 'https://arrrepentimiento.bandcamp.com/album/hesitation-in-syllables',
    },
    {
      type: 'spotify',
      to: 'https://open.spotify.com/album/3tE4LTivzwRPlmPZuawQPc',
    },
    {
      type: 'itunes',
      to: 'https://music.apple.com/jp/album/hesitation-in-syllables/1697496742?at=1l3vpUI&ct=LFV_c5df2cc4de343cf24186d5927dd12be1&itsct=catchall_p2&itscg=30440&ls=1',
    },
    {
      type: 'other',
      to: 'https://artists.landr.com/055120855146',
    }
  ],
  articles: [
    {
      type: 'other',
      to: 'http://musicmagazine.jp/mm/mm202309.html',
      label: 'ミュージック・マガジン2023年9月号',
    },
    {
      type: 'other',
      to: 'http://musicmagazine.jp/mm/mm202308.html',
      label: 'ミュージック・マガジン2023年8月号',
    },
    {
      type: 'other',
      to: 'https://inmemoryofjohnpeel.com/2023/08/12/in-memory-of-john-peel-show-230811-podcast-playlist/',
      sitename: 'In Memory of John Peel',
      label: 'Episode 908: What’s the next big thing?',
    },
    {
      type: 'other',
      to: 'https://inmemoryofjohnpeel.com/2023/07/08/in-memory-of-john-peel-show-230707-podcast-playlist/',
      sitename: 'In Memory of John Peel',
      label: 'Episode 902: That’s not the way to handle an LP!',
    },
    {
      type: 'other',
      to: 'https://kpiss.fm/episode/clean-nice-quiet-07-29-2023/',
      sitename: 'CLEAN NICE QUIET',
      caption: '(07.29.2023)'
    },
    {
      type: 'other',
      to: 'https://kpiss.fm/episode/clean-nice-quiet-09-23-2023/',
      sitename: 'CLEAN NICE QUIET',
      caption: '(09.23.2023)'
    },
  ],
}