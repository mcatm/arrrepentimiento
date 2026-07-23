import { useParams } from 'react-router-dom';
import { BlockMain } from '~/components/block';
import { Container } from '~/components/Container';
import Heading from '~/components/organism/Heading';
import WorkDetail from '~/components/organism/WorkDetail';
import PageHead from '~/components/PageHead';
import { WorkList } from '~/components/WorkList';
import { getWork } from '~/lib/data';
import NotFound from './NotFound';

export default function WorkPage() {
  const { id = '' } = useParams();
  const work = getWork(id);

  if (!work) return <NotFound />;

  return (
    <Container>
      <PageHead title={work.title} />
      <BlockMain>
        <Heading />
        <WorkDetail work={work} />
        <WorkList excerptIds={[id]} />
      </BlockMain>
    </Container>
  );
}
