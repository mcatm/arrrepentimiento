import type { Post } from '~/types/post';
import CardInfo from '~/components/card/CardInfo';
import TextRenderer from '~/components/text/TextRenderer';
import * as s from './organism.css';

export default function PostDetail({ post }: { post: Post }) {
  if (!post) return null;
  return (
    <div className={s.detail}>
      <h2 className={s.detailHeading}>{post.title}</h2>
      <CardInfo info={post.info} />
      <div className={s.content}>
        {post.contents && (
          <div className="article">
            <TextRenderer lines={post.contents} />
          </div>
        )}
      </div>
    </div>
  );
}
