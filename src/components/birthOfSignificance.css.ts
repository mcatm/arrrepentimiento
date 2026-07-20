import { globalStyle, style } from '@vanilla-extract/css';
import { color, font, spQuery } from '~/styles/theme.css';

export const notification = style({
  marginBottom: '80px',
  border: `3px solid ${color.yellow}`,
  padding: '25px',
  position: 'relative',
});

export const image = style({
  position: 'absolute',
  width: '400px',
  top: '-60px',
  right: '-30px',
  margin: 0,
  '@media': {
    [spQuery]: {
      position: 'absolute',
      top: '-60px',
      right: 0,
      left: '25px',
    },
  },
});

globalStyle(`${image} a > img`, {
  maxWidth: '100%',
});

export const text = style({
  '@media': {
    [spQuery]: {
      paddingTop: '200px',
    },
  },
});

export const title = style({
  margin: '0 0 15px',
  lineHeight: 1.4,
  fontFamily: font.rich,
});

globalStyle(`${title} a`, {
  color: color.yellow,
});

globalStyle(`${title} > small`, {
  display: 'block',
  fontSize: '0.6em',
});

export const linksList = style({
  margin: 0,
  padding: 0,
});

globalStyle(`${linksList} > li`, {
  display: 'inline-block',
  listStyle: 'none',
  marginRight: '10px',
});
