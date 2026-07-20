import type { RouteRecord } from 'vite-react-ssg';
import Layout from '~/Layout';
import Home from '~/pages/Home';
import Works from '~/pages/Works';
import About from '~/pages/About';
import WorkPage from '~/pages/WorkPage';
import PostPage from '~/pages/PostPage';
import NotePage from '~/pages/NotePage';
import RedirectArr012 from '~/pages/RedirectArr012';
import NotFound from '~/pages/NotFound';
import { getWorks, getPosts, getNotes } from '~/lib/data';

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, Component: Home },
      { path: 'works', Component: Works },
      { path: 'about', Component: About },
      {
        path: 'work/:id',
        Component: WorkPage,
        getStaticPaths: () => getWorks().map((work) => `/work/${work.id}`),
      },
      {
        path: 'post/:id',
        Component: PostPage,
        getStaticPaths: () => getPosts().map((post) => `/post/${post.id}`),
      },
      {
        path: 'note/:id',
        Component: NotePage,
        getStaticPaths: () => getNotes().map((note) => `/note/${note.id}`),
      },
      { path: 'redirect/arr012', Component: RedirectArr012 },
      { path: '*', Component: NotFound },
    ],
  },
];
