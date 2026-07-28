/* ---- Hero ---- */

import { globalStyle, style } from '@vanilla-extract/css';
import img from '~/assets/images/hero_in-delirium.png';
import { font, spQuery, width } from '~/styles/theme.css';

export const container = style({
  position: 'relative',
  zIndex: 100,
  // left: 0,
  // bottom: 40,
  // padding: '120px 0 80px',
  margin: '0 auto',
  width: '80%',
  height: '100dvh',
  maxWidth: width.mainL,
  // backgroundColor: color.white,
  '@media': {
    [spQuery]: {
      width: '90%',
    },
  },
});

export const inner = style({
  position: 'absolute',
  zIndex: 100,
  left: 0,
  bottom: 60,
  // padding: '120px 0 80px',
  // margin: '0 auto',
  // width: '80%',
  // maxWidth: width.mainL,
  // backgroundColor: color.white,
  '@media': {
    [spQuery]: {
      left: 0,
      // width: '100%',
    },
  },
});

export const image = style({
  content: '""',
  display: 'block',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 0,
  width: '60dvw',
  height: '80dvh',
  background: `url('${img}') 0 0 no-repeat`,
  backgroundSize: 'contain',
});

export const title = style({
  // fontSize: '54px',
  fontSize: `clamp(1rem, calc(5cqw + 1.5rem), 6.25vw)`,
  textAlign: 'left',
  fontFamily: font.rich,
  margin: 0,
  lineHeight: 1.2,
  // backgroundColor: color.white,
  // '@media': {
  //   [spQuery]: {
  //     fontSize: '40px',
  //   },
  // },
});

export const menu = style({
  padding: 0,
  margin: 0,
  // margin: '0 0 80px',
  fontFamily: font.rich,
  display: 'flex',
  '@media': {
    [spQuery]: {
      flexDirection: 'column',
    },
  },
});

globalStyle(`${menu} > li`, {
  listStyle: 'none',
  paddingRight: '20px',
  fontSize: '1rem',
});

export const devider = style({
  width: '100%',
  position: 'absolute',
  bottom: 0,
  left: 0,
  zIndex: 1,
});
