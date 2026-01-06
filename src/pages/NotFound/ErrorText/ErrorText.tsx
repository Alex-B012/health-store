import "./errorText.scss";

interface ErrorTextProps {
   data: {
      title: string;
      subtitle: string;
      message: string;
   };
}

function ErrorText({ data }: ErrorTextProps) {
   return (
      <div className="error-text">
         <h2>{data.title}</h2>
         <h3>{data.subtitle}</h3>
         <p>{data.message}</p>
      </div>
   )
}

export default ErrorText