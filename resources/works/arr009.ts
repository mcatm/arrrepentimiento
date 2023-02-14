import { Work } from "~~/types/work";
import thumbnail from '~/assets/images/works/arr009/cover.jpg';
import { useWorkLink } from "~~/composables/utils/useWorkLink";
import dayjs from "dayjs";

const id = 'syllable-2';

export const arr009: Work = {
  id,
  number: 'arr009',
  title: 'Syllable #2',
  type: 'single',
  formats: ['streaming'],
  status: 'released',
  to: useWorkLink(id),
  thumbnail,
  isPicked: true,
  streamings: [
    {
      type: 'bandcamp',
      to: 'https://arrrepentimiento.bandcamp.com/album/syllable-2',
    },
    {
      type: 'spotify',
      to: 'https://open.spotify.com/album/6h1LiwhZNkgGbwkVHCxTVD',
    },
    {
      type: 'itunes',
      to: 'https://geo.music.apple.com/album/syllable-2-single/1618229587?app=music',
    },
    {
      type: 'other',
      to: 'https://artists.landr.com/692531462596',
    },
  ],
  // isDrafted: true,
  releasedAt: dayjs('2022-04-11'),
  tracks: [
    'The Wave',
    'After The Wave',
  ],
}