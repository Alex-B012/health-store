import './text.scss';

interface TextProps {
   title?: string;
   text?: string[] | string;
   titlePosition?: string
};

function Text({ title, text, titlePosition }: TextProps) {
   let titlePositionClass = '';
   if (titlePosition === 'center') {
      titlePositionClass = 'text--center';
   } else if (titlePosition === 'right') {
      titlePositionClass = 'text--right';
   }

   return (
      <div className="text">
         {title && <h3 className={"text__title " + titlePositionClass}>{title}</h3>}
         {Array.isArray(text) &&
            text.map((paragraph: string, index: number) => (
               <p key={index} className="text__content">
                  {paragraph}
               </p>
            ))}

         {typeof text === 'string' && (
            <p className="text__content">{text}</p>
         )}
      </div>
   )
}

export default Text