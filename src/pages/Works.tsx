import { BlockMain, BlockTitle } from '~/components/block';
import Heading from '~/components/organism/Heading';
import WorkList from '~/components/organism/WorkList';
import PageHead from '~/components/PageHead';

export default function Works() {
  return (
    <>
      <PageHead title="Works" />
      <BlockMain>
        <Heading />
        <BlockTitle>Works</BlockTitle>
        <WorkList />
      </BlockMain>
    </>
  );
}
