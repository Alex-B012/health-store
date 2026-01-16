import './home.scss'
import { products } from '../../data/products'

import ProductCardList from './ProductCardList/ProductCardList'
import Greeting from './Greeting/Greeting'
import HeadingGradient from '../../components/HeadingGradient/HeadingGradient'

function Home() {
   return (
      <div className="homePage">
         <Greeting />
         <HeadingGradient heading={{ line1: "Наша продукция" }} />
         <ProductCardList data={products} />
      </div>
   )
}

export default Home