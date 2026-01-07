import "./logo.scss";
import { linksData, profileData } from "../../data/data"
import { Link } from "react-router-dom";

interface LogoProps {
   name?: string;
   link?: boolean;
}

function Logo({ name = "", link = false }: LogoProps) {

   return (
      <div className={`logo`}>
         {link ?
            <Link className="logo__link" to={linksData[0].url}>
               <div className="logo__img-wrapper">
                  <img className="logo__img" src={profileData.logo} alt="Logo" />
               </div>
               {name.length > 0 && <p className={`logo__text`}>{name}</p>}
            </Link> :
            <>
               <div className="logo__img-wrapper">
                  <img className="logo__img" src={profileData.logo} alt="Logo" />
               </div>
               {name.length > 0 && <p className={`logo__text`}>{name}</p>}
            </>}
      </div>
   )
}

export default Logo