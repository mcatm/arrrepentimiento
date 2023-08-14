import { Work } from "~~/types/work";
import thumbnail from '~/assets/images/works/arr011/cover.jpg';
import { useWorkLink } from "~~/composables/utils/useWorkLink";

const id = 'syllable-3';

export const arr011: Work = {
  id,
  number: 'arr011',
  title: 'Syllable #3',
  type: 'single',
  thumbnail,
  formats: ['streaming'],
  status: 'pre-release',
  to: useWorkLink(id),
  streamings: [
    // {
    //   type: 'bandcamp',
    //   to: 'https://arrrepentimiento.bandcamp.com/album/syllable-1',
    // },
    // {
    //   type: 'spotify',
    //   to: 'https://open.spotify.com/album/7mFKYd8NVH5iSeT57ZHSCX',
    // },
    // {
    //   type: 'itunes',
    //   to: 'https://geo.music.apple.com/album/syllable-1-single/1604548486?app=music',
    // },
    // {
    //   type: 'other',
    //   to: 'https://artists.landr.com/692531292926',
    // },
  ],
  isPicked: false,
  // releasedAt: dayjs('2022-01-27'),
  tracks: [
    'Climb on a Bough',
    'Confession',
    'Toit Vert',
  ],
}