import './productPagePromoText.scss'

interface ProductPagePromoTextProp {
   text: string,
}

function ProductPagePromoText({ text }: ProductPagePromoTextProp) {
   return (
      <h3 className='product-page-promo-text'>
         {text}
      </h3>
   )
}

export default ProductPagePromoText