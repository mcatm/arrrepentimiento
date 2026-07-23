import { globalStyle, style } from '@vanilla-extract/css';

export const video = style({
  position: 'relative',
  display: 'block',
  width: '100%',
  borderRadius: 16,
  overflow: 'hidden',
  paddingTop: '56.25%',
  ':hover': {
    cursor: 'pointer',
  },
});

globalStyle(`${video} > iframe`, {
  position: 'absolute',
  top: 0,
  right: 0,
  width: '100% !important',
  height: '100% !important',
  cursor: 'pointer',
});
