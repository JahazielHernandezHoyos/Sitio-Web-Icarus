import React from "react";

//componentes
import Navbar from "../components/Navbar";
import Services from "./sections/Services";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "../components/Footer";
import Slider from "../components/Slider";

const Inicio = () => {
  return (
    <>
      <div>
        <Slider />
        <Navbar />

        <div className="cover-container d-flex w-100 h-100 mx-auto flex-column">
          <About />

          <Services />

          <Contact />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Inicio;
