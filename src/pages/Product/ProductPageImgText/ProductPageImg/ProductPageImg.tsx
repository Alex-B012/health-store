import './productPageImg.scss'

interface ProductPageImgProps {
   img: { src: string, rotation?: string },
   name?: string
}

function ProductPageImg({ img, name }: ProductPageImgProps) {
   let imageRotation = "";

   if (img.rotation) {
      imageRotation = img.rotation;
   }


   return (
      <div className="productPageImg">
         <img className={`productPageImg__img productPageImg__img--${imageRotation}`} src={img.src} alt={name} />
      </div>
   )
}

export default ProductPageImg