import { Work } from "~~/types/work";
import thumbnail from '~/assets/images/works/arr008/cover.jpg';
import { useWorkLink } from "~~/composables/utils/useWorkLink";
import dayjs from "dayjs";

const id = 'syllable-1';

export const arr008: Work = {
  id,
  number: 'arr008',
  title: 'Syllable #1',
  type: 'single',
  formats: ['streaming'],
  status: 'released',
  to: useWorkLink(id),
  thumbnail,
  streamings: [
    {
      type: 'bandcamp',
      to: 'https://arrrepentimiento.bandcamp.com/album/syllable-1',
    },
    {
      type: 'spotify',
      to: 'https://open.spotify.com/album/7mFKYd8NVH5iSeT57ZHSCX',
    },
    {
      type: 'itunes',
      to: 'https://geo.music.apple.com/album/syllable-1-single/1604548486?app=music',
    },
    {
      type: 'other',
      to: 'https://artists.landr.com/692531292926',
    },
  ],
  isPicked: false,
  releasedAt: dayjs('2022-01-27'),
  tracks: [
    'Your Property',
    'Sort of Tautology',
  ],
}