import { useMemo } from "react";

interface Product {
   id: number | string;
   [key: string]: any;
}

export function useProductFromUrl({ products }: { products: Product[] }) {
   const productId = useMemo(() => {
      return window.location.pathname.split("/").pop();
   }, []);

   const product = useMemo(() => {
      return products.find(p => p.id.toString() === productId);
   }, [products, productId]);

   return { product };
}
