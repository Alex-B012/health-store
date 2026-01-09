import './productPharmacologicalProperties.scss'
import { PharmacologicalSection } from '../../../types/product';
import ProductCommonComp from '../commonComponents/ProductCommonComp/ProductCommonComp';
import PharmacologicalPropertiesItem from './PharmacologicalPropertiesItem/PharmacologicalPropertiesItem';


interface ProductPharmacologicalPropertiesProp {
   data?: PharmacologicalSection[];
}

function ProductPharmacologicalProperties({ data }: ProductPharmacologicalPropertiesProp) {
   return (
      <div className='pharmacological-properties'>
         <ProductCommonComp title={"Фармакологические свойства"} >
            {data?.map((item, idx) =>
               <PharmacologicalPropertiesItem key={idx} item={item} />
            )}
         </ProductCommonComp>
      </div >
   )
}

export default ProductPharmacologicalProperties