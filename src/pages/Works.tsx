import { BlockMain, BlockTitle } from '~/components/block';
import { Container } from '~/components/Container';
import Heading from '~/components/organism/Heading';
import PageHead from '~/components/PageHead';
import { WorkList } from '~/components/WorkList';

export default function Works() {
  return (
    <Container>
      <PageHead title="Works" />
      <BlockMain>
        <Heading />
        <BlockTitle>Works</BlockTitle>
        <WorkList />
      </BlockMain>
    </Container>
  );
}
