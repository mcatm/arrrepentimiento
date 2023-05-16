export type TextLine = string | {
  type: 'paragraph' | 'heading';
  value: string;
};