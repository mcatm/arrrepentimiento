import dayjs from 'dayjs';
import thumbnail from '~/assets/images/works/arr014/cover.png';
import { workLink } from '~/lib/links';
import type { Work } from '~/types/work';

const id = 'maelstrom';

export const arr014: Work = {
  id,
  number: 'arr014',
  title: 'Maelström',
  type: 'single',
  formats: ['streaming'],
  status: 'released',
  to: workLink(id),
  thumbnail,
  description: [
    'In a world with no escape, yet anger burns quietly. Before the pier, in a barn facing south, we attempt to break the chains again and again, but even this escape is already consumed by the machinery of control. Within such desperate contradiction lies the reason for our turmoil. From the forthcoming "In Delirium," the second track "Maelström." In the ashes, upon a weary stage in tuxedos, may the feeble glimmer of the mirror ball illuminate the song that mourns our captive order.',
    '逃げ場のないこの世界で、しかし、怒りは静かに燃えている。桟橋前、南の方角の納屋にて、何度も鎖を断ち切ろうとするが、その逃避行もすでに支配の中に取り込まれている。そんな絶望的な矛盾の中で取り乱した理由。来たる「In Delirium」から、2曲目となる「Maelström（渦）」。灰の中、草臥れたステージにタキシードで、ミラーボールの弱々しい煌めきが、囚われの秩序を憂う歌を照らさんことを。',
  ],
  isPicked: true,
  // isDrafted: true,
  releasedAt: dayjs('2025-09-16'),
  releaseDateFormat: 'YYYY-MM',
  // length: '13:00',
  tracks: ['Maelström'],
  videos: [
    {
      title: "The Wave",
      id: "lkVvktP5i0k",
    },
  //   {
  //     title: "Your Property",
  //     id: "LRDvt_Lshvw",
  //   },
  ],
  stores: [],
  streamings: [
    // {
    //   type: "bandcamp",
    //   to: "https://arrrepentimiento.bandcamp.com/album/hesitation-in-syllables",
    // },
    {
      type: 'spotify',
      to: 'https://open.spotify.com/intl-ja/album/2WlJx93ZtoIoXxRSd39oon',
    },
    {
      type: 'itunes',
      to: 'https://music.apple.com/jp/album/maelstr%C3%B6m-single/6811613187',
    },
    {
      type: 'other',
      to: 'https://release.landr.com/991061153272',
    },
  ],
  articles: [
    // {
    //   type: "other",
    //   to: "/note/production-note-for-hesitation-in-syllables",
    //   label: "プロダクションノート",
    // },
    // {
    //   type: "other",
    //   to: "http://musicmagazine.jp/mm/mm202309.html",
    //   label: "ミュージック・マガジン2023年9月号",
    // },
    // {
    //   type: "other",
    //   to: "http://musicmagazine.jp/mm/mm202308.html",
    //   label: "ミュージック・マガジン2023年8月号",
    // },
    // {
    //   type: "other",
    //   to: "https://inmemoryofjohnpeel.com/2023/08/12/in-memory-of-john-peel-show-230811-podcast-playlist/",
    //   sitename: "In Memory of John Peel",
    //   label: "Episode 908: What’s the next big thing?",
    // },
    // {
    //   type: "other",
    //   to: "https://inmemoryofjohnpeel.com/2023/07/08/in-memory-of-john-peel-show-230707-podcast-playlist/",
    //   sitename: "In Memory of John Peel",
    //   label: "Episode 902: That’s not the way to handle an LP!",
    // },
    // {
    //   type: "other",
    //   to: "https://kpiss.fm/episode/clean-nice-quiet-07-29-2023/",
    //   sitename: "CLEAN NICE QUIET",
    //   caption: "(07.29.2023)",
    // },
    // {
    //   type: "other",
    //   to: "https://kpiss.fm/episode/clean-nice-quiet-09-23-2023/",
    //   sitename: "CLEAN NICE QUIET",
    //   caption: "(09.23.2023)",
    // },
  ],
};
