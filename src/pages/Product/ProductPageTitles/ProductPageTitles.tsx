import './productPageTitles.scss'

interface ProductPageTitlesProps {
   title: string;
   titlePosition?: "center" | "right";
}

function ProductPageTitles({ title, titlePosition }: ProductPageTitlesProps) {
   let titlePositionClass = "";
   if (titlePosition === "center") {
      titlePositionClass = "ProductPageTitles__title--center";
   } else if (titlePosition === "right") {
      titlePositionClass = "ProductPageTitles__title--right";
   }

   return (
      <div className="ProductPageTitles__title">
         <h1 className={`ProductPageTitles__title ${titlePositionClass}`}>
            {title}
         </h1>
      </div >
   )
}

export default ProductPageTitles