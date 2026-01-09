import './productTextLine.scss'

interface ProductTextLineProp {
   line: string,
}

function ProductTextLine({ line }: ProductTextLineProp) {
   return (
      <p className='product-text-line' >
         {line}
      </p>
   )
}

export default ProductTextLine