import { Work } from "~~/types/work";
import thumbnail from '~/assets/images/works/arr004/cover.jpg';
import { useWorkLink } from "~~/composables/utils/useWorkLink";
import dayjs from "dayjs";

const id = 'hypnotical-hydro-research-1';

export const arr004: Work = {
  id,
  number: 'arr004',
  title: 'Hypnotical Hydro Research #1',
  type: 'single',
  formats: ['streaming'],
  status: 'released',
  to: useWorkLink(id),
  thumbnail,
  streamings: [
    {
      type: 'bandcamp',
      to: 'https://arrrepentimiento.bandcamp.com/album/hypnotical-hydro-research-1',
    },
    {
      type: 'spotify',
      to: 'https://open.spotify.com/album/03N3x6YXZ2XtPTE3CHCYX6',
    },
    {
      type: 'itunes',
      to: 'https://geo.music.apple.com/album/hypnotical-hydro-research-1-single/1390677738?uo=5&app=music',
    },
    {
      type: 'other',
      to: 'https://artists.landr.com/800739541962'
    },
  ],
  releasedAt: dayjs('2018-05-28'),
  tracks: [
    'Orthogonally Dialog',
    'Surrendering the Cloud',
  ],
}