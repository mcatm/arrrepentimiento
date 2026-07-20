import { useParams } from 'react-router-dom';
import { getNote } from '~/lib/data';
import { BlockMain } from '~/components/block';
import Heading from '~/components/organism/Heading';
import NoteDetail from '~/components/organism/NoteDetail';
import PageHead from '~/components/PageHead';
import NotFound from './NotFound';

export default function NotePage() {
  const { id = '' } = useParams();
  const note = getNote(id);

  if (!note) return <NotFound />;

  return (
    <>
      <PageHead title={note.title} />
      <BlockMain>
        <Heading />
        <NoteDetail note={note} />
      </BlockMain>
    </>
  );
}
