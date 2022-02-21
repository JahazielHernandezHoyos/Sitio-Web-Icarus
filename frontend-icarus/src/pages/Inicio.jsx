import React from "react";

//componentes
import "../components/Gsap";
import Navbar from "../components/Navbar";
import Services from "./sections/Services";
import Gsap from "../components/Gsap";
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
            <div class="containerGsap col-lg-6 col-md-8 mx-auto">
              <div class="headerGsap">
              <h1>
                Icarus <h1 style={{ color: "#f2d027" }}>Solutions</h1>
              </h1>
              <p class="py-5 lead text-sec">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                consectetur ad mollitia doloremque, doloribus pariatur molestias
                consequatur tempora aliquam quo ipsa deleniti commodi laboriosam
                odio. Tempore consequuntur iure totam error.
              </p>
              <p class="lead">
                <a href="#Contact" class="me-3 btn btn-primary button-text">
                  Contact
                </a>
                <button href="#" class="ms-3 btn btn-secondary button-text">
                  View on Github
                </button>
              </p>
              </div>

            </div>
          </div>
        </section>

        <Services />

        <About />
        
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Inicio;
