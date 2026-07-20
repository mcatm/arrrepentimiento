import { externalLinks as links } from '~/resources/links';
import { BlockHero, BlockImage } from '~/components/block';
import collage from '~/assets/images/collages/001.jpg';
import * as s from './organism.css';

export default function Hero() {
  return (
    <BlockHero>
      <h1 className={s.heroTitle}>Arrrepentimiento</h1>
      <ul className={s.heroMenu}>
        {links.map((link) => (
          <li key={link.url}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <BlockImage>
        <img src={collage} alt="Arrrepentimiento" />
      </BlockImage>
    </BlockHero>
  );
}
