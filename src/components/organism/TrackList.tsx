import type { Track } from '~/types/track';
import * as s from './organism.css';

export default function TrackList({ tracks, className }: { tracks: Track[]; className?: string }) {
  if (!tracks) return null;
  return (
    <ol className={className ? `${s.tracks} ${className}` : s.tracks}>
      {tracks.map((track, i) => (
        <li key={i}>
          {typeof track === 'string' ? (
            <span>
              <small>{i + 1}.</small> {track}
            </span>
          ) : (
            <div>
              <small>{track.number || i + 1}</small> {track.title}
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}
