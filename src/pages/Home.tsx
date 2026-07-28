import { useMemo } from 'react';
import { BlockLabel, BlockMain } from '~/components/block';
import { Container } from '~/components/Container';
import { Hero } from '~/components/Hero';
import PageHead from '~/components/PageHead';
import { PostList } from '~/components/PostList';
import { WorkList } from '~/components/WorkList';
import { getPosts } from '~/lib/data';

export default function Home() {
  const posts = useMemo(() => getPosts().filter((post) => post.isPicked), []);

  return (
    <>
      <PageHead />
      <BlockMain>
        <Hero />
        <Container>
          {posts.length > 0 && (
            <>
              <BlockLabel>News</BlockLabel>
              <PostList posts={posts} isPickedOnly />
            </>
          )}
          <BlockLabel>Latest Works</BlockLabel>
          <WorkList isPickedOnly />
        </Container>
      </BlockMain>
    </>
  );
}
