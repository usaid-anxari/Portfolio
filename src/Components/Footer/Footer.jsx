import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" />
          <p>I'm a Fullstack Developer from, Pakistan.</p>
        </div>
        <div className="footer-top-right">
          <ul className="nav-menu">
            <li><AnchorLink className="anchor-link"  href="https://github.com/usaid-anxari"><p><VscGithub  className="icon" /></p></AnchorLink></li>
            <li><AnchorLink className="anchor-link"  href="https://www.linkedin.com/in/usaid-ahmed-ansari-861547246/"><p><FaLinkedin  className="icon" /></p></AnchorLink></li>
            <li><AnchorLink className="anchor-link"  href="https://www.instagram.com/usaid.anxari/saved/all-posts/"><p><FaSquareInstagram  className="icon" /></p></AnchorLink></li>
            <li><AnchorLink className="anchor-link"  href="https://mail.google.com/mail/u/0/#inbox?compose=new"><p><SiMinutemailer  className="icon" /></p></AnchorLink></li>
          </ul>
        </div>
      </div>
      <hr style={{width:"100%"}}/>
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 Usaid Ansari. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Connect With Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
