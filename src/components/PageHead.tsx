import { Head } from 'vite-react-ssg';

const BASE = 'Arrrepentimiento';

// Mirrors the Nuxt useHtmlHeader() title template.
export default function PageHead({ title }: { title?: string }) {
  const full = title && title !== BASE ? `${title} - ${BASE}` : `${BASE} - the Collective`;
  return (
    <Head>
      <title>{full}</title>
    </Head>
  );
}
