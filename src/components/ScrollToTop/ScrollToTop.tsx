import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop({ onLoad }: { onLoad?: () => void }) {
   const location = useLocation();

   useLayoutEffect(() => {
      onLoad?.();
      window.scrollTo(0, 0);
   }, [location.pathname, onLoad]);

   return null;
}
