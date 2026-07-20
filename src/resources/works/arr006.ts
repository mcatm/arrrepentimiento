import dayjs from 'dayjs';
import thumbnail from '~/assets/images/works/arr006/cover.jpg';
import { workLink } from '~/lib/links';
import type { Work } from '~/types/work';

const id = 'hypnotical-hydro-research-2';

export const arr006: Work = {
  id,
  number: 'arr006',
  title: 'Hypnotical Hydro Research #2',
  type: 'single',
  formats: ['streaming'],
  status: 'released',
  to: workLink(id),
  thumbnail,
  // isDrafted: true,
  releasedAt: dayjs('2020-06-21'),
  tracks: ['A Flood', 'Caught You, Caught Me', 'Aims Against Me'],
  videos: [
    {
      title: 'Caught You, Caught Me',
      id: 'gyEci7b38oM',
    },
  ],
};
