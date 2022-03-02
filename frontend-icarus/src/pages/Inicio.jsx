import React from "react";

//componentes
import Navbar from "../components/Navbar";
import Services from "./sections/Services";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "../components/Footer";
import Slider from "../components/Slider";

const Inicio = ({language,setLanguage}) => {
  return (
    <>
      <div>
        <Slider language={language} />
        <Navbar language={language} setLanguage={setLanguage} />

        <div className="cover-container d-flex w-100 h-100 mx-auto flex-column">
          <About language={language} />

          <Services language={language} />

          <Contact language={language} />
        </div>

        <Footer language={language} />
      </div>
    </>
  );
};

export default Inicio;
