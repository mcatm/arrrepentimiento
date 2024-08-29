import { posts } from '~~/resources/posts';

export const usePosts = () => posts.filter(post => !post.isDrafted);