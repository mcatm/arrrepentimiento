import { Work } from "~~/types/work";
import thumbnail from "~/assets/images/works/arr013/cover.png";
import { useWorkLink } from "~~/composables/utils/useWorkLink";
import dayjs from "dayjs";

const id = "permanent-vacation";

export const arr013: Work = {
  id,
  number: "arr013",
  title: "Permanent Vacation",
  type: "single",
  formats: ["streaming"],
  status: "released",
  to: useWorkLink(id),
  thumbnail,
  description: [
    "Two years since their previous work Hesitation in Syllables, this track is slated to be included in their third album In Delirium (working title), which has been in the works since before the last release. More than just an homage to the Jim Jarmusch classic referenced in the title, the song seems to function with relentless pop sensibility—as if trying to shake off an image that acts more like a curse than inspiration.",
    "前作『Hesitation in Syllables』から2年、それ以前より準備していた三作目『In Delirium（仮）』への収録を予定している一曲。タイトルにも引用されたジム・ジャームッシュの名作へのオマージュを通り越して、もはや呪いのように作用するイマージュを振り払うかのように、ひたすらポップに機能しているはず。",
  ],
  isPicked: true,
  // isDrafted: true,
  releasedAt: dayjs("2025-07-18"),
  releaseDateFormat: "YYYY-MM",
  // length: '13:00',
  tracks: ["Permanent Vacation", "A Ghost Story"],
  // videos: [
  //   {
  //     title: "The Wave",
  //     id: "638hw8jwe5E",
  //   },
  //   {
  //     title: "Your Property",
  //     id: "LRDvt_Lshvw",
  //   },
  // ],
  stores: [],
  streamings: [
    // {
    //   type: "bandcamp",
    //   to: "https://arrrepentimiento.bandcamp.com/album/hesitation-in-syllables",
    // },
    {
      type: "spotify",
      to: "https://open.spotify.com/album/1rlfbIuwhIcR6KK7z0YHtM",
    },
    {
      type: "itunes",
      to: "https://music.apple.com/jp/album/permanent-vacation-single/1825241486",
    },
    {
      type: "other",
      to: "https://artists.landr.com/990591890930",
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
