import { Dayjs } from "dayjs";
import { TextLine } from "./text";

export type Article = {
  id: string;
  title: string;
  thumbnail?: string;
  createdAt?: Dayjs;
  isDrafted?: boolean;
  isPicked?: boolean;
  contents?: TextLine[];
}