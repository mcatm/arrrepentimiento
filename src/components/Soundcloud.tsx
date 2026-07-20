import type { TextLineSoundcloud } from '~/types/text';
import * as s from './media.css';

export default function Soundcloud({ line }: { line: TextLineSoundcloud }) {
  return (
    <div className={s.video}>
      <iframe
        width="100%"
        height="450"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={line.src}
      />
    </div>
  );
}
