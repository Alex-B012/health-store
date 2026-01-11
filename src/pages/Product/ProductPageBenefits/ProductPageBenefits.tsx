import './productPageBenefits.scss'
import ProductPageBenefitsImg from './ProductPageBenefitsImg/ProductPageBenefitsImg';

interface ProductPageBenefitsProps {
   data: {
      text: string[],
      img?: string,
      alt?: string
   };
}

function ProductPageBenefits({ data }: ProductPageBenefitsProps) {
   return (
      <div className='product-page-benefits'>
         <ul className='product-page-benefits__list'>
            {data.text.map((benefit, index) => (
               <li className='product-page-benefits__item' key={index}>
                  <div className='product-page-benefits__item-content'>
                     <span className='product-page-benefits__number'>
                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                     </span>
                     <p className='product-page-benefits__text' >
                        {benefit}
                     </p>
                  </div>
                  <hr className='product-page-benefits__line' />
               </li >
            ))
            }

         </ul >
         <ProductPageBenefitsImg img={data.img} alt={data.alt} />
      </div>

   )
}

export default ProductPageBenefits