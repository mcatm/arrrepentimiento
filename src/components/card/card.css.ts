import { globalStyle, style } from '@vanilla-extract/css';
import { color, font, spQuery } from '~/styles/theme.css';

/* ---- link (shared by CardLink / CardLinkByType) ---- */

export const linkAnchor = style({
  textDecoration: 'none',
  color: color.yellow,
  ':hover': {
    color: color.red,
  },
});

export const caption = style({
  fontFamily: font.normal,
  fontSize: '12px',
});

/* ---- Work card ---- */

export const work = style({
  display: 'flex',
  alignItems: 'center',
});

export const workThumbnail = style({
  width: '180px',
  minHeight: '180px',
  lineHeight: 1,
  marginRight: '25px',
  flexShrink: 0,
  '@media': {
    [spQuery]: {
      width: '120px',
      minHeight: '120px',
    },
  },
});

export const workThumbnailNoImage = style({
  backgroundColor: color.red,
});

globalStyle(`${workThumbnail} > img`, {
  width: '100%',
  height: 'auto',
});

export const workContent = style({
  fontFamily: font.rich,
});

export const workTitle = style({
  fontSize: '40px',
  margin: 0,
  lineHeight: 1.4,
  '@media': {
    [spQuery]: {
      fontSize: '24px',
      lineHeight: 1.3,
    },
  },
});

globalStyle(`${workContent} > small`, {
  display: 'block',
  fontSize: '0.8rem',
  lineHeight: 1.2,
});

/* ---- Post card ---- */

export const post = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row-reverse',
  gap: '25px',
});

export const postThumbnail = style({
  width: '80px',
  lineHeight: 1,
  flexShrink: 0,
  padding: '20px 0 20px 20px',
  '@media': {
    [spQuery]: {
      width: '80px',
      minHeight: '80px',
    },
  },
});

export const postImage = style({
  width: '80px',
  height: '80px',
  borderRadius: '999px',
  overflow: 'hidden',
});

globalStyle(`${postImage} > img`, {
  width: '80px',
  objectFit: 'cover',
});

export const postNoImage = style({
  width: '80px',
  height: '80px',
  backgroundColor: color.yellow,
  margin: 0,
});

export const postContent = style({
  width: '100%',
});

export const postTitle = style({
  fontSize: '1.6rem',
  margin: 0,
  lineHeight: 1.6,
  '@media': {
    [spQuery]: {
      fontSize: '1.5rem',
      lineHeight: 1.3,
    },
  },
});

export const postInfo = style({
  fontSize: '0.8rem',
  margin: 0,
});

globalStyle(`${postInfo} > span, ${postInfo} > strong`, {
  marginRight: '10px',
});

/* ---- Info card ---- */

export const info = style({
  fontSize: '1.1rem',
  padding: 0,
  margin: '0 0 20px',
});

globalStyle(`${info} > li`, {
  marginRight: '10px',
  listStyle: 'none',
  padding: 0,
});

export const infoLabel = style({
  fontSize: '0.8rem',
  minWidth: '30px',
  marginRight: '12px',
  display: 'inline-block',
  fontWeight: 400,
});

globalStyle(`${info} > li > strong`, {
  fontWeight: 800,
});
