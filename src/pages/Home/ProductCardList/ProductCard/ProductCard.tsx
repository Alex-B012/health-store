import { Link } from 'react-router-dom';
import './productCard.scss';
import ProductCardBtn from './ProductCardBtn/ProductCardBtn';

interface ProductCardProps {
   product?: any
}

function ProductCard({ product }: ProductCardProps) {
   let imageRotationClass = '';

   if (product.image && product.image.rotation)
      imageRotationClass = product.image.rotation;


   return (
      <div className='product-card'>
         <Link className='product-card__link' to={`/products/${product?.id}`}>
            <div className="product-card__img-container">
               <img className={`product-card__img 
                  product-card__img--${imageRotationClass}`}
                  src={product?.image.src}
                  alt={product?.name} />
            </div>
            <h2 className='product-card__title'>{product?.title_data.name}</h2>
            <p className="product-card__desc">{product?.dosage_form}</p>
            <ProductCardBtn text={"Подробнее"} />
         </Link>
      </div>
   )
}

export default ProductCard