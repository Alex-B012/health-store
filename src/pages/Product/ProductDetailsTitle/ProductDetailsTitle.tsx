import './productDetailsTitle.scss'

interface ProductDetailsTitleProp {
   text: string,
}

function ProductDetailsTitle({ text }: ProductDetailsTitleProp) {
   return (
      <h3 className="product-details-title">{text}</h3>
   )
}

export default ProductDetailsTitle