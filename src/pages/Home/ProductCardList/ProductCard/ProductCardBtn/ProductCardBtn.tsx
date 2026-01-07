import './productCardBtn.scss'

function ProductCardBtn({ text }: { text: string }) {
   return (
      <div className='product-card-btn'>{text}</div>
   )
}

export default ProductCardBtn