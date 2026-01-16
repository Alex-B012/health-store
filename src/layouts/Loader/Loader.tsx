import './loader.scss';
import { profileData } from '../../data/data';

interface LoaderProps {
   isHidden: boolean;
}

function Loader({ isHidden }: LoaderProps) {
   return (
      <div className={`loader ${isHidden ? "loader--hidden" : ""}`}>
         <h2 className='loader__text'>{profileData.name}</h2>
      </div>
   )
}

export default Loader