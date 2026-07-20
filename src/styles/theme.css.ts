// Design tokens ported from assets/scss/variables.scss.
// These are compile-time constants used inside vanilla-extract style() calls.

export const width = {
  main: '480px',
  mainL: '980px',
  gutter: '40px',
};

export const font = {
  normal: "'Noto Sans JP', sans-serif",
  rich: "'Ultra', serif",
};

export const color = {
  black: '#111111',
  white: '#EAEAEA',
  gray: 'rgba(255, 255, 255, .2)',
  red: '#e40101',
  orange: '#FF7800',
  blue: '#00ffdd',
  green: '#00B358',
  yellow: '#d6c031',
};

// breakpoint for smartphones: @media screen and (max-width: $width-main-l)
export const spQuery = `screen and (max-width: ${width.mainL})`;
