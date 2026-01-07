import Logo from '../Logo/Logo'
import './logoComponent.scss'
import { profileData } from "../../data/data";

function LogoComponent() {
   return (
      <div className="logo-component">
         <Logo />
         <div className="logo-component__title">
            <h1 className="logo-component__top">{profileData.name_line1}</h1>
            <p className="logo-component__bottom">{profileData.name_line2}</p>
         </div>
      </div >
   )
}

export default LogoComponent