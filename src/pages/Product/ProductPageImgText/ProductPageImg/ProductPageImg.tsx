import './productPageImg.scss'

interface ProductPageImgProps {
   img: string,
   name?: string
}

function ProductPageImg({ img, name }: ProductPageImgProps) {
   return (
      <div className="productPageImg">
         <img className="productPageImg__img" src={img} alt={name} />
      </div>
   )
}

export default ProductPageImg