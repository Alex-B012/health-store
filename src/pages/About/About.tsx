import "./about.scss";
import BackHomeBtn from "../../components/BackHomeBtn/BackHomeBtn";
import AboutCompanyIntro from "./AboutCompanyIntro/AboutCompanyIntro";
import AboutGreeting from "./AboutGreeting/AboutGreeting";
import useTabTitleAbout from "../../shared/hooks/useTabTitleAbout";

function About() {
  const pageName = useTabTitleAbout();
  console.log("pageName", pageName);
  return (
    <div className="aboutPage">
      <BackHomeBtn pageName={pageName} />
      <AboutGreeting />
      <AboutCompanyIntro />
    </div>
  );
}

export default About;
