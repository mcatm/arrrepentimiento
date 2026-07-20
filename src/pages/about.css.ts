import { style, globalStyle } from '@vanilla-extract/css';
import { color, font, spQuery } from '~/styles/theme.css';

export const heading = style({
  margin: 0,
  color: color.yellow,
});

export const brand = style({
  fontFamily: font.rich,
  fontSize: '3.2rem',
  margin: 0,
  lineHeight: 1,
});

globalStyle(`${brand} a`, {
  textDecoration: 'none',
  color: color.yellow,
});

globalStyle(`${brand} a:hover`, {
  color: color.red,
});

export const subtitle = style({
  fontFamily: font.normal,
  fontSize: '0.8rem',
  margin: 0,
});

export const copy = style({
  fontSize: '0.8rem',
});

globalStyle(`${copy} em`, {
  fontSize: '1.1rem',
  fontStyle: 'normal',
  fontWeight: 900,
});

export const columns = style({
  padding: '0 0 80px',
});

export const column = style({
  width: '50%',
  padding: '0 40px',
  selectors: {
    '&:first-child': {
      paddingLeft: 0,
    },
    '&:last-child': {
      paddingRight: 0,
    },
  },
  '@media': {
    [spQuery]: {
      width: '100%',
      padding: '0 0 30px',
    },
  },
});

globalStyle(`${column} p`, {
  margin: 0,
  padding: '0 0 20px',
});

globalStyle(`${column} p.en`, {
  lineHeight: 1.8,
  fontSize: '1.1em',
  textAlign: 'justify',
});

globalStyle(`${column} p.ja`, {
  lineHeight: 1.6,
});

export const img = style({
  '@media': {
    [spQuery]: {
      maxHeight: '300px',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
});

globalStyle(`${img} > img`, {
  maxWidth: '100%',
  maxHeight: '100%',
  width: 'auto',
  height: 'auto',
});
