import { Dayjs } from 'dayjs';
import { Link } from './link';
import { Track } from "./track";
import { TextLine } from './text';
import { Video } from './video';

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
}