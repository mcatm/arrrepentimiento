import { useEffect } from 'react';

const TARGET =
  'https://drive.google.com/drive/folders/1nvl-ysi8hVZzOl67Ri44gTE_WAoUyspC?usp=sharing';

export default function RedirectArr012() {
  useEffect(() => {
    window.location.replace(TARGET);
  }, []);

  return (
    <p>
      Redirecting to <a href={TARGET}>Google Drive</a>…
    </p>
  );
}
