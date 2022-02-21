import React from "react";
import Logo from "../assets/img/Logo.png";

const Navbar = () => {
  return (
    <>
      <header class="py-5 mb-auto">
        <nav class="navbar nav-masthead justify-content-center float-md-end navbar-expand-lg navbar-dark fixed-top" style={{background: "#0d0d0dda"}} >
          <div class="container-fluid">
            <a class="float-md-start ms-5 navbar-brand" href="/">
              <img
                src={Logo}
                alt="Icarus Logo"
                width="50"
                height="50"
                class="d-inline-block align-text-top"
              />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item">
                  <a class="nav-link" href="/login">
                    Login
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#About">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Services">
                    Services
                  </a>
                </li>
              </ul>
              <a class="btn btn-primary text-white nav-link me-5 button-text" href="#Contact">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
