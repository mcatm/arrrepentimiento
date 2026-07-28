import { useLocation, useNavigate } from 'react-router-dom';
import { button, wrapper } from './backButton.css';

export default function BackButton() {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === '/') return null;

  return (
    <div className={wrapper}>
      <button type="button" className={button} onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
}
