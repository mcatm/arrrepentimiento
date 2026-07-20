import { style, globalStyle } from '@vanilla-extract/css';
import { color, font, width, spQuery } from '~/styles/theme.css';

export const main = style({
  margin: '0 auto',
  width: '80%',
  padding: 0,
  maxWidth: width.mainL,
  '@media': {
    [spQuery]: {
      width: '90%',
    },
  },
});

export const hero = style({
  width: '100%',
  padding: '80px 0',
});

export const title = style({
  fontSize: '60px',
  margin: '0 0 80px',
  lineHeight: 1.4,
  fontFamily: font.rich,
  '@media': {
    [spQuery]: {
      fontSize: '54px',
      lineHeight: 1.2,
    },
  },
});

export const label = style({
  margin: 0,
  padding: '0 0 10px',
  fontFamily: font.rich,
  fontSize: '1.1rem',
  color: color.gray,
});

export const heading = style({
  fontFamily: font.rich,
  fontSize: '0.9rem',
  padding: '80px 0 0 0',
});

export const footer = style({
  padding: '120px 0 80px',
  margin: '0 auto',
  width: '80%',
  maxWidth: width.mainL,
  '@media': {
    [spQuery]: {
      width: '90%',
    },
  },
});

export const image = style({
  width: '100%',
});

globalStyle(`${image} > img`, {
  maxWidth: '100%',
  display: 'block',
  lineHeight: 1,
  margin: '0 auto',
});
