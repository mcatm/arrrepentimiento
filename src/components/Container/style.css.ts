import { style } from '@vanilla-extract/css';
import { spQuery, width } from '~/styles/theme.css';

export const container = style({
  position: 'relative',
  // padding: '120px 0 80px',
  margin: '0 auto',
  width: '80%',
  maxWidth: width.mainL,
  '@media': {
    [spQuery]: {
      width: '90%',
    },
  },
});
