import "./aboutGreeting.scss";
import AboutGreetingSlogan from "./AboutGreetingSlogan/AboutGreetingSlogan";

function AboutGreeting() {
  return (
    <div className="about-greeting">
      <div className="about-greeting-container">
        <AboutGreetingSlogan />
      </div>
    </div>
  );
}

export default AboutGreeting;
