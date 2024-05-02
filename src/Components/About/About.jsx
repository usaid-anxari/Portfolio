import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_logo3 from "../../assets/profile_logo3.png";
// import profile_img from '../../assets/profile_img.svg'

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_logo3} alt="" />
        </div>
        <div className="about-right">
          <div className="about-pera">
            <p>
              Hello there, I Am Usaid Ahmed Ansari And I am A Full Stack Web
              Developer Located in Pakistan.
            </p>
            <p>
              I Have Deep Knowledge And Proficiency In Frontend, Backend And
              Responsive Web Design.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p><hr style={{width:'50%'}}/>
            </div>
            <div className="about-skill">
              <p>Javascript</p><hr style={{width:'80%'}}/>
            </div>
            <div className="about-skill">
              <p>HTML & CSS</p><hr style={{width:'70%'}}/>
            </div>
            <div className="about-skill">
              <p>HTML & CSS</p><hr style={{width:'40%'}}/>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="about-achievements">
        <div className="about-achievement">
            <h1>20+</h1>
            <p>Projects</p>
        </div>
      </div> */}
    </div>
  );
};

export default About;
