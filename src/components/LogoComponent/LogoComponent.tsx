import Logo from '../Logo/Logo'
import './logoComponent.scss'

function LogoComponent({ name }: { name: { top: string; bottom: string } }) {
   return (
      <div className="logo-component">
         <Logo />
         <div className="logo-component__title">
            <h1 className="logo-component__top">{name.top}</h1>
            <p className="logo-component__bottom">{name.bottom}</p>
         </div>
      </div >
   )
}

export default LogoComponent