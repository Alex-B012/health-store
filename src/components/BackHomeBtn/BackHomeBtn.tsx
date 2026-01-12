import { Link } from 'react-router-dom'
import './backHomeBtn.scss'
import { linksData } from '../../data/data'
import { products } from '../../data/products'
import { useProductFromUrl } from '../../entities/product/index'



function BackHomeBtn() {

   const { product } = useProductFromUrl({ products });

   return (
      <div className="backHomeBtn">
         <Link className="backHomeBtn__link" to={linksData[0].url}>
            На главную
         </Link> / <span className='backHomeBtn__product'>{product?.title_data.name}</span>
      </div>
   )
}

export default BackHomeBtn