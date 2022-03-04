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
          {/* linea con color amarillo divisor */}
          <hr style={{width: "50%", margin: "auto"}}/>

          <Services language={language} />
          <hr style={{width: "50%", margin: "auto"}}/>
          <Contact language={language} />
        </div>
        <hr style={{width: "50%", margin: "auto"}}/>
        <Footer language={language} />
      </div>
    </>
  );
};

export default Inicio;
