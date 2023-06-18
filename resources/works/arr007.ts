import { Work } from "~~/types/work";
import thumbnail from '~/assets/images/works/arr007/cover.jpg';
import { useWorkLink } from "~~/composables/utils/useWorkLink";
import dayjs from "dayjs";

const id = 'birth-of-significance';

export const arr007: Work = {
  id,
  number: 'arr007',
  title: 'Birth of Significance',
  type: 'album',
  formats: ['cassette', 'streaming'],
  status: 'released',
  to: useWorkLink(id),
  thumbnail,
  description: [
    'Modern folk songs through home-recording. Our diverse team members infuse them with unique qualities through experimental methods that disregard traditional contexts and add a surreal atmosphere. They evoke a feeling between confusion and silence.',
    '自宅録音を基本にした実験音楽とモダンフォークの光輝なる融合。知る人ぞ知るエディットサイケバンドdrawing4-5を母体とするコレクティブ「Arrrepentimiento（アレペンティミエント）」初のフィジカルリリースは、ノイズ、コラージュ、フィールドレコーディングといった劇薬を日用品のように扱った当然の帰結としての事故音楽。混沌と沈黙の狭間を不穏に駆け抜けるモダンで捻れたフォークミュージック。'
  ],
  isPicked: true,
  releasedAt: dayjs('2020-11-30'),
  length: '13:00',
  tracks: [
    'Resonance',
    'Birds on the Moon',
    'One Day of the Optimist',
    'It Follows',
    'Sequence Is Ready',
    'Pollen',
  ],
  videos: [
    {
      title: 'Birds on the Moon',
      id: 'zv_cCaVGiug',
    },
  ],
  stores: [
    {
      label: 'のら珈琲',
      caption: '（秋田）',
      type: 'store',
      to: 'https://shop.nora-coffee.com/items/37502706',
      notAvailable: true,
    },
    {
      label: 'Record Shop Reconquista',
      type: 'store',
      to: 'https://www.reconquista.biz/SHOP/arr007.html',
      notAvailable: true,
    },
    {
      label: 'Marking Records',
      caption: '（松本）',
      type: 'store',
      to: 'https://shop.markingrecords.com/items/37215572',
      notAvailable: true,
    },
    {
      label: 'sone records',
      caption: '（浜松）',
      type: 'store',
      to: 'https://www.sonerecords.com/?pid=156191920',
    },
    {
      label: 'MarQ Coffee',
      caption: '（福井）',
      type: 'store',
      to: 'https://coffeemarq.wixsite.com/marqcoffee',
      notAvailable: true,
    },
    {
      type: 'bandcamp',
      to: 'https://arrrepentimiento.bandcamp.com/album/birth-of-significance',
    },
  ],
  streamings: [
    {
      type: 'bandcamp',
      to: 'https://arrrepentimiento.bandcamp.com/album/birth-of-significance',
    },
    {
      type: 'spotify',
      to: 'https://open.spotify.com/album/7F3Vw6iiexO7RuNMvovVGF',
    },
    {
      type: 'itunes',
      to: 'https://music.apple.com/us/album/birth-of-significance-ep/1539766727?uo=4&app=music',
    },
    {
      type: 'other',
      to: 'https://artists.landr.com/672985604100',
    }
  ],
}