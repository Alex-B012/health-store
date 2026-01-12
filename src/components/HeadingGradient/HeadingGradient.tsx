import './headingGradient.scss'

interface HeadingGradientProps {
   heading: { line1: string, line2?: string };
   titlePosition?: string,
}

function HeadingGradient({ heading, titlePosition }: HeadingGradientProps) {
   let titlePositionClass = '';
   if (titlePosition === 'center') {
      titlePositionClass = 'heading-gradient--center';
   } else if (titlePosition === 'right') {
      titlePositionClass = 'heading-gradient--right';
   }


   return (
      <h3 className={`heading-gradient ${titlePositionClass}`}>
         <span
            className={`heading-gradient__line heading-gradient__line1`}>{heading.line1}
         </span>
         {heading.line2 &&
            <span
               className={`heading-gradient__line heading-gradient__line2`}>{heading.line2}
            </span>}
      </h3>
   )
}

export default HeadingGradient