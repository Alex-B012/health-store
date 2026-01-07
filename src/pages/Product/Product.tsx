import './product.scss'
import { products } from '../../data/products'
import BackHomeBtn from '../../components/BackHomeBtn/BackHomeBtn'
import ProductNotFound from './ProductNotFound/ProductNotFound';
import ProductPageImg from './ProductPageImg/ProductPageImg';
import ProductPageTitles from './ProductPageTitles/ProductPageTitles';

function Product() {
   const productId = window.location.pathname.split("/").pop();
   const product = products.find(p => p.id.toString() === productId);

   return (
      <div className="productPage">
         <BackHomeBtn />
         {product ? (
            <div className="productPage__container">
               <ProductPageImg img={product.image} name={product.title_data.name} />
               <ProductPageTitles title={product.title_data.name} titlePosition={"center"} />

            </div>
         ) : (
            <ProductNotFound />
         )}
      </div>
   )
}

export default Product