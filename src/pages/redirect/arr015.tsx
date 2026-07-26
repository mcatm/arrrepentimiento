import { useEffect } from 'react';

const TARGET =
  'https://drive.google.com/drive/folders/1GhZxWKYwXZazZBDJZzJLuf9rBtNDTtiF?usp=sharing';

export default function RedirectArr015() {
  useEffect(() => {
    window.location.replace(TARGET);
  }, []);

  return (
    <p>
      Redirecting to <a href={TARGET}>Google Drive</a>…
    </p>
  );
}
