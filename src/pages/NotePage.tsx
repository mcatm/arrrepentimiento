import { useParams } from 'react-router-dom';
import { BlockMain } from '~/components/block';
import { Container } from '~/components/Container';
import Heading from '~/components/organism/Heading';
import NoteDetail from '~/components/organism/NoteDetail';
import PageHead from '~/components/PageHead';
import { getNote } from '~/lib/data';
import NotFound from './NotFound';

export default function NotePage() {
  const { id = '' } = useParams();
  const note = getNote(id);

  if (!note) return <NotFound />;

  return (
    <Container>
      <PageHead title={note.title} />
      <BlockMain>
        <Heading />
        <NoteDetail note={note} />
      </BlockMain>
    </Container>
  );
}
