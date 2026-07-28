import type { Dayjs } from 'dayjs';
import type { TextLine } from './text';

export type Article = {
  id: string;
  title: string;
  thumbnail?: string;
  createdAt?: Dayjs;
  isDrafted?: boolean;
  isPicked?: boolean;
  contents?: TextLine[];
};
