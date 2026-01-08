import './product.scss'
import { products } from '../../data/products'
import BackHomeBtn from '../../components/BackHomeBtn/BackHomeBtn'
import ProductNotFound from './ProductNotFound/ProductNotFound';
import ProductPageTitles from './ProductPageTitles/ProductPageTitles';
import ProductPageImgPromoText from './ProductPageImgText/ProductPageImgText';
import ProductPageBenefits from './ProductPageBenefits/ProductPageBenefits';
import HowToTake from './HowToTake/HowToTake';

function Product() {
   const productId = window.location.pathname.split("/").pop();
   const product = products.find(p => p.id.toString() === productId);

   return (
      <div className="product-page">
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
               <ProductPageBenefits
                  data={product.title_data.properties} />
               <HowToTake data={product.how_to_take} />
            </>
         ) : (
            <ProductNotFound />
         )}
      </div>
   )
}

export default Product