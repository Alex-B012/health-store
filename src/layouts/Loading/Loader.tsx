import LogoFull from '../../components/LogoFull/LogoFull';
import './loader.scss';

interface LoaderProps {
   isHidden: boolean;
}

function Loader({ isHidden }: LoaderProps) {
   return (
      <div className={`loader ${isHidden ? "loader--hidden" : ""}`}>
         <div className="loader__logo-container">
            <LogoFull />
         </div>

         <h2 className='loader__text'>Загрузка...</h2>
      </div>
   )
}

export default Loader