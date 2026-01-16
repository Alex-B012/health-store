import ProductPageImg from './ProductPageImg/ProductPageImg'
import './productPageImgText.scss'
import ProductPagePromoText from './ProductPagePromoText/ProductPagePromoText'

interface ProductPageImgPromoTextProp {
   img: { src: string, rotation?: string },
   name: string,
   text: string,
}

function ProductPageImgPromoText({ img, name, text }: ProductPageImgPromoTextProp) {
   console.log('Rendering ProductPageImgPromoText with text:', text);

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