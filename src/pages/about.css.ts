import { globalStyle, style } from '@vanilla-extract/css';
import { color, font, spQuery, width } from '~/styles/theme.css';

export const heroContainer = style({
  position: 'absolute',
  zIndex: 100,
  // left: 0,
  // bottom: 40,
  // padding: '120px 0 80px',
  margin: '0 auto',
  width: '100dvw',
  height: 'calc(100dvh - 40px)',
  maxWidth: width.mainL,
  bottom: 40,
  // backgroundColor: color.white,
  '@media': {
    [spQuery]: {
      width: '90%',
    },
  },
});

export const heroImage = style({
  width: '100%',
  maxHeight: '100dvh',
  position: 'absolute',
  bottom: 0,
  left: 0,
});

globalStyle(`${heroImage} > img`, {
  width: '100%',
  height: 'auto',
});

export const heading = style({
  margin: 0,
  color: color.yellow,
  fontWeight: 800,
  position: 'absolute',
  bottom: 20,
});

export const brand = style({
  fontFamily: font.rich,
  fontSize: `clamp(1rem, calc(5cqw + 1.5rem), 6.25vw)`,
  margin: 0,
  lineHeight: 1,
});

globalStyle(`${brand} a, ${brand} a:visited`, {
  textDecoration: 'none',
  color: color.yellow,
});

globalStyle(`${brand} a:hover`, {
  color: color.red,
});

export const subtitle = style({
  fontFamily: font.normal,
  fontSize: '1rem',
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
