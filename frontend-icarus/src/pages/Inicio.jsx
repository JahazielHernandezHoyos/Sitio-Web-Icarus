import React from "react";

//componentes
import Navbar from "../components/Navbar";
import Services from "./sections/Services";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "../components/Footer";
import users from "../assets/img/users.svg";

const Inicio = () => {
  return (
    <>
      <div>
        <div className="cover-container d-flex w-100 h-100 mx-auto flex-column">
          <Navbar />
          <section className=" text-center container">
            <div className="fondo-imagen ">
              <div
                style={{ backgroundColor: "rgba(54, 0, 29, 0.950)" }}
                className="row py-lg-5 p-5"
              >
                <div className="containerGsap col-lg col-md-8 mx-auto">
                  <div className="headerGsap">
                    <div className="container text-center">
                      <h1>Icarus</h1>
                      <h1 style={{ color: "#f2d027" }}>Solutions</h1>
                    </div>

                    <p className="lead text-sec text-break">
                      Digitization is increasingly present in the life of the
                      entire society. Almost all aspects of our lives can be
                      managed through the computer or our cell phones, through
                      web or mobile applications. Surely you are wondering: And
                      how can I transform my traditional business into a digital
                      one? How can I streamline my company's processes with
                      technology? How can I make my business more efficient?
                    </p>
                    <img
                      className="text-center col-auto mx-5 bd-placeholder-img rounded-circle"
                      width="200"
                      height="200"
                      src={users}
                      role="img"
                      aria-label="Placeholder: 140x140"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                      alt=""
                    />
                    <p className="lead">
                      <a
                        href="#About"
                        className="me-3 btn btn-primary button-text"
                      >
                        About us
                      </a>
                      {/* <button href="#" className="ms-3 btn btn-secondary button-text">
                  View on Github
                </button> */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

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
