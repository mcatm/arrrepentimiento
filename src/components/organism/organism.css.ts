import { globalStyle, style } from '@vanilla-extract/css';
import { color, font, spQuery } from '~/styles/theme.css';

/* ---- TrackList ---- */

export const tracks = style({
  listStyle: 'none',
  padding: 0,
  borderRight: `solid 1px ${color.gray}`,
  borderLeft: `solid 1px ${color.gray}`,
  borderBottom: `solid 1px ${color.gray}`,
});

globalStyle(`${tracks} > li`, {
  padding: '12px 12px 12px 24px',
  borderTop: `solid 1px ${color.gray}`,
  fontSize: '20px',
});

globalStyle(`${tracks} > li small`, {
  fontSize: '0.6em',
});

/* ---- Heading (brand) ---- */

export const brand = style({
  margin: 0,
});

globalStyle(`${brand} a, ${brand} a:visited`, {
  color: color.gray,
  textDecoration: 'none',
});

globalStyle(`${brand} a:hover`, {
  color: color.yellow,
});

/* ---- Footer ---- */

export const footerContainer = style({
  display: 'flex',
  paddingTop: '80px',
});

export const footerColumn = style({
  padding: '0 50px 0 0',
  margin: 0,
});

globalStyle(`${footerColumn} > li`, {
  fontFamily: font.rich,
  listStyle: 'none',
});

export const footerInternal = style({
  fontSize: '1rem',
});

export const footerExternal = style({
  fontSize: '0.84rem',
});

globalStyle(`${footerExternal} a, ${footerExternal} a:visited`, {
  color: color.yellow,
});

globalStyle(`${footerExternal} a:hover`, {
  color: color.yellow,
});

globalStyle(`${footerColumn} a.active`, {
  color: color.gray,
  textDecoration: 'none',
});

/* ---- Detail (Work / Post / Note) shared ---- */

export const detail = style({
  paddingBottom: '80px',
});

export const detailHeading = style({
  fontSize: '2.6rem',
});

export const content = style({
  fontFamily: font.rich,
  display: 'flex',
  marginBottom: '25px',
  '@media': {
    [spQuery]: {
      flexDirection: 'column',
    },
  },
});

export const side = style({
  width: '360px',
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

globalStyle(`${stats} p`, {
  margin: 0,
  paddingBottom: '12px',
});

export const thumbnail = style({
  lineHeight: 1,
  width: '360px',
  border: `solid 1px ${color.gray}`,
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

export const description = style({
  marginBottom: '20px',
  fontFamily: font.normal,
  fontSize: '14px',
});

globalStyle(`${description} p`, {
  paddingBottom: '20px',
});

export const articleBody = style({
  marginBottom: '20px',
  fontFamily: font.normal,
  fontSize: '14px',
});

globalStyle(`${articleBody} p`, {
  paddingBottom: '20px',
});

export const number = style({
  margin: '0 0 20px',
});

export const tracksSpacing = style({
  margin: '0 0 20px',
});

export const links = style({
  margin: 0,
  paddingTop: '20px',
});

export const linksLabel = style({
  fontSize: '12px',
  lineHeight: 1,
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

export const videoList = style({});

globalStyle(`${videoList} > ul`, {
  listStyle: 'none',
  margin: '0 0 15px 0',
  padding: 0,
});

globalStyle(`${videoList} > ul > li`, {
  marginBottom: '10px',
});

export const data = style({
  fontFamily: font.normal,
  fontSize: '14px',
});

globalStyle(`${data} dt`, {
  float: 'left',
  clear: 'left',
  width: '80px',
  paddingRight: '12px',
});

globalStyle(`${data} dd`, {
  float: 'left',
});
