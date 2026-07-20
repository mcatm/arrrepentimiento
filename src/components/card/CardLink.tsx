import type { Link } from '~/types/link';
import SmartLink from '~/components/SmartLink';
import * as s from './card.css';

export default function CardLink({ link }: { link: Link }) {
  if (!link) return null;

  const labels: string[] = [];
  if (link.sitename) labels.push(link.sitename);
  if (link.label) labels.push(link.label);
  const label = labels.join(' - ') || link.to;

  return (
    <SmartLink to={link.to} className={s.linkAnchor}>
      {label}
      {link.caption && <small className={s.caption}>{link.caption}</small>}
    </SmartLink>
  );
}
