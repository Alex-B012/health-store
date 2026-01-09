import { IngredientData, IngredientDesc } from '../../../../types/product';
import './productTableSmall.scss'

interface ProductTableSmallProp {
   data: {
      desc: IngredientDesc;
      data: IngredientData[];
   },
   column_names: {
      one_capsule: string,
      daily_value_column_name: string,
      capsules_column_name: string,
   },
}

function ProductTableSmall({ data, column_names }: ProductTableSmallProp) {
   return (
      <div className='product-table-sm'>
         <div className='product-table-sm-head'>
            <div className='product-table-sm-head-cell'>
               {column_names.one_capsule}
            </div>
            <div className='product-table-sm-head-cell'>
               {column_names.daily_value_column_name}
            </div>
            <div className='product-table-sm-head-cell'>
               {column_names.capsules_column_name}
            </div>
            <div className='product-table-sm-head-cell'>
               {column_names.daily_value_column_name}
            </div>
         </div>


         <div className="product-table-sm-body">
            {data.data.map((ingredient) => (
               <div
                  className="product-table-sm-body-data"
                  key={ingredient.id}
               >
                  <div className="product-table-sm-body-data-name">
                     {ingredient.name}
                  </div>

                  <div
                     className='product-table-sm-body-data-column product-table-sm-body-data-capsule1'
                  >
                     {ingredient.capsule_contains.number} {ingredient.capsule_contains.unit}
                  </div>
                  <div
                     className='product-table-sm-body-data-column product-table-sm-body-data-daily1'
                  >
                     {ingredient.capsule_contains.daily_value && `${ingredient.capsule_contains.daily_value}%`}
                  </div>
                  <div
                     className='product-table-sm-body-data-column product-table-sm-body-data-capsule2'
                  >
                     {ingredient.capsules_2_contain.number} {ingredient.capsules_2_contain.unit}
                  </div>
                  <div
                     className='product-table-sm-body-data-column product-table-sm-body-data-daily2'
                  >
                     {ingredient.capsules_2_contain.daily_value && `${ingredient.capsules_2_contain.daily_value}%`}
                  </div>
               </div>
            ))
            }
         </div>
      </div>
   )
}

export default ProductTableSmall