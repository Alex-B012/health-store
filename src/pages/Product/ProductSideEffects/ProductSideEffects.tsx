import './productSideEffects.scss'
import { TextItem } from '../../../types/product'
import ProductCommonComp from '../commonComponents/ProductCommonComp/ProductCommonComp'
import ProductTextItemData from '../commonComponents/ProductTextItemData/ProductTextItemData'

interface ProductSideEffectsProp {
   data: TextItem[],
}

function ProductSideEffects({ data }: ProductSideEffectsProp) {
   if (!data || data.length === 0) return null;

   return (
      <div className='product-side-effects'>
         <ProductCommonComp title={"Побочные действия"} >
            {data.map((item, idx) => <ProductTextItemData data={item} key={idx} />)}
         </ProductCommonComp>
      </div>
   )
}

export default ProductSideEffects