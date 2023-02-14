import { Work } from "~~/types/work";
import thumbnail from '~/assets/images/works/arr003/cover.jpg';
import { useWorkLink } from "~~/composables/utils/useWorkLink";
import dayjs from "dayjs";

const id = 'rewind-the-sun-first';

export const arr003: Work = {
  id,
  number: 'arr003',
  title: 'Rewind the Sun',
  type: 'single',
  formats: ['streaming'],
  status: 'released',
  to: useWorkLink(id),
  thumbnail,
  // isDrafted: true,
  streamings: [
    {
      type: 'bandcamp',
      to: 'https://arrrepentimiento.bandcamp.com/album/rewind-the-sun',
    },
    {
      type: 'spotify',
      to: 'https://open.spotify.com/album/4Mdy9kFb0gEzycRzjoYwIS',
    },
    {
      type: 'itunes',
      to: 'https://geo.music.apple.com/album/rewind-the-sun-single/1375802349?uo=5&app=music',
    },
    {
      type: 'other',
      to: 'https://artists.landr.com/800739477612',
    },
  ],
  releasedAt: dayjs('2018-04-23'),
  tracks: [
    'Rewind the Sun',
    'Duty Sleeps Well',
  ],
}