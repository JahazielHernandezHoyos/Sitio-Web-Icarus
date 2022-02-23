const Footer = () => {

  //pedir año actual para el copyright
  const year = new Date().getFullYear();

  return (
    <footer class="py-5 container">
      <p class="text-center lead">
        © {year} Icarus Solutions. All rights reserved.
        {/* <a href="#">Privacy</a> ·{" "}
        <a href="#">Terms</a> */}
      </p>
    </footer>
  );
};

export default Footer;
