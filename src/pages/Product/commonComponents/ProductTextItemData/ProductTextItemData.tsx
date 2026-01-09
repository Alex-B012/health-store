import { TextItem } from '../../../../types/product'
import ProductTextLine from '../ProductTextLine/ProductTextLine'
import './productTextItemData.scss'

interface ProductTextItemDataProp {
   data: TextItem;
}


function ProductTextItemData({ data }: ProductTextItemDataProp) {
   return (
      <div className="product-text-item-data">
         {data.title &&
            <h4 className='product-text-item-data__title'>
               {data.title}
            </h4>
         }
         {data.text.map((line, idx) =>
            <ProductTextLine line={line} key={idx} />
         )}

      </div>
   )
}

export default ProductTextItemData