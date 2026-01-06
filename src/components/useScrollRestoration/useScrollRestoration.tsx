import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollRestoration = () => {
   const location = useLocation();

   useEffect(() => {
      const savedPosition = localStorage.getItem(`scrollPosition-${location.pathname}`);
      if (savedPosition) {
         window.scrollTo(0, parseInt(savedPosition, 10));
      }
   }, [location]);

   useEffect(() => {
      const saveScrollPosition = () => {
         localStorage.setItem(`scrollPosition-${location.pathname}`, window.scrollY.toString());
      };

      window.addEventListener("scroll", saveScrollPosition);

      return () => {
         window.removeEventListener("scroll", saveScrollPosition);
      };
   }, [location]);
};

export default useScrollRestoration;
