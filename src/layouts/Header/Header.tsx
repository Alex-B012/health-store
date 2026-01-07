import LogoComponent from "../../components/LogoComponent/LogoComponent";
import "./header.scss";
import { profileData } from "../../data/data";

function Header() {
   return (
      <header className="header">
         <div className="header__top">
            <LogoComponent name={{
               top: profileData.name_line1,
               bottom: profileData.name_line2
            }} />
            <div className="menu_btn">Menu</div>
         </div>
         <div className="header__bottom"></div>
      </header>
   )
}

export default Header