import React from "react";
import Logo from "../assets/img/Logo.png";
import Gsap from "./Gsap";

const Navbar = ({language,setLanguage}) => {

  

  // localStorage.getItem("idioma");
  // console.log(localStorage.idioma)

  Gsap();
  return (
    <>
      <header className="py-5 mb-auto">
        <nav
          className="headerGsap navbar nav-masthead justify-content-center float-md-end navbar-expand-lg navbar-dark fixed-top"
          style={{ background: "#0d0d0dda" }}
        >
          <div className="container-fluid">
            <a className="float-md-start navbar-brand" href="/">
              <img
                src={Logo}
                alt="Icarus Logo"
                width="50"
                height="50"
                className="d-inline-block align-text-top"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-md-0">
                <li className="nav-item ">
                  <a className="nav-link" href="/login">
                  {language === "es" ? 
                  "Iniciar sesion" : 
                  "Login"
                  }
                  </a>
                </li>
                <li className="nav-item ms-3">
                  <a className="nav-link" href="/#About">
                  {language === "es" ? 
                  "Sobre Nosotros" : 
                  "About us"
                  }
                  </a>
                </li>
                <li className="nav-item ms-3">
                  <a className="nav-link" href="/#Services">
                  {language === "es" ? 
                  "Servicios" : 
                  "Services"
                  }
                  </a>
                </li>
              </ul>

              <div class="navbar-nav mx-2 dropdown">
                <button
                  class="btn btn-outline-light dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {language === "es" ? 
                  "Lenguaje" : 
                  "Language"
                  }
                </button>
                <ul
                  class="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li>
                    <button
                      class="dropdown-item"
                      onClick={()=>setLanguage("en")}>
                      {language === "es"? "English" : "Inglés"}
                    </button>
                  </li>
                  <li>
                    <button
                      class="dropdown-item" onClick={()=>setLanguage("es")}>
                      {language === "es" ? "Spanish" : "Español"}
                    </button>
                  </li>
                </ul>
                <ul></ul>
                <button
                  className="btn btn-primary text-white nav-link button-text"
                  href="/#Contact"
                >
                  {language.idioma === "es" ? 
                  "Contactanos" : 
                  "Contact"
                  }
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
