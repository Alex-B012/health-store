import './pharmacologicalPropertiesItemData.scss'
import { PharmacologicalDataItem } from '../../../../../types/product'
import ProductTextLine from '../../../commonComponents/ProductTextLine/ProductTextLine'

interface PharmacologicalPropertiesItemDataProp {
   data: PharmacologicalDataItem,
}

function PharmacologicalPropertiesItemData({ data }: PharmacologicalPropertiesItemDataProp) {
   return (
      <div className='pharmacological-properties-item-data'>
         {data.title &&
            <h4 className='pharmacological-properties-item-data__title'>
               {data.title}
            </h4>
         }
         {data.text.map((line, idx) =>
            <ProductTextLine line={line} key={idx} />
         )}
      </div>
   )
}

export default PharmacologicalPropertiesItemData