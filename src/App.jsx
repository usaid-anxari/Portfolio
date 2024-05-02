import React from "react";
import { About, Contact, Footer, Hero, MyWork, Navbar } from "./Components/index";
import { ToastContainer } from "react-toastify";
import 'react-toastify/ReactToastify.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <ToastContainer/>
      <Hero />
      <About />
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
