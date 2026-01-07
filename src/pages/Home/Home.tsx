import './home.scss'
import { greetingText } from '../../data/data'
import { products } from '../../data/products'

import LogoFull from '../../components/LogoFull/LogoFull'
import Welcome from './Welcome/Welcome'
import Text from '../../components/Text/Text'
import ProductCardList from './ProductCardList/ProductCardList'

function Home() {
   return (
      <div className="homePage">
         <LogoFull />
         <Welcome />
         <Text text={greetingText.text} />
         <Text title={"Каталог товаров"} />
         <ProductCardList data={products} />
      </div>
   )
}

export default Home