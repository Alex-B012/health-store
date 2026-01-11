import './home.scss'
import { greetingText } from '../../data/data'
import { products } from '../../data/products'

import Welcome from './Welcome/Welcome'
import Text from '../../components/Text/Text'
import ProductCardList from './ProductCardList/ProductCardList'
import Greeting from './Greeting/Greeting'
import { useEffect } from 'react'

function Home() {

   useEffect(() => {
      window.location.hash = "#top";
   }, []);

   return (
      <div className="homePage">
         <Greeting />
         <Welcome />
         <Text text={greetingText.text} />
         <Text title={"Каталог товаров"} />
         <ProductCardList data={products} />
      </div>
   )
}

export default Home