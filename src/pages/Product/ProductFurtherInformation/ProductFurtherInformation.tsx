import './productFurtherInformation.scss'
import { FurtherInformationSection } from '../../../types/product'
import ProductCommonComp from '../commonComponents/ProductCommonComp/ProductCommonComp'
import ProductTextItemData from '../commonComponents/ProductTextItemData/ProductTextItemData'

interface ProductFurtherInformationProp {
   data?: FurtherInformationSection[];
}

function ProductFurtherInformation({ data }: ProductFurtherInformationProp) {
   if (!data || data.length === 0) return null;

   return (
      <div className="further-information">
         <ProductCommonComp title="Дополнительные сведения">
            {data.map((section, idx) => (
               <div key={idx} className="further-information__section">
                  {section.title && (
                     <h3 className="further-information__section-title">
                        {section.title}
                     </h3>
                  )}

                  {section.data.map((item, i) => (
                     <ProductTextItemData key={i} data={item} />
                  ))}
               </div>
            ))}
         </ProductCommonComp>
      </div>
   );
}

export default ProductFurtherInformation;
