import { globalStyle } from '@vanilla-extract/css';
import bg from '~/assets/images/bg03.gif';
import { color, font, spQuery } from './theme.css';

globalStyle('html, body', {
  color: color.black,
  fontSize: '16px',
  fontFamily: font.normal,
  lineHeight: 1.8,
});

globalStyle('body::after', {
  content: '""',
  display: 'block',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: -1,
  width: '100%',
  height: '100vh',
  background: `url('${bg}') 50% 50% no-repeat`,
  backgroundSize: 'cover',
});

globalStyle('a, a:visited', {
  color: color.black,
  textDecoration: 'underline',
});

globalStyle('a:hover', {
  color: color.yellow,
  textDecoration: 'none',
});

/* ---- .article (WYSIWYG content) ---- */

globalStyle('.article', {
  fontFamily: font.normal,
});

globalStyle('.article h1, .article h2, .article h3, .article h4, .article h5, .article h6', {
  margin: 0,
  padding: '0 0 20px',
});

globalStyle('.article h1', {
  fontFamily: font.rich,
  fontSize: '4rem',
});

globalStyle('.article h2', {
  fontFamily: font.rich,
  fontSize: '2.2rem',
});

globalStyle('.article h3', {
  fontSize: '1.8rem',
});

globalStyle('.article h4', {
  fontSize: '1.4rem',
});

globalStyle('.article h5, .article h6', {
  fontSize: '1.2rem',
});

globalStyle('.article p', {
  margin: 0,
  padding: '0 0 20px',
});

globalStyle('.article hr', {
  border: 'none',
  width: '5vw',
  margin: '0 0 20px 0',
  backgroundColor: color.yellow,
  height: '1px',
  textAlign: 'left',
});

globalStyle('.article ul, .article ol, .article dl', {
  margin: 0,
  padding: '0 0 20px 30px',
});

globalStyle('.article li', {
  marginBottom: '5px',
});

globalStyle('.article li::marker', {
  fontSize: '.66em',
});

globalStyle('.article li > p', {
  padding: 0,
});

globalStyle('.article blockquote', {
  padding: '20px 20px 0',
  fontSize: '.84rem',
  border: `1px solid ${color.yellow}`,
  margin: '0 0 20px',
});

globalStyle('.article blockquote > p', {
  margin: 0,
  paddingBottom: '20px',
});

globalStyle('.article img', {
  maxWidth: '100%',
});

/* ---- .l-columns ---- */

globalStyle('.l-columns', {
  display: 'flex',
});

globalStyle('.l-columns', {
  '@media': {
    [spQuery]: {
      flexDirection: 'column',
    },
  },
});

globalStyle('.l-columns.reverse', {
  '@media': {
    [spQuery]: {
      flexDirection: 'column-reverse',
    },
  },
});

/* ---- .icon ---- */

globalStyle('.icon', {
  height: '1em',
  display: 'inline',
  verticalAlign: '-.125em',
});
