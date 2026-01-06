import './notFound.scss'
import { error404 } from '../../data/error'
import ErrorNumber from './ErrorNumber/ErrorNumber'
import ErrorText from './ErrorText/ErrorText'
import ErrorBtns from './ErrorBtns/ErrorBtns'


function NotFound() {
   return (
      <div className="notFound">
         <ErrorNumber />
         <ErrorText data={error404} />
         <ErrorBtns data={{
            errorBtnHome: error404.errorBtnHome,
         }} />
      </div>
   )
}

export default NotFound