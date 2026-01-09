import './productContraindications.scss'
import ProductCommonComp from '../commonComponents/ProductCommonComp/ProductCommonComp'
import ProductTextLine from '../commonComponents/ProductTextLine/ProductTextLine'

interface ProductContraindicationsProp {
   data?: string[],
}

function ProductContraindications({ data }: ProductContraindicationsProp) {
   return (
      <div className='product-contraindications'>
         <ProductCommonComp title={"Противопоказания"} >
            {data?.map((text, idx) =>
               <ProductTextLine line={text} key={idx} />
            )}
         </ProductCommonComp>
      </div>
   )
}

export default ProductContraindications