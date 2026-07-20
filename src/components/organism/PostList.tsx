import { getPosts } from '~/lib/data';
import type { PostCategory } from '~/types/post';
import SmartLink from '~/components/SmartLink';
import CardPost from '~/components/card/CardPost';
import * as s from './organism.css';

export default function PostList({
  isPickedOnly,
  filterCategory,
  excerptIds,
}: {
  isPickedOnly?: boolean;
  filterCategory?: PostCategory;
  excerptIds?: string[];
}) {
  const posts = getPosts().filter(
    (post) =>
      (!excerptIds || !excerptIds.includes(post.id)) &&
      (!isPickedOnly || post.isPicked) &&
      (!filterCategory || post.categories.includes(filterCategory)),
  );

  return (
    <ul className={s.postList}>
      {posts.map((post, i) => (
        <li key={`post-${i}-${post.id}`}>
          {post.to && (
            <SmartLink to={post.to}>
              <CardPost post={post} />
            </SmartLink>
          )}
        </li>
      ))}
    </ul>
  );
}
