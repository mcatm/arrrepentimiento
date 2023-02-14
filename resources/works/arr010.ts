import { Work } from "~~/types/work";
import thumbnail from '~/assets/images/works/arr010/cover.png';
import { useWorkLink } from "~~/composables/utils/useWorkLink";
import dayjs from "dayjs";

const id = 'rewind-the-sun';

export const arr010: Work = {
  id,
  number: 'arr010',
  title: 'Rewind The Sun',
  type: 'single',
  formats: ['streaming'],
  status: 'released',
  to: useWorkLink(id),
  thumbnail,
  streamings: [
    {
      type: 'bandcamp',
      to: 'https://arrrepentimiento.bandcamp.com/album/rewind-the-sun-2',
    },
    {
      type: 'spotify',
      to: 'https://open.spotify.com/album/6v27zuYnYhsgf5Q4wXHl7T'
    },
    {
      type: 'itunes',
      to: 'https://geo.music.apple.com/album/rewind-the-sun-single/1643521532?app=music',
    },
    {
      type: 'other',
      to: 'https://artists.landr.com/692531897503',
    },
  ],
  isPicked: true,
  releasedAt: dayjs('2022-09-05'),
  tracks: [
    'Rewind The Sun',
  ],
}