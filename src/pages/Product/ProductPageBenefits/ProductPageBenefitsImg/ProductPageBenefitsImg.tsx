import "./productPageBenefitsImg.scss";

interface ProductPageBenefitsImgProps {
   img?: string;
   alt?: string;
}

function ProductPageBenefitsImg({ img, alt }: ProductPageBenefitsImgProps) {
   if (!img) return null;

   return (
      <div className="product-page-benefits-img">
         <img className="product-page-benefits-img__img" src={img} alt={alt ?? ""} />
      </div>
   )
}
export default ProductPageBenefitsImg