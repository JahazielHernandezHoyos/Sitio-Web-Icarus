import React from "react";

//componentes
import Navbar from "../components/Navbar";

const Inicio = () => {
  return (
    <>
      <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Navbar />
        <section class="text-center container">
          <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
              <h1>Icarus <h1 style={{color: "#f2d027"}}>Solutions</h1></h1>
              <p class="py-5 lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consectetur ad mollitia doloremque, doloribus pariatur molestias consequatur tempora aliquam quo ipsa deleniti commodi laboriosam odio. Tempore consequuntur iure totam error.
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
        <div class="mt-5 container marketing">
          <div class="row">
            <div class="col-lg-4">
              <svg
                class="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 140x140"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777"></rect>
                <text x="50%" y="50%" fill="#777" dy=".3em">
                  140x140
                </text>
              </svg>

              <h2>Heading</h2>
              <p>
                Some representative placeholder content for the three columns of
                text below the carousel. This is the first column.
              </p>
              <p>
                <a class="btn btn-secondary" href="#">
                  View details »
                </a>
              </p>
            </div>
            <div class="col-lg-4">
              <svg
                class="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 140x140"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777"></rect>
                <text x="50%" y="50%" fill="#777" dy=".3em">
                  140x140
                </text>
              </svg>

              <h2>Heading</h2>
              <p>
                Another exciting bit of representative placeholder content. This
                time, we've moved on to the second column.
              </p>
              <p>
                <a class="btn btn-secondary" href="#">
                  View details »
                </a>
              </p>
            </div>
            <div class="col-lg-4">
              <svg
                class="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 140x140"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777"></rect>
                <text x="50%" y="50%" fill="#777" dy=".3em">
                  140x140
                </text>
              </svg>

              <h2>Heading</h2>
              <p>
                And lastly this, the third column of representative placeholder
                content.
              </p>
              <p>
                <a class="btn btn-secondary" href="#">
                  View details »
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;
