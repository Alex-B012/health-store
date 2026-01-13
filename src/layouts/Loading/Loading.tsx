import LogoFull from '../../components/LogoFull/LogoFull';
import './loading.scss';

function Loading() {
   return (
      <div className="loading">
         <div>

         </div>
         <LogoFull />
         <h2 className='loading__text'>Загрузка...</h2>
      </div>
   )
}

export default Loading