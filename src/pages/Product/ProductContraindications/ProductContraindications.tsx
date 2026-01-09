import ProductDetailsTitle from '../ProductDetailsTitle/ProductDetailsTitle'
import './productContraindications.scss'

interface ProductContraindicationsProp {
   data: any,
}

function ProductContraindications({ data }: ProductContraindicationsProp) {
   return (
      <div className='product-contraindications'>
         <div className="pharmacological-properties__container">
            <ProductDetailsTitle text={"Противопоказания"} />
            <div className="pharmacological-properties__details-container">

            </div>
         </div>
      </div>
   )
}

export default ProductContraindications