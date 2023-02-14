import { Work } from "~~/types/work";
import thumbnail from '~/assets/images/works/arr005/cover.jpg';
import { useWorkLink } from "~~/composables/utils/useWorkLink";
import dayjs from "dayjs";

const id = 'pollen';

export const arr005: Work = {
  id,
  number: 'arr005',
  title: 'Pollen',
  type: 'single',
  formats: ['streaming'],
  status: 'released',
  to: useWorkLink(id),
  thumbnail,
  streamings: [
    {
      type: 'bandcamp',
      to: 'https://arrrepentimiento.bandcamp.com/album/pollen',
    },
    {
      type: 'spotify',
      to: 'https://open.spotify.com/album/3vZ1IwifdC7XR7izGn2zx9',
    },
    {
      type: 'itunes',
      to: 'https://geo.music.apple.com/album/pollen-single/1482194965?uo=5&app=music',
    },
    {
      type: 'other',
      to: 'https://artists.landr.com/628810744442'
    },
  ],
  releasedAt: dayjs('2019-09-29'),
  tracks: [
    'Pollen',
  ],
}