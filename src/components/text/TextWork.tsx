import LinkByType from '~/components/card/LinkByType';
import TrackList from '~/components/organism/TrackList';
import SmartLink from '~/components/SmartLink';
import { getWork } from '~/lib/data';
import type { TextLineWork } from '~/types/text';
import * as s from './text.css';

export default function TextWork({ line }: { line: TextLineWork }) {
  const work = getWork(line.id);
  if (!work) return null;

  const stores = (work.stores || []).filter((store) => !store.notAvailable);

  return (
    <div className={s.work}>
      <p className={s.workNumber}>{work.number}</p>
      {work.to ? (
        <div className={s.workTitle}>
          <SmartLink to={work.to}>{work.title}</SmartLink>
        </div>
      ) : (
        <div className={s.workTitle}>{work.title}</div>
      )}
      <div className={s.content}>
        <div className={s.side}>
          {work.thumbnail && (
            <div className={s.thumbnail}>
              <img src={work.thumbnail} alt={work.title} />
            </div>
          )}
          {stores.length > 0 && (
            <div className={s.links}>
              <h4 className={s.linksLabel}>Stores</h4>
              <ul>
                {stores.map((link, i) => (
                  <li key={i}>
                    <LinkByType link={link} />
                  </li>
                ))}
              </ul>
            </div>
          )}
          {work.streamings && work.streamings.length > 0 && (
            <div className={s.links}>
              <h4 className={s.linksLabel}>Streaming</h4>
              <ul>
                {work.streamings.map((link, i) => (
                  <li key={i}>
                    <LinkByType link={link} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className={s.stats}>
          {work.tracks && <TrackList tracks={work.tracks} className={s.tracksSpacing} />}
        </div>
      </div>
    </div>
  );
}
