import { Link } from "react-router-dom";
import "./errorBtns.scss";

interface ErrorBtnsProps {
   data: {
      errorBtnHome: {
         url: string;
         name: string;
      };
   };
}

function ErrorBtns({ data }: ErrorBtnsProps) {
   return (
      <div className="error-btns">
         <Link className="error-btns__link" to={data.errorBtnHome.url}>{data.errorBtnHome.name}</Link>
      </div>
   )
}

export default ErrorBtns