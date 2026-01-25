import React from "react";

import "./aboutCommonComp.scss";

interface AboutCommonCompProp {
  children?: React.ReactNode;
}

function AboutCommonComp({ children }: AboutCommonCompProp) {
  return (
    <div className="about-common-comp">
      <div className="about-common-comp__content">{children}</div>
    </div>
  );
}

export default AboutCommonComp;
