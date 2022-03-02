import githubIMG from "../assets/img/github.svg";
import instagramIMG from "../assets/img/instagram.svg";

const Footer = () => {
  //pedir año actual para el copyright
  const year = new Date().getFullYear();

  return (
    <footer className="sticky-bottom py-5 container">
      <div className="mx-auto py-3" style={{ width: "90px" }}>
        <a href="https://github.com/"><img className="px-1" src={githubIMG}/></a>
        <a href="https://www.instagram.com/"><img className="px-1" src={instagramIMG}/></a>
      </div>
      <p className="text-center lead">
        © {year} {`${localStorage.idioma === "es" ? 
                  "Icarus Solutions. Todos los derechos reservados." : 
                  "Icarus Solutions. All rights reserved."
                  }`}
        {/* <a href="#">Privacy</a> ·{" "}
        <a href="#">Terms</a> */}
      </p>
    </footer>
  );
};

export default Footer;
