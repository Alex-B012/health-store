import './productContraindications.scss'
import ProductCommonComp from '../commonComponents/ProductCommonComp/ProductCommonComp'

interface ProductContraindicationsProp {
   data: any,
}

function ProductContraindications({ data }: ProductContraindicationsProp) {
   return (
      <div className='product-contraindications'>
         <ProductCommonComp title={"Противопоказания"} >

         </ProductCommonComp>
      </div>
   )
}

export default ProductContraindications