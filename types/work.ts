import { Dayjs } from 'dayjs';
import { Link } from './link';
import { Track } from "./track";

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
  description?: string[];
  thumbnail?: string;
  length?: string;
  tracks?: Track[];
  streamings?: Link[];
  stores?: Link[];
  releasedAt: Dayjs;
  isDrafted?: boolean;
  isPicked?: boolean;
}