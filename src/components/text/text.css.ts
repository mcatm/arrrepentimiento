import { style, globalStyle } from '@vanilla-extract/css';
import { color, font, spQuery } from '~/styles/theme.css';

export const work = style({
  padding: '30px',
  border: `1px solid ${color.yellow}`,
  lineHeight: 1.4,
  margin: '0 0 40px',
});

export const workNumber = style({
  fontSize: '0.8rem',
  marginBottom: '5px',
  padding: 0,
});

export const workTitle = style({
  fontSize: '2.4rem',
  fontFamily: font.rich,
  marginBottom: '20px',
});

export const content = style({
  fontFamily: font.rich,
  display: 'flex',
  '@media': {
    [spQuery]: {
      flexDirection: 'column',
    },
  },
});

export const side = style({
  width: '280px',
  marginRight: '25px',
  flexShrink: 0,
  '@media': {
    [spQuery]: {
      width: '100%',
      marginBottom: '40px',
    },
  },
});

export const stats = style({
  width: '100%',
});

export const thumbnail = style({
  lineHeight: 1,
  width: '280px',
  '@media': {
    [spQuery]: {
      width: 'auto',
      maxWidth: '100%',
    },
  },
});

globalStyle(`${thumbnail} > img`, {
  width: '100%',
  height: 'auto',
});

export const links = style({
  margin: 0,
  paddingTop: '20px',
});

export const linksLabel = style({
  fontSize: '12px',
  lineHeight: 1,
  padding: 0,
  margin: '0 0 15px',
  opacity: 0.7,
});

globalStyle(`${links} ul`, {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  fontSize: '18px',
});

globalStyle(`${links} ul > li`, {
  paddingBottom: '10px',
});

export const tracksSpacing = style({
  margin: '0 0 20px',
});
