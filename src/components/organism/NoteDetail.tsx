import { BlockTitle } from '~/components/block';
import TextRenderer from '~/components/text/TextRenderer';
import type { Article } from '~/types/article';
import * as s from './organism.css';

export default function NoteDetail({ note }: { note: Article }) {
  if (!note) return null;
  return (
    <div className={s.detail}>
      <BlockTitle>{note.title}</BlockTitle>
      <div className={s.content}>
        {note.contents && (
          <div className="article">
            <TextRenderer lines={note.contents} />
          </div>
        )}
      </div>
    </div>
  );
}
