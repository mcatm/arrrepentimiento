import { style } from '@vanilla-extract/css';
import { color, font } from '~/styles/theme.css';

export const wrapper = style({
  position: 'fixed',
  top: 0,
  right: '20px',
});

export const button = style({
  padding: '4px 12px',
  fontSize: '1rem',
  fontFamily: font.rich,
  borderRadius: 0,
  border: 0,
  outline: 'none',
  backgroundColor: color.gray,
  ':hover': {
    cursor: 'pointer',
    backgroundColor: color.yellow,
  },
});
