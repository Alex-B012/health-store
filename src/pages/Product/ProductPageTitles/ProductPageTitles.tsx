import './productPageTitles.scss'

interface ProductPageTitlesProps {
   title: string;
   subtitle?: string;
   titlePosition?: "center" | "right";
}

function ProductPageTitles({ title, subtitle, titlePosition }: ProductPageTitlesProps) {
   let titlePositionClass = "";
   if (titlePosition === "center") {
      titlePositionClass = "product-page-titles__title--center";
   } else if (titlePosition === "right") {
      titlePositionClass = "product-page-titles__title--right";
   }

   return (
      <div className="product-page-titles">
         <h2 className={`product-page-titles__title ${titlePositionClass}`}>
            {title}
         </h2>
         {subtitle && (
            <h3 className={`product-page-titles__subtitle ${titlePositionClass}`}>
               {subtitle}
            </h3>)
         }
      </div >
   )
}

export default ProductPageTitles