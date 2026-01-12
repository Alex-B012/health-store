import './home.scss'

import { products } from '../../data/products'

import ProductCardList from './ProductCardList/ProductCardList'
import Greeting from './Greeting/Greeting'
import { useEffect } from 'react'
import HeadingGradient from '../../components/HeadingGradient/HeadingGradient'

function Home() {

   useEffect(() => {
      window.location.hash = "#top";
   }, []);

   return (
      <div className="homePage">
         <Greeting />
         <HeadingGradient heading={{ line1: "Наша продукция" }} />
         <ProductCardList data={products} />
      </div>
   )
}

export default Home