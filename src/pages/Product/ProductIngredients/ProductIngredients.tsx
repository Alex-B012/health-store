import ProductDetailTitle from '../ProductDetailsTitle/ProductDetailsTitle'
import './productIngredients.scss'

interface ProductIngredientsProp {
   data: any,
}

function ProductIngredients({ data }: ProductIngredientsProp) {
   return (
      <div className='product-ingredients'>
         <div className="product-ingredients__container">
            <ProductDetailTitle text={"Состав"} />
            <div className="product-ingredients__details-container">
               {/* {data.details.map((item, index: number) => (
                  <div key={index} className="how-to-take__detail">
                     {item.bold &&
                        <p className="how-to-take__text--bold">{item.bold}</p>}
                     {item.text && item.text.length > 0
                        && item.text.map((text, textIndex) => (
                           <p className="how-to-take__text" key={textIndex}>{text}</p>
                        ))}
                  </div>
               ))} */}
            </div>
         </div>
      </div>
   )
}

export default ProductIngredients