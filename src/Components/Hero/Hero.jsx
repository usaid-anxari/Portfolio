import React from "react";
import "./Hero.css";
import profile_logo1 from '../../assets/profile_logo1.png'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_logo1} alt="" />
      <h1><span>I'm Usaid Ahmed Ansari,</span> Fullstack Developer Based In Pakistan.</h1>
      <p>I Develop Softwears And Websites</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
        <div className="hero-resume"><a href='https://www.canva.com/design/DAGEGyJiOGc/wLGt0PpAGES_1ZpSwvyEog/view?utm_content=DAGEGyJiOGc&utm_campaign=designshare&utm_medium=link&utm_source=editor' target="_blank" download={'Resume'}>My resume</a></div>
      </div>
    </div>
  );
};

export default Hero;
