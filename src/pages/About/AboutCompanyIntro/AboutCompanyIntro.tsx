import AboutCommonComp from "../AboutCommonComp/AboutCommonComp";
import "./aboutCompanyIntro.scss";
import { companyPromo } from "../../../data/data";

function AboutCompanyIntro() {
  return (
    <div className="about-company-intro">
      <p className="about-company-intro__text">
        <span className="about-company-intro__text--bold">
          {companyPromo.title}
        </span>
        {" – "} {companyPromo.desc}
      </p>
      {companyPromo.text.map((item, idx) => (
        <AboutCommonComp key={idx}>
          <p className="about-company-intro__points"> {item}</p>
        </AboutCommonComp>
      ))}
    </div>
  );
}

export default AboutCompanyIntro;
