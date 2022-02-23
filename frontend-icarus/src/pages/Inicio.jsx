import React from "react";

//componentes
import Navbar from "../components/Navbar";
import Services from "./sections/Services";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "../components/Footer";

const Inicio = () => {
  return (
    <>
      <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Navbar />
        <section class="text-center container">
          
          <div class="row py-lg-5">
            <div class="containerGsap col-lg col-md-8 mx-auto">
              <div class="headerGsap">
              <h1>
                Icarus <h1 style={{ color: "#f2d027" }}>Solutions</h1>
              </h1>
              <p class="py-5 lead text-sec">
              Digitization is increasingly present in the life of the entire society. Almost all aspects of our lives can be managed through the computer or our cell phones, through web or mobile applications.
              Surely you are wondering: And how can I transform my traditional business into a digital one? How can I streamline my company's processes with technology? How can I make my business more efficient?
              </p>
              <p class="lead">
                <a href="#About" class="me-3 btn btn-primary button-text">
                  About us
                </a>
                {/* <button href="#" class="ms-3 btn btn-secondary button-text">
                  View on Github
                </button> */}
              </p>
              </div>

            </div>
          </div>
        </section>
        
        <About />

        <Services />
        
        <Contact />
        
      </div>
      
      <Footer />
    </>
  );
};

export default Inicio;
