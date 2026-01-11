import { useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * useScrollToTopForSPA — гарантирует, что scroll всегда будет сверху
 * даже с Suspense и React.lazy
 */
export const useScrollToTopForSPA = () => {
   const { pathname } = useLocation();
   const navigationType = useNavigationType(); // PUSH / POP / REPLACE

   useLayoutEffect(() => {
      // отключаем автоматическое восстановление браузером
      if ("scrollRestoration" in window.history) {
         window.history.scrollRestoration = "manual";
      }

      // если это навигация POP (назад/вперед), браузер пытается восстановить scroll
      // мы принудительно ставим scroll в 0
      if (navigationType === "POP") {
         window.scrollTo(0, 0);
      }
   }, [pathname, navigationType]);

   // принудительно скроллим при любом переходе на новый маршрут

   useLayoutEffect(() => {
      window.scrollTo(0, 0);
      console.log("Scroll to top for SPA on route change");
   }, [pathname]);
};
