import "./aboutGreetingSlogan.scss";
import { profileData } from "../../../../data/data";

function AboutGreetingSlogan() {
  return (
    <div className="about-greeting-slogan">
      <h2 className="about-greeting-slogan__title">
        {profileData.slogans.slogan_1}
      </h2>
      <h3 className="about-greeting-slogan__subtitle">
        {profileData.slogans.slogan_2}
      </h3>
    </div>
  );
}

export default AboutGreetingSlogan;
