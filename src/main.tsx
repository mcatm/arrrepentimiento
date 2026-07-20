import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from '~/routes';
import './styles/normalize.css';
import './styles/global.css';

export const createRoot = ViteReactSSG({ routes });
