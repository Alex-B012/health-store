import './greeting.scss'
import Slogan from './Slogan/Slogan'
import LogoFull from '../../../components/LogoFull/LogoFull'

function Greeting() {
   return (
      <div className="greeting">
         <div className="greeting-container">
            <Slogan />
            <LogoFull />
         </div>
      </div>
   )
}

export default Greeting