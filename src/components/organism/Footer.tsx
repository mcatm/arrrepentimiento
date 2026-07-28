import { NavLink } from 'react-router-dom';
import BirthOfSignificance from '~/components/BirthOfSignificance';
import { BlockFooter } from '~/components/block';
import { externalLinks, internalLinks } from '~/resources/links';
import { PostList } from '../PostList';
import * as s from './organism.css';

export default function Footer() {
  return (
    <BlockFooter>
      <PostList isPickedOnly={false} />
      <BirthOfSignificance />
      <div className={s.footerContainer}>
        <ul className={`${s.footerColumn} ${s.footerInternal}`}>
          {internalLinks.map((link) => (
            <li key={link.url}>
              <NavLink
                to={link.url}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
                end
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className={`${s.footerColumn} ${s.footerExternal}`}>
          {externalLinks.map((link) => (
            <li key={link.url}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </BlockFooter>
  );
}
