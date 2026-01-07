import "./logoFull.scss"
import { profileData } from "../../data/data";

function LogoFull() {
   return (
      <div className="logo-full">
         <img className="logo-full__img" src={profileData.logo_text} alt="Logo" />
      </div>
   )
}

export default LogoFull