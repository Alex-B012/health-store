import React from 'react';
import './productCommonComp.scss';
import ProductDetailsTitle from '../ProductDetailsTitle/ProductDetailsTitle';

interface ProductCommonCompProp {
   title: string;
   children?: React.ReactNode;
}

function ProductCommonComp({ title, children }: ProductCommonCompProp) {
   return (
      <div className="product-common-comp">
         <ProductDetailsTitle text={title} />
         <div className="product-common-comp__content">
            {children}
         </div>
      </div>

   )
}

export default ProductCommonComp;
