import type { Info } from '~/types/post';
import * as s from './card.css';

export default function CardInfo({ info }: { info?: Info[] }) {
  const items = info || [];
  if (items.length === 0) return null;
  return (
    <ul className={s.info}>
      {items.map(({ label, value, url, isBold }, i) => (
        <li key={i}>
          <span className={s.infoLabel}>{label}:</span>
          {url ? (
            <a href={url} target="_blank" rel="noopener noreferrer">
              {isBold ? <strong>{value}</strong> : <span>{value}</span>}
            </a>
          ) : isBold ? (
            <strong>{value}</strong>
          ) : (
            <span>{value}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
