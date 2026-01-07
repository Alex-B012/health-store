import Line from "../../components/Line/Line";
import LogoComponent from "../../components/LogoComponent/LogoComponent";
import "./footer.scss";
import { contactInfo, socialMedia } from "../../data/data";
import { Link } from "react-router-dom";

function Footer() {
   return (
      <footer className="footer">
         <div className="footer__top">
            <LogoComponent />
            <Line />
         </div>
         <div className="footer__middle">
            <p className="footer__contacts-title">Контакты</p>
            <div className="footer__contacts-list">
               <div className="footer__contacts-item">
                  <p>{contactInfo.phone}</p>
                  <p>{contactInfo.email}</p>
               </div>
               <div className="footer__contacts-item">
                  <p>{contactInfo.name}</p>
                  <p>{contactInfo.inn}</p>
                  <p>{contactInfo.ogrn}</p>
               </div>
               <div className="footer__contacts-item">
                  <p className="footer__contacts-title">Социальные сети</p>
                  <div className="footer__social-media-list">
                     {socialMedia.map((social) => (
                        <Link className="footer__social-media-link" key={social.id} to={social.url}>{social.name}</Link>
                     ))}
                  </div>
               </div>
               <div className="footer__contacts-item">
                  <p className="footer__contacts-title">Для почтовой корреспонденции</p>
                  <p>{contactInfo.address}</p>
               </div>
            </div>
         </div>
         <div className="footer__bottom"></div>
      </footer>
   )
}

export default Footer