import { PharmacologicalDataItem } from '../../../../../types/product'
import './pharmacologicalPropertiesItemData.scss'

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
         {data.text.map((line) =>
            <p className='pharmacological-properties-item-data__text'>
               {line}
            </p>
         )}
      </div>
   )
}

export default PharmacologicalPropertiesItemData