import { Video } from "./video";

export type TextLine =
  | TextLineParagraph
  | TextLineImage
  | TextLineList
  | TextLineLink
  | TextLineWork
  | TextLineDelimiter
  | TextLineYoutube
  | TextLineSoundcloud;

export type TextLineParagraph =
  | string
  | {
      type: "paragraph" | "heading" | "subheading";
      value: string;
    };

export type TextLineImage = {
  type: "image";
  value: string;
};

export type TextLineList = {
  type: "list";
  values: string[];
};

export type TextLineLink = {
  type: "link";
  src: string;
  label?: string;
  target?: "_blank" | "_self";
};

export type TextLineWork = {
  type: "work";
  id: string;
};

export type TextLineDelimiter = {
  type: "delimiter";
};

export type TextLineYoutube = Video & {
  type: "youtube";
};

export type TextLineSoundcloud = {
  type: "soundcloud";
  src: string;
};
