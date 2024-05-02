import React from "react";
import "./Hero.css";
import profile_logo1 from '../../assets/profile_logo1.png'
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from '../../assets/resume.pdf'

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_logo1} alt="" />
      <h1><span>I'm Usaid Ahmed Ansari,</span> Frontend Developer Based In Pakistan.</h1>
      <p>I Develop Softwears And Websites</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
        <div className="hero-resume"><a href={resume} download='Resume'>My resume</a></div>
      </div>
    </div>
  );
};

export default Hero;
