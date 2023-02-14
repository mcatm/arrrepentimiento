import { Work } from "~~/types/work";
import thumbnail from '~/assets/images/works/arr007/cover.jpg';
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
  description: [],
  isPicked: true,
  // isDrafted: true,
  releasedAt: dayjs('2023'),
  // length: '13:00',
  tracks: [],
  stores: [
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