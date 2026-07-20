import type { Work } from '~/types/work';
import * as s from './card.css';

export default function CardWork({ work }: { work: Work }) {
  if (!work) return null;
  return (
    <div className={s.work}>
      {work.thumbnail ? (
        <div className={s.workThumbnail}>
          <img src={work.thumbnail} alt={work.title} />
        </div>
      ) : (
        <div className={`${s.workThumbnail} ${s.workThumbnailNoImage}`} />
      )}
      <div className={s.workContent}>
        <small>{work.number}</small>
        <h3 className={s.workTitle}>{work.title}</h3>
      </div>
    </div>
  );
}
