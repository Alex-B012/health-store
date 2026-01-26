import Logo from "../Logo/Logo";
import "./logoComponent.scss";
import { linksData, profileData } from "../../data/data";
import { Link } from "react-router-dom";

function LogoComponent() {
  return (
    <div className="logo-component">
      <Link to={linksData.home.url} className="logo-component__link">
        <Logo />
        <div className="logo-component__title">
          <h1 className="logo-component__top">{profileData.name_line1}</h1>
          <p className="logo-component__bottom">{profileData.name_line2}</p>
        </div>
      </Link>
    </div>
  );
}

export default LogoComponent;
