import tape from '~/assets/images/works/arr007/tape.png';
import { image, linksList, notification, text, title } from './birthOfSignificance.css';

const ext = (href: string, label: string) => (
  <li key={href}>
    <a href={href} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  </li>
);

export default function BirthOfSignificance() {
  return (
    <section className={notification}>
      <p className={image}>
        <a
          href="https://arrrepentimiento.bandcamp.com/album/birth-of-significance"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={tape} alt="Birth of Significance" />
        </a>
      </p>
      <div className={text}>
        <h1 className={title}>
          <a
            href="https://artist.landr.com/music/672985604100"
            target="_blank"
            rel="noopener noreferrer"
          >
            Birth of Significance
          </a>
          <small>Available Now</small>
        </h1>
        <ul className={linksList}>
          {ext('https://arrrepentimiento.bandcamp.com/album/birth-of-significance', 'Bandcamp')}
          {ext('https://open.spotify.com/album/7F3Vw6iiexO7RuNMvovVGF', 'Spotify')}
          {ext(
            'https://music.apple.com/us/album/birth-of-significance-ep/1539766727?uo=4&app=music',
            'Apple Music',
          )}
          {ext('https://artist.landr.com/music/672985604100', 'Other Platforms')}
        </ul>
      </div>
    </section>
  );
}
