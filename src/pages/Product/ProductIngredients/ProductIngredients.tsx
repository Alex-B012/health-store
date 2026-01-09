import ProductDetailTitle from '../ProductDetailsTitle/ProductDetailsTitle'
import './productIngredients.scss'

interface IngredientDesc {
   title: string;
   text: string[];
}

interface CapsuleAmount {
   number: number;
   unit: string;
   daily_value?: number;
}

interface IngredientData {
   id: number;
   name: string;
   capsule_contains: CapsuleAmount;
   capsules_2_contain: CapsuleAmount;
}

interface ProductIngredientsProp {
   data: {
      desc?: string,
      items?: string[],
      table?: {
         desc: IngredientDesc;
         data: IngredientData[];
      }
   }[],
}

function ProductIngredients({ data }: ProductIngredientsProp) {
   return (
      <div className='product-ingredients'>
         <div className="product-ingredients__container">
            <ProductDetailTitle text={"Состав"} />
            <div className="product-ingredients__details-container">

               {data.map((block, idx) => (
                  <div key={idx} className="product-ingredients__block">

                     {block.desc && (
                        <p className="product-ingredients__block-desc">{block.desc}</p>
                     )}

                     {block.items && (
                        <ul className="product-ingredients__block-list">
                           {block.items.map((item, i) => (
                              <li className="product-ingredients__block-item" key={i}>
                                 {item}
                              </li>
                           ))}
                        </ul>
                     )}

                     {block.table && (
                        <div className="product-ingredients__table-container">
                           <h4 className="product-ingredients__table-title">
                              {block.table.desc.title}
                           </h4>

                           {block.table.desc.text.map((txt, i) => (
                              <p className="product-ingredients__table-desc" key={i}>
                                 {txt}
                              </p>
                           ))}

                           <table className="product-ingredients__table">
                              <thead className="product-ingredients__table-head">
                                 <tr className="product-ingredients__table-tr">
                                    <th
                                       className="product-ingredients__table-th product-ingredients__table-th-name">
                                       Название
                                    </th>
                                    <th
                                       className="product-ingredients__table-th product-ingredients__table-th-per-capsule">
                                       1 капсула содержит
                                    </th>
                                    <th
                                       className="product-ingredients__table-th product-ingredients__table-th-daily-value">
                                       СЗПЗ
                                    </th>
                                    <th
                                       className="product-ingredients__table-th product-ingredients__table-th-per-capsule">
                                       2 капсулы содержат
                                    </th>
                                    <th

                                       className="product-ingredients__table-th product-ingredients__table-th-daily-value">
                                       СЗПЗ
                                    </th>
                                 </tr>
                              </thead>
                              <tbody className="product-ingredients__table-body">
                                 {block.table.data.map((ingredient) => (
                                    <tr
                                       className="product-ingredients__table-tr"
                                       key={ingredient.id}
                                    >
                                       <td
                                          className="product-ingredients__table-td product-ingredients__table-td-name">
                                          {ingredient.name}
                                       </td>
                                       <td
                                          className="product-ingredients__table-td product-ingredients__table-td-per-capsule">
                                          {ingredient.capsule_contains.number} {ingredient.capsule_contains.unit}
                                       </td>
                                       <td
                                          className="product-ingredients__table-td product-ingredients__table-td-daily-value">
                                          {ingredient.capsule_contains.daily_value && `${ingredient.capsule_contains.daily_value}%`}
                                       </td>
                                       <td
                                          className="product-ingredients__table-td product-ingredients__table-td-per-capsule">
                                          {ingredient.capsules_2_contain.number} {ingredient.capsules_2_contain.unit}
                                       </td>
                                       <td
                                          className="product-ingredients__table-td product-ingredients__table-td-daily-value">
                                          {ingredient.capsules_2_contain.daily_value && `${ingredient.capsules_2_contain.daily_value}%`}
                                       </td>
                                    </tr>
                                 ))}
                              </tbody>
                              <div className='product-ingredients__table-sm'>
                                 <div className='product-ingredients__table-sm-head'>
                                    <div className='product-ingredients__table-sm-head-cell'>

                                    </div>
                                    <div className='product-ingredients__table-sm-head-cell'>

                                    </div>
                                    <div className='product-ingredients__table-sm-head-cell'>

                                    </div>
                                    <div className='product-ingredients__table-sm-head-cell'>

                                    </div>

                                 </div>
                              </div>
                           </table>
                        </div>
                     )}

                  </div>
               ))}




            </div>
         </div>
      </div>
   )
}

export default ProductIngredients