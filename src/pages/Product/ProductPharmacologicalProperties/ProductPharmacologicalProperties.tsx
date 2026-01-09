import { PharmacologicalSection } from '../../../types/product';
import ProductDetailsTitle from '../ProductDetailsTitle/ProductDetailsTitle'
import PharmacologicalPropertiesItem from './PharmacologicalPropertiesItem/PharmacologicalPropertiesItem';
import './productPharmacologicalProperties.scss'


interface ProductPharmacologicalPropertiesProp {
   data: PharmacologicalSection[];
}

function ProductPharmacologicalProperties({ data }: ProductPharmacologicalPropertiesProp) {
   return (
      <div className='pharmacological-properties'>
         <div className="pharmacological-properties__container">
            <ProductDetailsTitle text={"Фармакологические свойства"} />
            <div className="pharmacological-properties__details-container">
               {data.map((item, idx) =>
                  <PharmacologicalPropertiesItem key={idx} item={item} />
               )}
            </div>
         </div>
      </div>
   )
}

export default ProductPharmacologicalProperties