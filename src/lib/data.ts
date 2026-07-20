import { works as allWorks } from '~/resources/works';
import { posts as allPosts } from '~/resources/posts';
import { notes as allNotes } from '~/resources/notes';

export const getWorks = () => allWorks.filter((work) => !work.isDrafted);
export const getPosts = () => allPosts.filter((post) => !post.isDrafted);
export const getNotes = () => allNotes.filter((note) => !note.isDrafted);

export const getWork = (id: string) => getWorks().find((work) => work.id === id);
export const getPost = (id: string) => getPosts().find((post) => post.id === id);
export const getNote = (id: string) => getNotes().find((note) => note.id === id);
