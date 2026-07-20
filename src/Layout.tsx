import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '~/components/organism/Header';
import Footer from '~/components/organism/Footer';
import { container } from './layout.css';

export default function Layout() {
  const location = useLocation();

  // On every route change: scroll to top (was scrollTop.client.ts) and send a
  // Google Analytics page_view (was the vue-gtag plugin).
  useEffect(() => {
    window.scrollTo({ left: 0, top: 0 });
    const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
    if (typeof gtag === 'function') {
      gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_location: window.location.href,
      });
    }
  }, [location.pathname, location.search]);

  return (
    <div className={container}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
