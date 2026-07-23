/* ---- WorkList / PostList ---- */

import { globalStyle, style } from '@vanilla-extract/css';
import { color } from '~/styles/theme.css';

export const list = style({
  padding: 0,
  margin: '0 0 30px',
});

globalStyle(`${list} > li`, {
  borderBottom: `1px solid ${color.gray}`,
  listStyle: 'none',
  padding: 0,
});

globalStyle(`${list} > li:first-child`, {
  borderTop: `1px solid ${color.gray}`,
});

globalStyle(`${list} > li > a`, {
  textDecoration: 'none',
  display: 'block',
});
