import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface ScrollToTopProps {
   children: React.ReactNode;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ children }) => {
   const { pathname } = useLocation();

   useEffect(() => {
      if ("scrollRestoration" in window.history) {
         window.history.scrollRestoration = "manual";
      }
   }, []);

   useEffect(() => {
      const id = setTimeout(() => window.scrollTo(0, 0), 0);
      return () => clearTimeout(id);
   }, [pathname]);

   return <>{children}</>;
};

export default ScrollToTop;
