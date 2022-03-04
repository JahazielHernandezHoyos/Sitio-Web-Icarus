import githubIMG from "../assets/img/github.svg";
import instagramIMG from "../assets/img/instagram.svg";

const Footer = ({language}) => {
  //pedir año actual para el copyright
  const year = new Date().getFullYear();

  return (
    <footer className="sticky-bottom py-5 container">
      <div className="mx-auto py-3" style={{ width: "90px" }}>
        <a href="https://github.com/IcarusSol"><img className="px-1" src={githubIMG} alt="Github"/></a>
        <a href="https://instagram.com/icarussolutions?utm_medium=copy_link"><img className="px-1" src={instagramIMG} alt="Instragram"/></a>
      </div>
      <p className="text-center lead">
        © {year} {language === "es"? "Todos los derechos reservados." : "All rights reserved."}
        {/* <a href="#">Privacy</a> ·{" "}
        <a href="#">Terms</a> */}
      </p>
    </footer>
  );
};

export default Footer;
