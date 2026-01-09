import { PharmacologicalSection } from '../../../../types/product'
import ProductTextItemData from '../../commonComponents/ProductTextItemData/ProductTextItemData'
import './pharmacologicalPropertiesItem.scss'

interface PharmacologicalPropertiesItemProp {
   item: PharmacologicalSection,
}

function PharmacologicalPropertiesItem({ item }: PharmacologicalPropertiesItemProp) {
   return (
      <div className='pharmacological-properties-item'>
         <h3 className='pharmacological-properties-item__title'>{item.title}</h3>
         {item.data.map((data, idx) =>
            <ProductTextItemData data={data} key={idx} />
         )}
      </div>
   )
}

export default PharmacologicalPropertiesItem