import type { Post } from '~/types/post';
import * as s from './card.css';

export default function CardPost({ post }: { post: Post }) {
  if (!post) return null;
  const info = (post.info || []).filter((i) => !!i?.onList);
  return (
    <div className={s.post}>
      {post.thumbnail ? (
        <div className={s.postThumbnail}>
          <div className={s.postImage}>
            <img src={post.thumbnail} alt={post.title} />
          </div>
        </div>
      ) : (
        <div className={s.postThumbnail}>
          <p className={s.postNoImage} />
        </div>
      )}
      <div className={s.postContent}>
        <h3 className={s.postTitle}>{post.title}</h3>
        {info.length > 0 && (
          <p className={s.postInfo}>
            {info.map(({ value }, i) => (
              <span key={i}>{value}</span>
            ))}
          </p>
        )}
      </div>
    </div>
  );
}
