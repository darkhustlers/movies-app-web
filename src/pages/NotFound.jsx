import React, { useEffect } from 'react';
import NotFoundPage from '../modules/NotFoundPage';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found | Moviez Ninja';
  }, []);

  return <NotFoundPage />;
}
