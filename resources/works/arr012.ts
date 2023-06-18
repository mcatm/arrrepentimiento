﻿import { Work } from "~~/types/work";
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
      to: 'https://arrrepentimiento.bandcamp.com/',
      notAvailable: true,
    },
  ],
  // streamings: [
  //   {
  //     type: 'bandcamp',
  //     to: 'https://arrrepentimiento.bandcamp.com/album/birth-of-significance',
  //   },
  //   {
  //     type: 'spotify',
  //     to: 'https://open.spotify.com/album/7F3Vw6iiexO7RuNMvovVGF',
  //   },
  //   {
  //     type: 'itunes',
  //     to: 'https://music.apple.com/us/album/birth-of-significance-ep/1539766727?uo=4&app=music',
  //   },
  //   {
  //     type: 'other',
  //     to: 'https://artists.landr.com/672985604100',
  //   }
  // ],
}