import { Dayjs } from "dayjs";
import { TextLine } from "./text";

export type PostCategory = "show";

export type Info = {
  label: "Date" | "At" | "Act";
  value: string;
  url?: string;
  isBold?: boolean;
  onList?: boolean;
};

export type Post = {
  id: string;
  title: string;
  contents?: TextLine[];
  categories: PostCategory[];
  to: string;
  thumbnail?: string;
  isDrafted?: boolean;
  isPicked?: boolean;
  info: Info[];
};
