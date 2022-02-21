import React from "react";

//componentes
import Navbar from "../components/Navbar";
import Services from "./sections/Services";

const Inicio = () => {
  return (
    <>
      <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Navbar />
        <section className="banner">
          <div className="banner-content">
            <h1 className="text-light">Tecnoacademia del Oriente</h1>
            <a href="/nosotros">Acerca de nosotros</a>
          </div>
        </section>

        <section class="text-center container">
          <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
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
                <button href="#" class="me-3 btn btn-primary button-text">
                  Contact
                </button>
                <button href="#" class="ms-3 btn btn-secondary button-text">
                  View on Github
                </button>
              </p>
            </div>
          </div>
        </section>

        <Services />
      </div>
    </>
  );
};

export default Inicio;
