import type { RouteRecord } from 'vite-react-ssg';
import Layout from '~/Layout';
import { getNotes, getPosts, getWorks } from '~/lib/data';
import About from '~/pages/About';
import Home from '~/pages/Home';
import NotePage from '~/pages/NotePage';
import NotFound from '~/pages/NotFound';
import PostPage from '~/pages/PostPage';
import RedirectArr012 from '~/pages/RedirectArr012';
import WorkPage from '~/pages/WorkPage';
import Works from '~/pages/Works';
import RedirectArr015 from './pages/redirect/arr015';

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
      { path: 'redirect/L5NVU8Sd', Component: RedirectArr015 },
      { path: '*', Component: NotFound },
    ],
  },
];
