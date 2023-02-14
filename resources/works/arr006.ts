import { Work } from "~~/types/work";
import thumbnail from '~/assets/images/works/arr006/cover.jpg';
import { useWorkLink } from "~~/composables/utils/useWorkLink";
import dayjs from "dayjs";

const id = 'hypnotical-hydro-research-2';

export const arr006: Work = {
  id,
  number: 'arr006',
  title: 'Hypnotical Hydro Research #2',
  type: 'single',
  formats: ['streaming'],
  status: 'released',
  to: useWorkLink(id),
  thumbnail,
  // isDrafted: true,
  releasedAt: dayjs('2020-06-21'),
  tracks: [
    'A Flood',
    'Caught You, Caught Me',
    'Aims Against Me',
  ],
}