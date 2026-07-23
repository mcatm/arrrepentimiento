// import collage from '~/assets/images/collages/001.jpg';
import { BlockHero } from '~/components/block';
import { externalLinks as links } from '~/resources/links';
import * as s from './style.css';

export const Hero = () => {
  return (
    <BlockHero>
      <div className={s.container}>
        <div className={s.inner}>
          <h1 className={s.title}>Arrrepentimiento</h1>
          <ul className={s.menu}>
            {links.map((link) => (
              <li key={link.url}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <BlockImage>
        <img src={collage} alt="Arrrepentimiento" />
      </BlockImage> */}
      <div className={s.image} />
    </BlockHero>
  );
};
