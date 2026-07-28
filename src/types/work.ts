import type { Dayjs } from 'dayjs';
import type { Link } from './link';
import type { TextLine } from './text';
import type { Track } from './track';
import type { Video } from './video';

type WorkFormat = 'streaming' | 'cassette' | '7inch' | '12inch';
type WorkStatus = 'released' | 'pre-release' | 'demo';

export type Work = {
  id: string;
  number: string;
  title: string;
  type: 'album' | 'ep' | 'single' | 'archive';
  status: WorkStatus;
  formats: WorkFormat[];
  to?: string;
  description?: TextLine[];
  thumbnail?: string;
  length?: string;
  tracks?: Track[];
  videos?: Video[];
  streamings?: Link[];
  stores?: Link[];
  releasedAt?: Dayjs;
  releaseDateFormat?: string;
  isDrafted?: boolean;
  isPicked?: boolean;
  articles?: Link[];
};
