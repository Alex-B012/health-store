import { Link } from 'react-router-dom'
import './backHomeBtn.scss'
import { linksData } from '../../data/data'

function BackHomeBtn() {
   return (
      <div className="backHomeBtn">
         <Link className="backHomeBtn__link" to={linksData[0].url}>
            На главную
         </Link>
      </div>
   )
}

export default BackHomeBtn