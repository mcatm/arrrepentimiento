import { BlockMain, BlockLabel } from '~/components/block';
import Hero from '~/components/organism/Hero';
import PostList from '~/components/organism/PostList';
import WorkList from '~/components/organism/WorkList';
import PageHead from '~/components/PageHead';

export default function Home() {
  return (
    <>
      <PageHead />
      <BlockMain>
        <Hero />
        <BlockLabel>News</BlockLabel>
        <PostList isPickedOnly />
        <BlockLabel>Latest Works</BlockLabel>
        <WorkList isPickedOnly />
      </BlockMain>
    </>
  );
}
