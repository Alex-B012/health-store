import './productPageBenefits.scss'

interface ProductPageBenefitsProps {
   data: string[];
}

function ProductPageBenefits({ data }: ProductPageBenefitsProps) {
   return (
      <ul className='product-page-benefits'>
         {data.map((benefit, index) => (
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
   )
}

export default ProductPageBenefits