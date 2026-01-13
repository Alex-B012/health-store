import './notFound.scss'
import { error404 } from '../../data/error'
import ErrorNumber from './ErrorNumber/ErrorNumber'
import ErrorText from './ErrorText/ErrorText'
import ErrorBtns from './ErrorBtns/ErrorBtns'
import { useEffect } from 'react'

interface NotFoundProps {
   onLoad: () => void;
}

function NotFound({ onLoad }: NotFoundProps) {
   useEffect(() => {
      onLoad();
      window.location.hash = "#top";
   }, [onLoad]);

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