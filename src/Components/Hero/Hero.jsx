import React from "react";
import profile_logo1 from '../../assets/profile_logo1.png'
// import profile_logo2 from '../../assets/profile_logo2.png'

import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_logo1} alt="" />
      <h1><span>I'm Usaid Ahmed Ansari,</span> Frontend Developer Based In Pakistan.</h1>
      <p>I Develop Softwears And Websites</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
