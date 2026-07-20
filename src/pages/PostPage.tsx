import { useParams } from 'react-router-dom';
import { getPost } from '~/lib/data';
import { BlockMain } from '~/components/block';
import Heading from '~/components/organism/Heading';
import PostDetail from '~/components/organism/PostDetail';
import PageHead from '~/components/PageHead';
import NotFound from './NotFound';

export default function PostPage() {
  const { id = '' } = useParams();
  const post = getPost(id);

  if (!post) return <NotFound />;

  return (
    <>
      <PageHead title={post.title} />
      <BlockMain>
        <Heading />
        <PostDetail post={post} />
      </BlockMain>
    </>
  );
}
