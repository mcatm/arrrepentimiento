import { usePosts } from '~/composables/data/usePosts';

export const usePost = (id: string) => usePosts().find(post => post.id === id);