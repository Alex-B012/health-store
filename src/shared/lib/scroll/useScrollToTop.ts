import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTop = () => {
   const { pathname } = useLocation();

   useEffect(() => {
      if ("scrollRestoration" in window.history) {
         window.history.scrollRestoration = "manual";
      }
   }, []);

   useEffect(() => {
      const scrollToTop = () => {
         window.scrollTo(0, 0);
      };

      const id = requestAnimationFrame(scrollToTop);

      return () => cancelAnimationFrame(id);

   }, [pathname]);
};

export default useScrollToTop;
