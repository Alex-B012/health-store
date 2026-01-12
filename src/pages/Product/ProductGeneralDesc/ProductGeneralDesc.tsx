import ProductCommonComp from '../commonComponents/ProductCommonComp/ProductCommonComp';
import ProductTextLine from '../commonComponents/ProductTextLine/ProductTextLine';
import './productGeneralDesc.scss'

interface ProductGeneralDescProps {
   data: string[];
}

function ProductGeneralDesc({ data }: ProductGeneralDescProps) {
   return (
      <div className='product-general-desc'>
         <ProductCommonComp title="Краткое описание">
            {data.map((item, index) => (
               <ProductTextLine line={item} key={index} />
            ))}

         </ProductCommonComp>

      </div>
   )
}

export default ProductGeneralDesc