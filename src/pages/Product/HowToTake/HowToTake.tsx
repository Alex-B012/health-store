import ProductDetailsTitle from '../ProductDetailsTitle/ProductDetailsTitle';
import './howToTake.scss'

interface HowToTakeProp {
   data: {
      desc: string[];
      details: {
         bold?: string;
         text: string[];
      }[];
   }
}

function HowToTake({ data }: HowToTakeProp) {
   return (
      <div className='how-to-take'>
         <div className="how-to-take__container">
            <ProductDetailsTitle text={"Способ применения"} />
            {data.desc && data.desc.length > 0
               && data.desc.map((text: string, index) =>
                  <p className="how-to-take__description" key={index}>
                     {text}
                  </p>)
            }
            <div className="how-to-take__details-container">
               {data.details.map((item, index: number) => (
                  <div key={index} className="how-to-take__detail">
                     {item.bold &&
                        <p className="how-to-take__text--bold">{item.bold}</p>}
                     {item.text && item.text.length > 0
                        && item.text.map((text, textIndex) => (
                           <p className="how-to-take__text" key={textIndex}>{text}</p>
                        ))}
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default HowToTake