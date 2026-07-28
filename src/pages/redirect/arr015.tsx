import { useEffect } from 'react';
import { Container } from '~/components/Container';
import Heading from '~/components/organism/Heading';
import PageHead from '~/components/PageHead';

const TARGET =
  'https://drive.google.com/drive/folders/1GhZxWKYwXZazZBDJZzJLuf9rBtNDTtiF?usp=sharing';

export default function RedirectArr015() {
  useEffect(() => {
    window.location.replace(TARGET);
  }, []);

  return (
    <>
      <PageHead title="Redirecting..." />
      <Container>
        <Heading />
        <p>
          Redirecting to <a href={TARGET}>Google Drive</a>…
        </p>
      </Container>
    </>
  );
}
