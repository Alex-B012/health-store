import { Link } from 'react-router-dom'
import './slogan.scss'
import { profileData } from '../../../../data/data'


function Slogan() {
   return (
      <div className="slogan">
         <h2 className="slogan__title">Лучшее для вашего здоровья</h2>
         <h3 className="slogan__subtitle">Lorem ipsum dolor sit amet.</h3>
         <Link className="slogan__btn" to="/about">
            {`Подробнее о ${profileData.name}`}
         </Link>
      </div>
   )
}

export default Slogan