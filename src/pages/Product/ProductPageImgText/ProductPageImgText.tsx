import ProductPageImg from './ProductPageImg/ProductPageImg'
import './productPageImgText.scss'
import ProductPagePromoText from './ProductPagePromoText/ProductPagePromoText'

interface ProductPageImgPromoTextProp {
   img: string,
   name: string,
   text: string,
}

function ProductPageImgPromoText({ img, name, text }: ProductPageImgPromoTextProp) {
   return (
      <div className='product-page-img-text'>
         <ProductPageImg
            img={img}
            name={name}
         />
         <ProductPagePromoText text={text} />
      </div>
   )
}

export default ProductPageImgPromoText