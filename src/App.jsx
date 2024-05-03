import React from "react";
import {
  About,
  Contact,
  Footer,
  Hero,
  MyWork,
  Navbar,
} from "./Components/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import wa_logo1 from './assets/wa_logo1.png'
// import { SiWhatsapp } from "react-icons/si";

const App = () => {
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <Hero />
      <About />
      <MyWork />
      <Contact />
      <Footer />
      <div
        className="fixed-bottom right-100 p-3"
        style={{ zIndex: "6", left: "initail" }}>
        <a
          href="https://wa.me/+923142759457?text=hello how can i help you ?"
          target="_blank">
        <img src={wa_logo1} alt="" />
        </a>
      </div>
      {/* https://wa.me/+923142759457?text=hello how can i help you ? */}
    </div>
  );
};

export default App;
