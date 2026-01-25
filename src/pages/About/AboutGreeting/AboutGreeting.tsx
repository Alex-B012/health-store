import LogoFull from "../../../components/LogoFull/LogoFull";
import "./aboutGreeting.scss";
import AboutGreetingSlogan from "./AboutGreetingSlogan/AboutGreetingSlogan";

function AboutGreeting() {
  return (
    <div className="about-greeting">
      <div className="about-greeting-container">
        <LogoFull />
        <AboutGreetingSlogan />
      </div>
    </div>
  );
}

export default AboutGreeting;
