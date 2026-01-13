import './product.scss'
import { products } from '../../data/products'
import BackHomeBtn from '../../components/BackHomeBtn/BackHomeBtn'
import ProductNotFound from './ProductNotFound/ProductNotFound';
import ProductPageTitles from './ProductPageTitles/ProductPageTitles';
import ProductPageImgPromoText from './ProductPageImgText/ProductPageImgText';
import ProductPageBenefits from './ProductPageBenefits/ProductPageBenefits';
import HowToTake from './HowToTake/HowToTake';
import ProductIngredients from './ProductIngredients/ProductIngredients';
import ProductPharmacologicalProperties from './ProductPharmacologicalProperties/ProductPharmacologicalProperties';
import ProductContraindications from './ProductContraindications/ProductContraindications';
import { PharmacologicalDataItem } from '../../types/product';
import ProductFurtherInformation from './ProductFurtherInformation/ProductFurtherInformation';
import ProductSideEffects from './ProductSideEffects/ProductSideEffects';
import { useEffect } from 'react';
import ProductGeneralDesc from './ProductGeneralDesc/ProductGeneralDesc';

interface ProductProps {
   onLoad: () => void;
}

function Product({ onLoad }: ProductProps) {
   const productId = window.location.pathname.split("/").pop();
   const product = products.find(p => p.id.toString() === productId);

   const hasPharmacologicalData = product?.pharmacological_properties?.some(section =>
      (section.data as PharmacologicalDataItem[])?.some(item =>
         (item.title && item.title.trim().length > 0) ||
         item.text?.some(t => t.trim().length > 0)
      )
   ) ?? false;

   const hasData = <T,>(arr?: T[]): arr is T[] =>
      Array.isArray(arr) && arr.length > 0;


   useEffect(() => {
      onLoad();
      window.location.hash = "#top";
   }, [productId, onLoad]);



   return (
      <div className="product-page" >
         <BackHomeBtn />
         {product ? (
            <>
               <div className="product-page__img-container">
                  <ProductPageTitles
                     title={product.title_data.name}
                     subtitle={product.dosage_form}
                     titlePosition={"center"}
                  />
                  <ProductPageImgPromoText
                     img={product.image}
                     name={product.title_data.name}
                     text={product.dosage_form}
                  />
               </div>

               <ProductPageBenefits data={{
                  text: product.title_data.properties,
                  img: product.title_data.properties_img,
                  alt: product.title_data.name
               }} />

               <ProductGeneralDesc data={product.general_desc} />

               {hasPharmacologicalData && <ProductPharmacologicalProperties data={product.pharmacological_properties} />}


               {hasData(product.contraindications) && (
                  <ProductContraindications data={product.contraindications} />
               )}

               <HowToTake data={product.how_to_take} />

               <ProductIngredients data={product.ingredients} />
               {hasData(product.side_effects) && (
                  <ProductSideEffects data={product.side_effects} />
               )}

               <ProductFurtherInformation data={product.further_information} />
            </>
         ) : (
            <ProductNotFound />
         )}
      </div>
   )
}

export default Product