import dayjs from 'dayjs';
import type { Work } from '~/types/work';
import { BlockTitle, BlockHeading } from '~/components/block';
import TextRenderer from '~/components/text/TextRenderer';
import TrackList from './TrackList';
import Video from '~/components/Video';
import LinkByType from '~/components/card/LinkByType';
import CardLink from '~/components/card/CardLink';
import * as s from './organism.css';

export default function WorkDetail({ work }: { work: Work }) {
  if (!work) return null;

  const stores = (work.stores || []).filter((store) => !store.notAvailable);

  return (
    <div className={s.detail}>
      <BlockTitle>{work.title}</BlockTitle>
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
          <p className={s.number}>{work.number}</p>
          {work.description && (
            <div className={s.description}>
              <TextRenderer lines={work.description} />
            </div>
          )}
          {work.tracks && <TrackList tracks={work.tracks} className={s.tracksSpacing} />}
          <dl className={s.data}>
            {work.releasedAt && (
              <>
                <dt>Released</dt>
                <dd>
                  {dayjs(work.releasedAt).format(work.releaseDateFormat || 'YYYY-MM-DD') ||
                    'Not Available'}
                </dd>
              </>
            )}
            {work.length && (
              <>
                <dt>Total Length</dt>
                <dd>{work.length || 'Not Available'}</dd>
              </>
            )}
          </dl>
        </div>
      </div>
      {work.videos && (
        <div className={s.videoList}>
          <ul>
            {work.videos.map((video, i) => (
              <li key={i}>
                <Video video={video} />
              </li>
            ))}
          </ul>
        </div>
      )}
      {work.articles && work.articles.length > 0 && (
        <div className="article">
          <BlockHeading>Reviews &amp; Articles</BlockHeading>
          <ul>
            {work.articles.map((article, i) => (
              <li key={i}>
                <CardLink link={article} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
