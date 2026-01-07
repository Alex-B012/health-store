import ProductCard from './ProductCard/ProductCard'
import './productCardList.scss'

interface ProductCardListProps {
   data?: any[]
}

function ProductCardList({ data }: ProductCardListProps) {
   return (
      <div className='product-card-list'>
         {data?.map((product) => (
            <ProductCard product={product} key={product.id} />
         ))}
      </div>
   )
}

export default ProductCardList