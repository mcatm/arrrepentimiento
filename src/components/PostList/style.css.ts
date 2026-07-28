import { globalStyle, style } from '@vanilla-extract/css';
import { color } from '~/styles/theme.css';

export const container = style({
  padding: 0,
  margin: '0 0 30px',
});

globalStyle(`${container} > li`, {
  borderBottom: `1px solid ${color.gray}`,
  listStyle: 'none',
  padding: 0,
});

globalStyle(`${container} > li:first-child`, {
  borderTop: `1px solid ${color.gray}`,
});

globalStyle(`${container} > li > a`, {
  textDecoration: 'none',
  display: 'block',
  color: color.black,
});

globalStyle(`${container} > li > a:hover`, {
  color: color.yellow,
});
