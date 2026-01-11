import Line from "../../components/Line/Line";
import LogoComponent from "../../components/LogoComponent/LogoComponent";
import "./header.scss";

function Header() {
   return (
      <header className="header" id='top'>
         <div className="header__top">
            <LogoComponent />
            <div className="menu_btn">Menu</div>
         </div>
         <Line />
         <div className="header__bottom"></div>
      </header>
   )
}

export default Header