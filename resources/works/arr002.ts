import { Work } from "~~/types/work";
import thumbnail from '~/assets/images/works/arr002/cover.jpg';
import { useWorkLink } from "~~/composables/utils/useWorkLink";
import dayjs from "dayjs";

const id = 'live-at-newtown-2017';

export const arr002: Work = {
  id,
  number: 'arr002',
  title: 'Live at NEWTOWN 2017',
  type: 'archive',
  formats: ['streaming'],
  status: 'released',
  to: useWorkLink(id),
  thumbnail,
  // isDrafted: true,
  streamings: [
    {
      type: 'bandcamp',
      to: 'https://arrrepentimiento.bandcamp.com/album/live-at-newtown-2017-11-12',
    },
  ],
  releasedAt: dayjs('2017-11-18'),
  tracks: [
    'Cassandra',
    'Sleep in Your Arms Outside Your Home',
    'Cramps, Sticky and Solid',
    'Mosquito and Burrito',
    'Jagged Things',
    'The Depth of Meanings',
    'Next Morning Calvin Klein',
  ],
}