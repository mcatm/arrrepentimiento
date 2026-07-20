import { style, globalStyle } from '@vanilla-extract/css';

export const video = style({
  position: 'relative',
  display: 'block',
  width: '100%',
  paddingTop: '56.25%',
});

globalStyle(`${video} > iframe`, {
  position: 'absolute',
  top: 0,
  right: 0,
  width: '100% !important',
  height: '100% !important',
});
