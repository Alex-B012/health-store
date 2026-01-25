import "./about.scss";
import AboutCompanyIntro from "./AboutCompanyIntro/AboutCompanyIntro";
import AboutGreeting from "./AboutGreeting/AboutGreeting";

function About() {
  return (
    <div className="aboutPage">
      <AboutGreeting />
      <AboutCompanyIntro />
    </div>
  );
}

export default About;
