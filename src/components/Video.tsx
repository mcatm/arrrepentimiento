import type { Video as VideoType } from '~/types/video';
import * as s from './media.css';

export default function Video({ video }: { video: VideoType }) {
  return (
    <div className={s.video}>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${video.id}`}
        title={video.title || 'video'}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
