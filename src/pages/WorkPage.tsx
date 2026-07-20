import { useParams } from 'react-router-dom';
import { getWork } from '~/lib/data';
import { BlockMain } from '~/components/block';
import Heading from '~/components/organism/Heading';
import WorkDetail from '~/components/organism/WorkDetail';
import WorkList from '~/components/organism/WorkList';
import PageHead from '~/components/PageHead';
import NotFound from './NotFound';

export default function WorkPage() {
  const { id = '' } = useParams();
  const work = getWork(id);

  if (!work) return <NotFound />;

  return (
    <>
      <PageHead title={work.title} />
      <BlockMain>
        <Heading />
        <WorkDetail work={work} />
        <WorkList excerptIds={[id]} />
      </BlockMain>
    </>
  );
}
