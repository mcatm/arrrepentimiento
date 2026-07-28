import type { FC } from 'react';
import CardPost from '~/components/card/CardPost';
import SmartLink from '~/components/SmartLink';
import { getPosts } from '~/lib/data';
import type { PostCategory } from '~/types/post';
import * as s from './style.css';

type Props = {
  posts?: ReturnType<typeof getPosts>;
  isPickedOnly?: boolean;
  filterCategory?: PostCategory;
  excerptIds?: string[];
};

export const PostList: FC<Props> = ({
  posts: initialPosts,
  isPickedOnly,
  filterCategory,
  excerptIds,
}) => {
  const posts = (initialPosts || getPosts()).filter(
    (post) =>
      !excerptIds?.includes(post.id) &&
      (!isPickedOnly || post.isPicked) &&
      (!filterCategory || post.categories.includes(filterCategory)),
  );

  return (
    <ul className={s.container}>
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
};
