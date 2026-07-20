import type { Link } from '~/types/link';
import {
  IconBandcamp,
  IconSpotify,
  IconITunes,
  IconStore,
  IconExternalLink,
} from '~/components/icons';
import * as s from './card.css';

const iconFor = (type: Link['type']) => {
  switch (type) {
    case 'bandcamp':
      return <IconBandcamp />;
    case 'spotify':
      return <IconSpotify />;
    case 'itunes':
      return <IconITunes />;
    case 'store':
      return <IconStore />;
    default:
      return <IconExternalLink />;
  }
};

const labelFor = (link: Link) => {
  if (link.label) return link.label;
  switch (link.type) {
    case 'bandcamp':
      return 'Bandcamp';
    case 'spotify':
      return 'Spotify';
    case 'itunes':
      return 'Apple Music';
    default:
      return 'Other Platform';
  }
};

export default function LinkByType({ link }: { link: Link }) {
  if (!link) return null;
  return (
    <a href={link.to} target="_blank" rel="noopener noreferrer" className={s.linkAnchor}>
      {iconFor(link.type)} {labelFor(link)}
      {link.caption && <small className={s.caption}>{link.caption}</small>}
    </a>
  );
}
